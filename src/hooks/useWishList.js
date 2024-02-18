// import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { toast } from "react-hot-toast";

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


    if (wishProduct) {
      setWishList([...wishList, wishProduct]);
    }

    toast.success(`You added ${title} to wishlist`);
  }

  // Remove item from wishlist
  function handleRemoveItemFromWishList(productId) {
    const newWishList = wishList.filter((item) => item.id !== productId);

    setWishList(newWishList);
    toast.error(`You removed item from wishlist`)
  }

  console.log(wishList);

  return {
    wishList,
    onAddProductToWishList: handleAddProductToWishList,
    onRemoveItemFromWishList: handleRemoveItemFromWishList,
    isItemAlreadyInWishList,
  };
}
