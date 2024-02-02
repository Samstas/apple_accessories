import { Routes, Route } from "react-router-dom";
import AppLayout from "./app/AppLayout";
import ProductsPage from "./app/pages/ProductsPage";
import ProductItemPage from "./app/pages/ProductItemPage";
import NotFoundPage from "./app/pages/NotFoundPage";
import ShoppingCartPage from "./app/pages/ShoppingCartPage";

// 1. Routers
// 2. Pages - (AppLayout)
// - Navbar
// 3. Templates for

function App() {
  return (
    <>
      <Routes>
        {/* Authorization Layout */}
        <Route></Route>

        {/* App Layout */}
        <Route element={<AppLayout />}>
          <Route index element={<ProductsPage />} />
          <Route path="products/:id" element={<ProductItemPage />} />
          <Route path="cart" element={<ShoppingCartPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
