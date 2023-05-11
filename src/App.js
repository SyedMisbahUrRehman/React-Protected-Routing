import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MenuBar from './components/MenuBar'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Products from './components/Products'
import Protected from './components/Protected'
export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(null)
  const signin = () => {
    setIsSignedIn(true)
  }
  const signout = () => {
    setIsSignedIn(false)
  }
  return (
    <div className="container mt-5">
      <h2 className="mb-5 text-center">React Protected Routes Example</h2>
      <BrowserRouter>
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Dashboard />
              </Protected>
            }
          />
          <Route
            path="/products"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Products />
              </Protected>
            }
          />
        </Routes>
        {isSignedIn ? (
          <div className="d-grid mt-5">
            <button className="btn-danger" onClick={signout}>
              Sign out
            </button>
          </div>
        ) : (
          <div className="d-grid mt-5">
            <button className="btn-dark" onClick={signin}>
              Sign in
            </button>
          </div>
        )}
      </BrowserRouter>
    </div>
  )
}