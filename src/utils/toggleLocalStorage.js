export function toggleLocalStorage(status, field, payload) {
  if (!localStorage.getItem(field)) {
    localStorage.setItem(field, JSON.stringify([]));
  }

  if (status) {
    const newArray = JSON.parse(localStorage.getItem(field)).filter(
      (el) => el.id !== payload.id,
    );
    localStorage.setItem(field, JSON.stringify(newArray));
    return;
  }
  const newArray = JSON.parse(localStorage.getItem(field));
  if (newArray.some((el) => el.id === payload.id)) {
    return;
  }
  newArray.push(payload);
  localStorage.setItem(field, JSON.stringify(newArray));
}
