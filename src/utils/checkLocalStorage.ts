// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function checkLocalStorage(field: string, payload: any) {
  if (
    !localStorage.getItem(field) ||
    localStorage[field] === undefined ||
    localStorage[field] === 'undefined'
  ) {
    localStorage.setItem(field, JSON.stringify(payload));
  }
  return JSON.parse(localStorage.getItem(field) as string);
}
