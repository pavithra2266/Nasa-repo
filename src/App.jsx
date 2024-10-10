import React, { useEffect, useState } from 'react'
import Main from './Components/Main'
import SideBar from './Components/SideBar'
import Footer from './Components/Footer'

export default function () {
  
  const [sideBar,setSideBar]=useState(false)
  
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const handleSideBar=(()=>{
    setSideBar(!sideBar)
  })
  
  useEffect(() => {
    async function fetchData() {
      const NASA_KEY = "U4MSMmegzYG0KXrjZDHslqPndHEeuhRm8naNzrdZ"
      const url=' https://api.nasa.gov/planetary/apod' +`?api_key=${NASA_KEY}`
    

  try {
    const res=await fetch(url);
    const apiData=await res.json();
    console.log('DATA\n',apiData)
    setData(apiData)
  } catch (error) {
    console.log(error.message)
  }
}
fetchData()
  }, [])
  

  
  return (
    <div className='main'>
     { data ?(<Main data={data}/>):
   
     <div className='loader'>
      <i class="fa-solid fa-spinner"></i>
     </div>
     } 
      {sideBar && (<SideBar sideBar={sideBar}  handleSideBar={handleSideBar} data={data}/>)}
   
      <Footer  handleSideBar={handleSideBar} data={data}/>
    </div>
   
  )
}
