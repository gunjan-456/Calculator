// import React from 'react'

// const Calculator = () => {
//   return (
//     <div className="bg-blue-200  flex justify-center items-center w-screen h-screen">
//       <div className="main w-65 h-auto bg-gray-200 rounded-2xl border-2">
//         <div className="screen p-2">

//           <input type="text" className="tex-black w-full rounded-lg outline-none text-right" placeholder='0' />

//         </div>

//         <div className="keyboard">
//           <div className="m-2 flex justify-between">
//             <input type="button" value="C" className="bg-white text-black flex justify-center items-center outline-none w-12 h-12 rounded-4xl" />
//             <input type="button" value="**" className="bg-white text-black flex justify-center items-center outline-none w-12 h-12 rounded-4xl" />
//             <input type="button" value="%" className="bg-white text-black flex justify-center items-center outline-none w-12 h-12 rounded-4xl" />
//             <input type="button" value="/" className="bg-yellow-400 text-black flex justify-center items-center outline-none w-12 h-12 rounded-4xl" />


//           </div>



//           <div className="m-2 flex justify-between">
//             <input type="button" value="7" className="bg-white text-black flex justify-center items-center outline-none w-12 h-12 rounded-4xl" />
//             <input type="button" value="8" className="bg-white text-black flex justify-center items-center outline-none w-12 h-12 rounded-4xl" />
//             <input type="button" value="9" className="bg-white text-black flex justify-center items-center outline-none w-12 h-12 rounded-4xl" />
//             <input type="button" value="*" className="bg-yellow-400 text-black flex justify-center items-center outline-none w-12 h-12 rounded-4xl" />


//           </div>








//           <div className="m-2 flex justify-between">
//             <input type="button" value="4" className="bg-white text-black flex justify-center items-center outline-none w-12 h-12 rounded-4xl" />
//             <input type="button" value="5" className="bg-white text-black flex justify-center items-center outline-none w-12 h-12 rounded-4xl" />
//             <input type="button" value="6" className="bg-white text-black flex justify-center items-center outline-none w-12 h-12 rounded-4xl" />
//             <input type="button" value="-" className="bg-yellow-400 text-black flex justify-center items-center outline-none w-12 h-12 rounded-4xl" />


//           </div>






//           <div className="m-2 flex justify-between">
//             <input type="button" value="1" className="bg-white text-black flex justify-center items-center outline-none w-12 h-12 rounded-4xl" />
//             <input type="button" value="2" className="bg-white text-black flex justify-center items-center outline-none w-12 h-12 rounded-4xl" />
//             <input type="button" value="3" className="bg-white text-black flex justify-center items-center outline-none w-12 h-12 rounded-4xl" />
//             <input type="button" value="+" className="bg-yellow-400 text-black flex justify-center items-center outline-none w-12 h-12 rounded-4xl" />


//           </div>






//           <div className="m-2 flex justify-between">
//             <input type="button" value="0" className="bg-white text-black flex justify-center items-center outline-none w-24 h-12 rounded-4xl" />
//             <input type="button" value="." className="bg-white text-black flex justify-center items-center outline-none w-12 h-12 rounded-4xl" />
//             <input type="button" value="=" className="bg-yellow-400 text-black flex justify-center items-center outline-none w-12 h-12 rounded-4xl" />


//           </div>









//         </div>

//       </div>
      
//     </div>
//   )
// }

// export default Calculator
















import React from 'react'
import { useState } from 'react'

const Calculator = () => {

  const[exp, setExp] = useState("")


  const expClickHandler = (e) => {
    setExp(exp + e.target.innerText)

  }



  const clearClickHandler = () => {
    setExp("")
  }



  const equalClickHandler = () => {
    try {
      const res = eval(exp)
      setExp(res)
    } catch { 
      setExp("Invalid Input")
    }

  // const res = eval(exp)
  // setExp(res)



}
  return (
    <div className='flex h-[100vh] items-center bg-black'>
        <div className='border h-fit w-[30vw] mx-auto flex flex-col items-center '>

            <input disabled value={exp} type="text" className='w-[80%] mb-5 h-16 text-right px-4 text-6xl text-white' placeholder='0' />

            <div className='grid grid-cols-4 w-[80%] mx-auto gap-2'>
                <button onClick={clearClickHandler} className='text-2xl bg-gray-300 h-16 w-16 rounded-full'>C</button>
                <button onClick={expClickHandler}className='text-2xl bg-gray-300 h-16 w-16 rounded-full'>**</button>
                <button onClick={expClickHandler} className='text-2xl bg-gray-300 h-16 w-16 rounded-full'>%</button>
                <button onClick={expClickHandler} className='text-2xl bg-yellow-500 text-white border-none border h-16 w-16 rounded-full'>/</button>

                <button onClick={expClickHandler} className='text-2xl bg-gray-400 text-white h-16 w-16 rounded-full'>7</button>
                <button onClick={expClickHandler} className='text-2xl bg-gray-400 text-white h-16 w-16 rounded-full'>8</button>
                <button onClick={expClickHandler} className='text-2xl bg-gray-400 text-white h-16 w-16 rounded-full'>9</button>
                <button onClick={expClickHandler} className='text-2xl bg-yellow-500 text-white border-none border h-16 w-16 rounded-full'>*</button>

                <button onClick={expClickHandler} className='text-2xl bg-gray-400 text-white h-16 w-16 rounded-full'>4</button>
                <button onClick={expClickHandler} className='text-2xl bg-gray-400 text-white h-16 w-16 rounded-full'>5</button>
                <button onClick={expClickHandler} className='text-2xl bg-gray-400 text-white h-16 w-16 rounded-full'>6</button>
                <button onClick={expClickHandler} className='text-2xl bg-yellow-500 text-white border-none border h-16 w-16 rounded-full'>-</button>

                <button onClick={expClickHandler} className='text-2xl bg-gray-400 text-white h-16 w-16 rounded-full'>1</button>
                <button onClick={expClickHandler} className='text-2xl bg-gray-400 text-white h-16 w-16 rounded-full'>2</button>
                <button onClick={expClickHandler} className='text-2xl bg-gray-400 text-white h-16 w-16 rounded-full'>3</button>
                <button onClick={expClickHandler} className='text-2xl bg-yellow-500 text-white border-none border h-16 w-16 rounded-full'>+</button>

                <button onClick={expClickHandler} className='text-2xl bg-gray-400 col-span-2 text-white text-left px-6 h-16 rounded-full'>0</button>
                <button onClick={expClickHandler} className='text-2xl bg-gray-400 text-white h-16 w-16 rounded-full'>.</button>
                <button onClick={equalClickHandler} className='text-2xl bg-yellow-500 text-white border-none border h-16 w-16 rounded-full'>=</button>
            </div>
        </div>
    </div>
  )
}

export default Calculator

      
