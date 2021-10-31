
const TravelDb = () => localStorage.getItem('Travel');

const getStoredBook = () => {
  const exists = TravelDb();
  return exists ? JSON.parse(exists) : {};
}

const clearTheBooking = () => {
  localStorage.removeItem('Travel');
}

export {getStoredBook, clearTheBooking}