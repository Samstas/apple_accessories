import { Routes, Route, Navigate } from "react-router-dom";

import ShoppingCartPage from "./app/pages/ShoppingCartPage";
import ProductsListPage from "./app/pages/ProductsListPage";
import ProductInfoPage from "./app/pages/ProductInfoPage";
import NotFoundPage from "./app/pages/NotFoundPage";
import WishListPage from "./app/pages/WishListPage";
import ProfilePage from "./app/pages/ProfilePage";
import AuthLayout from "./auth/AuthLayout";
import SignUp from "./auth/pages/SignUp";
import AppLayout from "./app/AppLayout";
import Login from "./auth/pages/Login";

// ✅ Add function to convert currency
// ❌ Refactor code/ create context or custom hooks
// ✅ Set regular colors
// ✅ Change select style Sorting
// ✅ Make Authentication with Firebase
// ❌ Add react-toaster for notifications
// ✅ Change style of all buttons, bg, border-radius, hover, active ...
// - ✅ Button style,
// - ✅ Background color
// - ✅ Search Input
// - ❌ Favicon
// - ✅ Selector with options Design
// - ❌ Responsiveness

// ❌ Add Loader, when products list loading
// ❌ OnClick Checkout check if isAuth true, next step...
// ❌ React Hook Form refactor
// ❌ Style of Profile Page

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
          <Route path="profile" element={<ProfilePage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
