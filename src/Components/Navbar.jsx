import React from 'react'


const Navbar = () => {
  return (
    <div>
    <ul className='flex justify-between h-10 px-40 bg-orange-500 '>
        <li className=' text-white my-2 font-semibold '>PASSWORD MANAGER</li>
        <li>
           <a href="https://github.com/" target='_blank'>
           
            <div className=' rounded-xl px-1 text-white my-2 text-lg hover:text-sky-400 cursor-pointer font-semibold'>Github

            </div>
            </a>
            </li>
           
    </ul>
    </div>
   

  )
}

export default Navbar