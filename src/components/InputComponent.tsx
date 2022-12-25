import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { onSetByInput, onSetByTopInput } from '../store/slice/jobsSlice'
import './basic.css'
interface InputInterface{
    icon:string
    iconStyle:string
    placeHolderText :string
   

}


 

export const InputComponent = (props:InputInterface) => {
  const dispatch = useDispatch()

   const handleEventInput = (e:React.SyntheticEvent) =>{
       e.preventDefault()
       const target = e.target as HTMLInputElement
       if(props.placeHolderText.includes('City')){
        dispatch(onSetByInput(target.value))
      }else{
        
        dispatch(onSetByTopInput(target.value))
       }
       
    }
  return (
    <>
     
        <span  
        className={props.iconStyle}>{props.icon}</span>
        <input
        onChange={handleEventInput}
        type="text" placeholder={props.placeHolderText} />
     
      
    </>
  )
}





