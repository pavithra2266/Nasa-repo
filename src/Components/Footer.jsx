import React from 'react'

export default function (props) {
    const {sideBar,handleSideBar,data} =props
  return (
    <footer>
      
        <div >
            <div className='footer-bg-gradient'></div>
        <h2>{data?.title}</h2>
        <h1>Picture from nasa</h1>
        </div>
        <button onClick={handleSideBar}>
        <i class="fa-solid fa-circle-info"></i>
        </button>
     
       
        
    </footer>
  )
}
