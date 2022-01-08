import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../images/Jewelleryshow_Logo.png'
export default function Navbar() {

    const navData = [

        {
  path:"/",
  title:"Home",
  dropdown:false,
  chaildnav:[
  ]
  
        },
  
        {
          path:"/previous-show",
          title:"Previous show",
          dropdown:true,
          chaildnav:[
            {
              path:"/previousshow",
              title:"Home",
            }
            ]
          
          },
  
           {
           path:"/upcoming-show",
           title:"Upcoming show",
           dropdown:true,
           chaildnav:[
           {
            path:"/upcomingshow",
            title:"upcomingpage",
            chaildnav:[
            {
             path:"/",
             title:"upcomingpage",
             }
             ]
             }
             ]
             },
             {
             path:"/gallery",
             title:"Gallery",
             dropdown:false,
             chaildnav:[ ]
                  
             }, 
             {
              path:"/contact",
              title:"Register",
              dropdown:false,
              chaildnav:[]
                          
              },
      ]
  


    return (
        <nav className='p-2  flex items-center bg-[rgba(0,0,0,0.1)] justify-around absolute top-0 w-full left-0 z-20'>

<Link href='/'>
<Image src={logo} width={80} height={60}/>
</Link>
            <ul className='flex justify-center items-center gap-x-5'>

{
    navData.map((item, i)=>{

        return <li  key={i}>
            <Link href={item.path} >
            <h1 className='text-xl text-white'>{item.title}</h1>
           
        </Link>
 </li>
    })
}
     </ul>       
        </nav>
    )
}
