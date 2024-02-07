// import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useWishList() {
  const [wishList, setWishList] = useLocalStorage([], "wishlist");

  function isItemAlreadyInWishList(itemId) {
    return wishList?.some((item) => item.id === itemId);
  }

  // Add item to wishlist
  function handleAddProductToWishList(productId, image, title, price) {
    const wishProduct = {
      id: productId,
      image,
      title,
      price,
    };

    // const isProductAlreadyInWishList = wishList?.some(
    //   (item) => item.id === productId
    // );

    
    if (wishProduct) {
      setWishList([...wishList, wishProduct]);
    }

    // alert(`✅You added ${title} to wishlist 🔖`);
  }

  // Remove item from wishlist
  function handleRemoveItemFromWishList(productId) {
    const newWishList = wishList.filter((item) => item.id !== productId);

    setWishList(newWishList);
  }

  console.log(wishList);

  return {
    wishList,
    handleAddProductToWishList,
    handleRemoveItemFromWishList,
    isItemAlreadyInWishList,
  };
}
