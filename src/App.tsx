import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
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

function AppRoutes() {

  const dispatch = useAppDispatch()
  const token = localStorage.getItem("token")
  const username = localStorage.getItem("name")
  const isAdmin = localStorage.getItem("isAdmin")
  const [loading, setLoading] = useState<boolean>(true)
  
  useEffect(()=> {
    let parsedValue = false
    if (typeof isAdmin === "string") {
      try {
        parsedValue = JSON.parse(isAdmin)
      } catch (error) {
        parsedValue = false
      }
    }
    if (token && username) {
      dispatch(loginSuccess({token, isAdmin: parsedValue, username}))
    }
    setLoading(false)
  }, [])


  if (loading) {
    return(
      <p>carregando...</p>
    )
  }

  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Login/>}/>
          <Route element={<PrivateRoute/>}>
            <Route path='/home' element={<Home/>}/>
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

