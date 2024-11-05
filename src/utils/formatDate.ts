export function formatDate(dateString: string): string {
  const options = { year: "numeric", month: "short", day: "numeric" } as const;
  return new Date(dateString).toLocaleDateString(undefined, options);
}
