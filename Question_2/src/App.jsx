import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductTab from './ProductTab.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h3>Displaying Products</h3>
       <ProductTab/>
    </>
  )
}

export default App
