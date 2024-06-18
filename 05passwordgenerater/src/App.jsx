import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  
  const [length, setlength] = useState(8);
  const [numbersAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password,setPassword] = useState();

  const passwrodRef = useRef(null)


  const passwordGenerater = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"    // password ma possible je aave te

    if(numbersAllowed) {
      str = str + "0123456789"
    }

    if(charAllowed) {
      str = str + "!@#$%^&*-_+=[]{}~`"
    }

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)



  }, [length, numbersAllowed, charAllowed, setPassword])


    const copyPasswordToClipboard = useCallback(() => {
      passwrodRef.current?.select();
      passwrodRef.current?.setSelectionRange(0,5)
      window.navigator.clipboard.writeText(password)
    }, [password]) 

  useEffect(() => {
    passwordGenerater()
  } , [length, numbersAllowed, charAllowed, passwordGenerater])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generater</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly 
          ref={passwrodRef}/>

          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py0.5 shrink-0'>Copy</button>

        </div>


        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=> {setlength(e.target.value)}}/>
            <label >Length:{length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numbersAllowed}
            id="numberInput"
            className='cursor-pointer'
            onChange={(e)=> {setNumberAllowed((prev) => !(prev))}}/>   
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            className='cursor-pointer'
            onChange={(e)=> {setCharAllowed((prev) => !prev);}}/>   
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
