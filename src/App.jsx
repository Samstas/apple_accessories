import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import ShoppingCartPage from "./app/pages/ShoppingCartPage";
import ProductsListPage from "./app/pages/ProductsListPage";
import ProductInfoPage from "./app/pages/ProductInfoPage";
import NotFoundPage from "./app/pages/NotFoundPage";
import WishListPage from "./app/pages/WishListPage";
import ProfilePage from "./app/pages/ProfilePage";
import PaymentPage from "./app/pages/PaymentPage";
import LoginPage from "./auth/pages/LoginPage";
import AuthLayout from "./auth/AuthLayout";
import SignUp from "./auth/pages/SignUp";
import AppLayout from "./app/AppLayout";

// ✅ Add function to convert currency
// ✅ Set regular colors
// ✅ Change select style Sorting
// ✅ Make Authentication with Firebase
// ✅ Add react-toaster for notifications
// ✅ Change style of all buttons, bg, border-radius, hover, active ...
// - ✅ Button style,
// - ✅ Background color
// - ✅ Search Input
// - ✅ Favicon
// - ✅ Selector with options Design
// - ✅ Responsiveness

// ❌ Refactor code/ create context or custom hooks
// ❌ React Hook Form refactor
// ✅ Add Loader, when products list loading
// ✅ OnClick Checkout check if isAuth true, next step...
// ✅ Style of Profile Page

function App() {
  return (
    <>
      <Routes>
        {/* Authorization Layout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
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

        <Route path="payment" element={<PaymentPage />} />
      </Routes>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#eee",
            color: "#202020",
          },
        }}
      />
    </>
  );
}

export default App;
