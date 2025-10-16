import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './components/Login'
import Home from './components/Home'
import Cart from './components/Cart'
import { Provider } from 'react-redux'
import store from './store'
import PrivateRoute from './components/PrivateRoute'
import { useEffect, useState } from 'react'
import { useAppDispatch } from './hooks'
import { loginSuccess } from './features/authSlice'
import Product from './components/Product'
import { LoaderIcon } from 'lucide-react'
import { cn } from './lib/utils'

function AppRoutes() {

  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState<boolean>(true)
  
    useEffect(() => {
      const token = localStorage.getItem("token")
      const username = localStorage.getItem("name")
      if (token && username) {
        dispatch(loginSuccess({ token, username }))
      }
      setLoading(false)
}, [dispatch])

  if (loading) {
    return(
      <LoaderIcon className={cn("size-4 animate-spin my-[50vh] mx-auto")}/>
    )
  }

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route element={<Layout/>}>
          <Route element={<PrivateRoute/>}>
            <Route path='/home' element={<Home/>}/>
            <Route path='/home/:id' element={<Product/>}/>
            <Route path='/home/cart' element={<Cart/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function App() {
  return (
    <Provider store={store}>
      <AppRoutes/>
    </Provider>
  )
}

export default App

// E-COMMERCE ISSUES
// - CART
// - PRODUCTS
// - LOGIN/ USER OR ADMIN
// - ADMIN CAN CREATE, UPDATE AND DELETE ANY ITEM
// - USER ONLY CAN READ AND ADD OU DELETE FROM YOUR CART

