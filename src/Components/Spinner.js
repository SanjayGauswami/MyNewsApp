import React, { Component } from 'react'
import Loading from './Loading.gif'

const Spinner = () => {
 
    return (
      <div className='text-center'>
        <img style={{width:"50px",height:"50px"}} src={Loading} alt='Loading'/>
      </div>
    )
  }


export default Spinner
