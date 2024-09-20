import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

function DropDown(props) {
    const dropdownRef = useRef()
    const handleCLick=(event) => {
        if(dropdownRef && dropdownRef.current.contains(event.target)){
            props.onClose && props.onClose()
    }
    }

    useEffect(() => {
        document.addEventListener('click',handleCLick)
        return () => {
            document.removeEventListener('click',handleCLick)
        }
    }, [])
  return (
    <div
     className='drop_down'
     ref={dropdownRef}
     style={{
        position:'absolute',
         top:"100%",
          right:0
          }}>

        {props.children}

    </div>
  )
}

export default DropDown