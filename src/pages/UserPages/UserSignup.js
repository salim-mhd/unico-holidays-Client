// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import Logo from "../../Assets/Logo.png"
// import axios from '../../Axios/Axios'
// import WarningAmberIcon from '@mui/icons-material/WarningAmber';


// function UserSignup() {
//   const navigate = useNavigate()
//   const [name, setName]=useState('');
//   const [email, setEmail]=useState('');
//   const [phone, setPhone]=useState('');
//   const [password, setPassword]=useState('');
//   const [formErrors,setFormErrors]=useState({});
//   const [isSubmit,setIsSubmit]= useState(false);
//   const [serverError,setServerError] = useState('')
//   const errors = {};

//   const validate=(name,email,phone,password)=>{
//     const regexname = /^[A-Za-z][A-Za-z0-9_ ]{4,14}$/i; 
//       const regexMail=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//       if(!name){
//         errors.name= 'name is required';
//         }else if(!regexname.test(name)){
//           errors.name="name is not valid"
//       }
//       if(!email){
//         errors.email="email is required"
  
//       }else if(!regexMail.test(email)){
//         errors.email="Not a valid email format"
//       }
//       if(!phone){
//         errors.phone="phone number is required"
//       }else if(phone.length!==10){
//         errors.phone="Phone number must be 10 digit"
//       }
//       if(!password){
//         errors.password="password is required"
//       }else if(password.length<4){
//         errors.password="Password must be more than 4 characters"
//       }else if(password.length>10){
//         errors.password="Password should not exceed 10 characters"
//       }
//       return errors
//     }

//     const handleSubmit=(e)=>{
//       e.preventDefault()
//       console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',email,password,phone,name);
//       setFormErrors(validate(name,email,phone,password));
//       setIsSubmit(true);
//     }

//   const handleChange=(e)=>{
//     setIsSubmit(false);
//     console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii',email,password,phone,name);
//     setFormErrors(validate(name,email,phone,password));
//   }

//   useEffect(()=>{
//     console.log(formErrors,'useEffect');
//     if(Object.keys(formErrors).length===0 && isSubmit){
//   console.log('iffffffffffffffffff');
//   const signupData ={name,phone,email,password}
//   axios.post("signup",signupData).then((respons)=>{
// console.log(respons,'hiiiiiiiiiiiiiiiiiiiiiii');
// if(respons.data.error){
//   let resError = respons.data.error 
//   setServerError(resError)
// }else{
//   setServerError('')
//   navigate('/login')
// }
//   })
  
//     }
//   },[formErrors]);

//   return (
//     <div>

// <header class="text-white container bg-green-800 relative mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center">
//         <a href="/" class="flex items-center whitespace-nowrap text-2xl font-black">
//           <span class="mr-2 w-8">
//             <img src={Logo} alt="" />
//           </span>
//         </a>
//         <input type="checkbox" class="peer hidden" id="navbar-open" />
//         <label class="absolute top-5 right-5 cursor-pointer lg:hidden" for="navbar-open">
//           <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
//           </svg>
//         </label>
//         <nav aria-label="Header Navigation" class="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
//           <ul class="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
//             <li class="lg:mr-12"><a class="rounded text-white transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#">Components</a></li>
//             <li class="lg:mr-12"><a class="rounded text-white transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#">Pricing</a></li>
//             <li class="lg:mr-12"><a class="rounded text-white transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#">Contact</a></li>
//             <li class="lg:mr-12"><a class="rounded text-white transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#">FAQ</a></li>
//           </ul>
//         </nav>
//       </header>

//         <div class="mt-10">

// <div class="flex w-96 flex-col space-y-5 rounded-lg border py-10 px-5 shadow-xl mx-auto">
//   <div class="mx-auto mb-2 space-y-3">
//     <h1 class=" text-3xl font-bold text-blue-900">Welcome</h1>
//     <p class="text-gray-500">Create your Account</p>
//   </div>
//   { serverError ? <div className='text-white rounded-md bg-amber-600'><div className='text-end pr-4'><span onClick={(e)=>{setServerError('')}}  className='pl-44 text-lg cursor-pointer'>x</span></div><div className='pl-4 pb-5'><WarningAmberIcon/> {serverError}</div> </div> : <></> }
//   <div>
//     <div class="relative mt-2 w-full">
//       <input onChange={(e)=>setName(e.target.value)} onKeyUp={(e)=>{handleChange(e)}} value={name} type="text" id="name" name='name' class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
//       <label for="name" class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your FullName </label>
//     </div>
//     {formErrors.name ? <div className='text-red-700 text-center'><WarningAmberIcon/> {formErrors.name}</div> : <></>}
//   </div>
  
//   <div>
//     <div class="relative mt-2 w-full">
//       <input onChange={(e)=>setPhone(e.target.value)} onKeyUp={(e)=>{handleChange(e)}} value={phone} type="number" id="number" name='phone' class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
//       <label for="number" class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Number </label>
//     </div>
//     {formErrors.phone ? <div className='text-red-700 text-center'><WarningAmberIcon/> {formErrors.phone}</div> : <></>}
//   </div>

//   <div>
//     <div class="relative mt-2 w-full">
//       <input onChange={(e)=>setEmail(e.target.value)} onKeyUp={(e)=>{handleChange(e)}} value={email} type="email" id="email" name='email' class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
//       <label for="email" class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Email </label>
//     </div>
//     {formErrors.email ? <div className='text-red-700 text-center'><WarningAmberIcon/> {formErrors.email}</div> : <></>}
//   </div>

//   <div>
//     <div class="relative mt-2 w-full">
//       <input onChange={(e)=>setPassword(e.target.value)} onKeyUp={(e)=>{handleChange(e)}} value={password} type="text" id="password" name='password' class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
//       <label for="password" class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"> Enter Your Password</label>
//     </div>
//     {formErrors.password ? <div className='text-red-700 text-center'><WarningAmberIcon/> {formErrors.password}</div> : <></>}
//   </div>

//   <button onClick={handleSubmit} class="rounded-lg bg-blue-900 py-3 font-bold text-white">Create</button>
//   <div>You Have an account ? <a onClick={(e)=>{navigate("/login")}} className='text-red-700 cursor-pointer hover:text-blue-700'> Login</a></div>
// </div>
// </div>
// </div>
//   )
// }

// export default UserSignup