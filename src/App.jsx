import { useState ,useEffect, useRef} from 'react';
import './App.css'

import Navbar from './Components/Navbar';


function App() {
  const ref = useRef()
  const passwordRef= useRef()
  const [form, setform] = useState({web: "" , user: "" , password: ""})
  const [passwordarray, setpasswordarray] = useState([])


  useEffect(() => {
  let passwords= localStorage.getItem("passwords")
  if (passwords){
  setpasswordarray(passwordarray = JSON.parse(passwords))
  }  
}, [])



const handleChange=(e) => {
   setform({...form,[e.target.name]: e.target.value}) }
  
const changePic =() => { 
  passwordRef.current.type = "text"
  if (ref.current.src==="visibility.png") {
    ref.current.src = "non_visibility.png"
    passwordRef.current.type = "password"
}
else {
    passwordRef.current.type = "text"
    ref.current.src = "visibility.png"
}
 }  

const savePassword = () => {

setpasswordarray([...passwordarray , form])
localStorage.setItem("passwords" , JSON.stringify([...passwordarray]))
console.log(passwordarray)
 } 
  
const copypassword= () => { 
  
}
  
  
   return (
      <div>
    <Navbar/>
    <div>
      <div className='grid place-items-center my-3 '>
    <input onChange={handleChange} value={form.web} type="text"  name="web" id="" placeholder='  web url' className='rounded-xl w-1/2 my-1 h-7 ' />
    <div className=' flex gap-2 my-2 w-1/2'>
    <input onChange={handleChange} value={form.user} type="text"  name="user" id="" placeholder='  username' className='rounded-xl  my-1 w-full h-7' />
    <div className='relative'>
    <input onChange={handleChange} ref={passwordRef} value={form.password} type="password" name="password" id="" placeholder='  password' className='rounded-xl  my-1 bg-red-800 ' />
    
    <span className='absolute right-1 top-1'>
    <img src='visibility.png' ref = {ref} onClick={changePic} width='26' ></img>
    </span>
    </div>
    </div>
<button className='bg-emerald-500 text-white rounded-lg font-semibold align-item p-0.5' onClick={savePassword} >SUMBIT</button>
    </div>
</div>

<div className='passwords'>
<h2 className='text-lg text-white my-3 mx-2'>YOUR PASSWORDS</h2>
{passwordarray.length===0 && <div>NO passwords to show</div>}
{passwordarray.length!=0 && 

<table className="table-auto w-full">
  <thead className='bg-orange-500 '>
    <tr className='text-lg'>
      
      <th>Website</th>
      <th>User</th>
      <th>Password</th>
      
    </tr>
  </thead>
  <tbody className='bg-amber-400 text-lg' >
    {passwordarray.map((item,index)=>{
    return <tr key={index}>
    
    
      <td className='text-center w-32 '>{item.web}
     
      </td>
    
      <td className='text-center w-32'>{item.user}</td>
      <td className='text-center w-32 relative'>{item.password}
         <img src="https://cdn-icons-png.flaticon.com/512/54/54702.png" width='30' className='absolute top-0 left-44' onClick={copypassword(item.password)}></img></td>
    </tr>
})}
     </tbody>
</table>
}

</div>




</div>
   )
}

export default App
