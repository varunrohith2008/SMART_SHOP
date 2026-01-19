import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import ProductList from './pages/ProductList'
import ProductDetails from './pages/ProductDetails'
import ProductEdit from './pages/ProductEdit'
import OrderList from './pages/OrderList'
import OrderDetails from './pages/OrderDetails'
import UserProfile from './pages/UserProfile'
import ThemeSwitcher from './pages/ThemeSwitcher'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/products" replace />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/details" element={<ProductDetails />} />
        <Route path="products/edit" element={<ProductEdit />} />
        <Route path="orders" element={<OrderList />} />
        <Route path="orders/details" element={<OrderDetails />} />
        <Route path="user" element={<UserProfile />} />
        <Route path="theme" element={<ThemeSwitcher />} />
      </Route>
    </Routes>
  )
}

export default App
