export const formatMonth = (ym: string) => {
  const [y, m] = ym.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString('en-US', { year: 'numeric', month: 'short', timeZone: 'UTC' });
};

export const formatDay = (ymd: string) =>
  new Date(`${ymd}T00:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });

export const projectPath = (id: string) => `/projects/${id}/`;
