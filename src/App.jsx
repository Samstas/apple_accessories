import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./app/AppLayout";
import ProductsListPage from "./app/pages/ProductsListPage";
import ProductItemPage from "./app/pages/ProductItemPage";
import NotFoundPage from "./app/pages/NotFoundPage";
import ShoppingCartPage from "./app/pages/ShoppingCartPage";

function App() {
  return (
    <>
      <Routes>
        {/* Authorization Layout */}
        <Route></Route>

        {/* App Layout */}
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="accessories" />} />
          <Route path="accessories" element={<ProductsListPage />} />
          <Route path="accessories/:id" element={<ProductItemPage />} />
          <Route path="cart" element={<ShoppingCartPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
