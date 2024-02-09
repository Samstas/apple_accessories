import { Routes, Route, Navigate } from "react-router-dom";

import ShoppingCartPage from "./app/pages/ShoppingCartPage";
import ProductsListPage from "./app/pages/ProductsListPage";
import ProductInfoPage from "./app/pages/ProductInfoPage";
import NotFoundPage from "./app/pages/NotFoundPage";
import WishListPage from "./app/pages/WishListPage";
import AppLayout from "./app/AppLayout";
import AuthLayout from "./auth/AuthLayout";
import Login from "./auth/pages/Login";
import SignUp from "./auth/pages/SignUp";
import TestNewProductList from "./components/TestNewProductList";

// ❌ Add function to convert currency
// ❌ Refactor code/ create context or custom hooks
// ❌ Set regular colors
// ❌ Change select style Sorting
// ❌ Make Authentication with Firebase
// ❌ Add react-toaster for notifications
// ❌ Change style of all buttons, bg, border-radius, hover, active ...

function App() {
  return (
    <>
      <Routes>
        {/* Authorization Layout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

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

          {/* Testing Products List  */}
          <Route path="test" element={<TestNewProductList />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
