import { Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import ShoppingCartPage from './app/pages/ShoppingCartPage'
import ProductsListPage from './app/pages/ProductsListPage'
import ProductInfoPage from './app/pages/ProductInfoPage'
import NotFoundPage from './app/pages/NotFoundPage'
import WishListPage from './app/pages/WishListPage'
import ProfilePage from './app/pages/ProfilePage'
import PaymentPage from './app/pages/PaymentPage'
import SignUpPage from './auth/pages/SignUpPage'
import LoginPage from './auth/pages/LoginPage'
import AuthLayout from './auth/AuthLayout'
import AppLayout from './app/AppLayout'

function App() {
  return (
    <>
      <Routes>
        {/* Authorization Layout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
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
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: '#eee',
            color: '#202020',
          },
        }}
      />
    </>
  )
}

export default App
