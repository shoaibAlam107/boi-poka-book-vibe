const getStoredWishList = () => {
  const wishstoredStr = localStorage.getItem("wish list");
  if (wishstoredStr) {
    const wishStored = JSON.parse(wishstoredStr);
    return wishStored;
  } else {
    return [];
  }
};

const addWishList = (id) => {
  const wishStored = getStoredWishList(id);
  if (wishStored.includes(id)) {
    console.log(id, "already exist");
  } else {
    wishStored.push(id);
    const wishstoredStr = JSON.stringify(wishStored);
    localStorage.setItem("wish list", wishstoredStr);
  }
};

export { addWishList }
