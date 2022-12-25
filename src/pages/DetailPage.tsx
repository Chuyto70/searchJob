import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { RootState } from '../store/config'

export const DetailPage = () => {
  const navigate = useNavigate()
  const {activeJob} = useSelector((state:RootState)=>state.jobs)
  const today = new Date().getTime();
  const trasnformDateDay = new Date(activeJob.date).getDay();
  const trasnformDateMonth = new Date(activeJob.date).getMonth();
  const trasnformDateYear = new Date(activeJob.date).getFullYear();
 
  const dateWork = new Date(`${trasnformDateMonth +1 }-${trasnformDateDay +1 }-${trasnformDateYear}`).getTime()
  const secondsAgo = (today - dateWork) / 1000
  const daysAgo = Math.floor(secondsAgo / 86400) 
  const handleNavigateBack = () =>{
    navigate(-1)
  }
 window.scroll(0, 0)
  return (
    <Container>
      <div className='side_left'>
        <div className='linkBack'> 
          <span onClick={handleNavigateBack} className='material-icons md-18 md-dark material-symbols-outlined'>keyboard_backspace</span>
          <span onClick={handleNavigateBack}>Back to search</span>

        </div>

        <h4>how to apply</h4>
        <p>
          Please email a copy of your resume and online portfolio to <a href={`mailto:${activeJob.author}`}>{activeJob.author}</a>
        </p>
      </div>
      <div className='side_right'>
        <div className='title_container'>
          <h1>{activeJob.title}</h1>
          <span>{activeJob.fulltime ? 'Full time' : 'Half time'}</span>
        </div>
         <div className="locationItem">
          <small className='material-icons md-18 md-dark md-inactive material-symbols-outlined'>Schedule</small><small>{daysAgo} days ago</small>
        </div>

        <div className='author_profile'>
          <img src={activeJob.logo} alt={activeJob.logo} />
          <div className='author_profile__name'>
            <h3>{activeJob.name}</h3>
            <div className='locationItem'>
           <small className='material-icons md-18 md-dark md-inactive material-symbols-outlined'>Public</small><small>{activeJob.country}</small>
        </div>
          </div>
        </div>

        <p>{activeJob.content}</p>
      </div>
    </Container>
  )
}

const Container = styled.div`
  width:100%;
  height:100%;
  display:grid;
  grid-template-columns:3fr 7fr;
  gap:48px;
  h1{
    font-weight:700;
  }
  .side_left{
    .linkBack{
       display:flex;
       align-items:center;
       gap:18px;
       margin-bottom:36px;
       span {
         color:#1E86FF;
         cursor:pointer;
       }
     }
  }
  h4{
    text-transform:uppercase;
    font-weight:700;
    color:#B9BDCF;
    margin-bottom:16px;
  }
  p{
    color:#334680;
  }
  p a{
    color:#1E86FF;
    text-decoration:none;
  }

  .side_right{
    display:flex;
    flex-direction:column;
    gap:28px;
    color:#334680;

    .title_container{
      display:flex;
      align-items:center;
      gap:18px;
      span{
        font-size:12px;
        padding:4px 8px;
        border: 1px solid #334680;
      
        border-radius:4px;
       
      }
    }
    .locationItem{
      font-size:14px;
      color:#B9BDCF;
      display:flex;
      align-items:center;
      gap:6px;
      
    }
    .author_profile{
      display:flex;
      gap:12px;
      img{
        width:64px;
        height:64px;
        border-radius:4px;
        object-fit:cover;
      }
      .author_profile__name{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
      }
    }
    p{
      font-weight:300;
    }
  }

   @media (max-width:847px) {
        grid-template-columns: 1fr; 
        .title_container{
        display:flex;
        flex-direction:column;
        span{
         align-self:baseline;
       
      }
        }
    }

`

