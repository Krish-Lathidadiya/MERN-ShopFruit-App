import React from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import AddProduct from './components/AddProduct'

function App() {
  return (
    <div>
      <Header/>
      <AddProduct/>
      <ProductList/>
    </div>
  )
}

export default App