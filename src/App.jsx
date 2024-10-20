import { useState } from 'react'

import './App.css'
// import LoadData from './Component/LoadData'
import NewCopuntryData from './Component/NewCopuntryData';


function App() {
  const [count, setCount] = useState(0)
  {
    console.log('hello')
    
   }

  return (
    <>
      {/* <LoadData></LoadData> */}
  
      
      <NewCopuntryData></NewCopuntryData>
    </>
  )
}

export default App
