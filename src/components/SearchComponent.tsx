import React from 'react'
import styled from 'styled-components'
import { InputComponent } from './InputComponent'

import './basic.css'


export const SearchComponent = () => {
    
  return (
   <>
   <Div >  
      <form action="">
        
            <InputComponent 
            icon='work' 
            iconStyle='material-icons md-dark md-inactive material-symbols-outlined' placeHolderText='Title, companies, expertise or benefits'/>
          <button>Search</button>
      </form>
     
   </Div>
    
   </>
  )
}

const Div = styled.div.attrs({className:'backgroundImage'})`
    width:100%;
    height:138px;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:42px;

    form{ 
      position:relative;
      display:flex;
      width:70%;
      padding:18px;
      background-color:#FFFFFF;
      border-radius:4px;
      
      input{
        width:50%;
        color:#334680;
        font-weight:300;
        border:none;
        outline:none;
        padding-left:8px;
      }
      input::placeholder  {
        color:#B9BDCF;
      }
      button{
        position:absolute;
        align-self:center;
        right:4px;
        padding:14px 42px;
        background-color:#1E86FF;
        border:none;
        border-radius:4px;
        color:#ffffff;
        font-size:16px;
        font-weight:500;
      }
      @media (max-width: 575px) {
        width:90%;
        font-size:12px;

        button{
        padding:14px 27px;
        background-color:#1E86FF;
        border:none;
        border-radius:4px;
        color:#ffffff;
        font-size:16px;
        font-weight:500;
        }
  }

    }

`

