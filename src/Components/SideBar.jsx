import React from 'react'

export default function SideBar(props) {
    const {handleSideBar,data} = props
  return (
    <div>
        <div onClick={handleSideBar} className='sideBar' >
            <div className='sideBarOverlay'></div>
            <div className='sideBar-Content' >
                <h2>{data?.title}</h2>
                <div className='explanationContainer'>
                <p>description</p>
                <p>{data?.explanation}</p>
                </div>
                <button className='arrow-btn' onClick={handleSideBar}><i class="fa-solid fa-arrow-right-long"></i></button>
            </div>
          
            
        </div>
    </div>
  )
}
