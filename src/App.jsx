import { Routes, Route, Navigate } from "react-router-dom";

import ShoppingCartPage from "./app/pages/ShoppingCartPage";
import ProductsListPage from "./app/pages/ProductsListPage";
import ProductInfoPage from "./app/pages/ProductInfoPage";
import NotFoundPage from "./app/pages/NotFoundPage";
import WishListPage from "./app/pages/WishListPage";
import AppLayout from "./app/AppLayout";

function App() {
  return (
    <>
      <Routes>
        {/* Authorization Layout */}
        <Route></Route>

        {/* App Layout */}
        <Route element={<AppLayout />}>
          <Route
            index
            element={<Navigate replace to="accessories?category=all" />}
          />
          <Route path="accessories" element={<ProductsListPage />} />
          <Route path="accessories/:id" element={<ProductInfoPage />} />
          <Route path="cart" element={<ShoppingCartPage />} />
          <Route path="wishlist" element={<WishListPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
