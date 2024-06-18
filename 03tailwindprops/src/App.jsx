import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let obj = {
    name: "Drashti",
    surname: "Savaj"
  }

  let arr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-md mb-4'>Tailwind test</h1>
      <Card name="Drashti" myobj={obj} newArr={arr}  btnText="Click me"/>
      <Card name="Vadodara" btnText="Visit me"/>


    </>
  )
}

export default App
