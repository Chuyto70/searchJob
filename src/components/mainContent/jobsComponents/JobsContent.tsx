import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Jobs } from '../../../interfaces/interfaces'
import { onSetActiveJob } from '../../../store/slice/jobsSlice'
type Props = {
  value:Jobs
}

const JobsContent = ({value}:Props) => {
  const dispatch = useDispatch()
  const today:number = new Date().getTime();
  const trasnformDateDay = new Date(value.date).getDay();
  const trasnformDateMonth = new Date(value.date).getMonth();
  const trasnformDateYear = new Date(value.date).getFullYear();
  const dateWork:number = new Date(`${trasnformDateMonth + 1}-${trasnformDateDay +1}-${trasnformDateYear}`).getTime()
  const secondsAgo = (today - dateWork) / 1000
  const daysAgo = Math.floor(secondsAgo / 86400) 
  const navigate = useNavigate()
  const handleNavigate = (e:React.SyntheticEvent, ) => {
    dispatch(onSetActiveJob(value))
    navigate('/workinfo')
  }
  return (
    <CardContainer onClick={handleNavigate}>
       <div className='cardContent'>
        <div className='leftContent'>
        <img src={value.logo} alt="Employer" />
        <div >
          <div className='cardData'>
            <p>{value.name}</p>
            <h4>{value.title}</h4>
            <p>{value.fulltime !=="false" ? 'Full Time' : 'Half Time'}</p>
          </div>
        </div>

        </div>
       
      </div>

      <div className='locationContainer'>
        <div className='locationItem'>
           <small className='material-icons md-18 md-dark md-inactive material-symbols-outlined'>Public</small><small>{value.country}</small>
        </div>

        <div className="locationItem">
          <small className='material-icons md-18 md-dark md-inactive material-symbols-outlined'>Schedule</small><small>{daysAgo} days ago</small>
          
        </div>
       
      </div>
    </CardContainer>
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
  .leftContent{
    display:flex;
    color:#334680;

    img{
      width:90px;
      height:90px;
      margin-right:16px;
      object-fit:content;
    }

    .cardData{
      height:90%;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      p{
        font-size:12px;
        font-weight:700;
      }

      h4{
        font-weight:400;
      }
      p:last-child{
        width:80px;
        height:26px;
        padding:4px 8px;
        border: 1px solid #334680;
        align-self:center;
        border-radius:4px;
        align-self:baseline;
        cursor:pointer;
    }

    }
    
    

    
  }
  .locationContainer{
    height:100%;
    font-size:12px;
    color:#B9BDCF;
    display:flex;
    align-items:flex-end;
    gap:18px;


    .locationItem{
      display:flex;
      align-items:center;
      gap:6px;
    }
    
    }
`

export default JobsContent
