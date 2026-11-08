export interface Day { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 }
export interface Activity { total: number; cells: (Day | null)[] }

let cache: Promise<Activity | null> | undefined;

/**
 * Descarga TU actividad real de GitHub al compilar (no es una simulación).
 * Si falla la red, devuelve null y el bloque simplemente no se muestra.
 */
export function getContributions(user: string, weeks = 20): Promise<Activity | null> {
  cache ??= (async () => {
    try {
      const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${user}?y=last`);
      if (!res.ok) return null;
      const data = await res.json();
      const days: Day[] = data?.contributions;
      if (!Array.isArray(days) || days.length === 0) return null;
      const total = days.reduce((sum, d) => sum + d.count, 0);
      const recent = days.slice(-weeks * 7);
      const pad = new Date(recent[0].date + 'T00:00:00Z').getUTCDay(); // alinear a domingo
      return { total, cells: [...Array<null>(pad).fill(null), ...recent] };
    } catch {
      return null;
    }
  })();
  return cache;
}
