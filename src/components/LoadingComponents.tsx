import React from 'react'
import styled from 'styled-components'

export  function LoadingComponents() {
const arrMap = [1,2,3,4,5]
  return (
    <>
    {
        arrMap.map(arr=>{
            return <CardContainer key={arr}>
       <div className='cardContent'>
        <div className='leftContent'>
        <div className='image'></div>
        <div >
          <div className='cardData'>
            <p></p>
            <h4></h4>
            <p></p>
          </div>
        </div>

        </div>
       
      </div>

      <div className='locationContainer'>
        <div className='locationItem'>
           <small className='material-icons md-18 md-dark md-inactive material-symbols-outlined'>Public</small><small></small>
        </div>

        <div className="locationItem">
          <small className='material-icons md-18 md-dark md-inactive material-symbols-outlined'>Schedule</small><small></small>
        </div>
       
      </div>
    </CardContainer>
        })
    }
    
    </>
  )
}

const CardContainer = styled.div`
  width:100%;
  height:114px;
  display:flex;
  justify-content:space-between;
  background-color:#FFFFFF;
  border-radius:4px;
  padding:12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  cursor:pointer;
  @keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}
  .leftContent{
    display:flex;
    color:#334680;

    .image{
      width:90px;
      height:90px;
      background-color:#f6f7fb;
      border-radius:4px;
      margin-right:16px;
      object-fit:content;
      animation: skeleton-loading 0.5s linear infinite alternate;
    }

    .cardData{
     
      height:90%;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      p{
        width:100%;
        background-color:#f6f7fb;
        border-radius:4px;
        animation: skeleton-loading 0.5s linear infinite alternate;
        font-size:12px;
        font-weight:700;
      }

      h4{
        width:160px;
        height:50px;
        font-weight:400;
        background-color:#f6f7fb;
         border-radius:4px;
        animation: skeleton-loading 0.5s linear infinite alternate;
      }
      p:last-child{
        width:80px;
        height:26px;
        padding:4px 8px;
        background-color:#f6f7fb;
         border-radius:4px;
        animation: skeleton-loading 0.5s linear infinite alternate;
        align-self:center;
        border-radius:4px;
        align-self:baseline;
        cursor:pointer;
    }

    }
  }
  .locationContainer{
    height:100%;
    width:240px;
    font-size:12px;
    color:#B9BDCF;
    display:flex;
    align-items:flex-end;
    gap:18px;
    .locationItem{
      width:100%;
      display:flex;
      align-items:center;
      gap:6px;
      background-color:#f6f7fb;
       border-radius:4px;
      animation: skeleton-loading 0.5s linear infinite alternate;
    }
    
    }
`

