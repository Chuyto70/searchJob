import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootState , AppDispatch} from '../store/config'
import { onLoadingData, onNextPage, onPreviusPage, onSetPages } from '../store/slice/jobsSlice'

const PaginationConponent = () => {
  const {pages, listOfJobsFiltered, page} = useSelector((state:RootState)=>state.jobs)
  
  const dispatch = useDispatch<AppDispatch>()
  let paginationLength = Math.ceil((listOfJobsFiltered.length / 5)) 
  useEffect(() => {
    
    for(let i = 1; i<= paginationLength; i++){
           
            dispatch(onSetPages(i)) 
          }
         
      
  }, [listOfJobsFiltered]);
    
  
      const handleNextPage = () =>{
        
        if(page === pages.length){
          return alert('There is no more')
        }
        dispatch(onLoadingData())
        dispatch(onNextPage())  
        
      }
       const handlePreviusPage = () =>{
         if((page - 1) === 0){
          return alert('Where are you go?')
        }
        dispatch(onLoadingData())
        dispatch(onPreviusPage())  
      }
  return (
    <PaginationContainer>
      <div className='buttons_container'>
        <button onClick={()=>handlePreviusPage()}><small className='material-icons md-18 md-dark md-inactive material-symbols-outlined'>chevron_left</small></button>

        {
          pages.map(pag=><button key={pag} className={`${pag === page ? 'active' : ''}`}>{pag}</button>)
        }

        <button onClick={()=>handleNextPage()}><small className='material-icons md-18 md-dark md-inactive material-symbols-outlined'>chevron_right</small></button>
      </div>
    </PaginationContainer>
  )
}

const PaginationContainer = styled.div`
   align-self:end;
   
   .buttons_container{
       display:flex;
       gap:12px;
       font-size:12px;
        button{

            color:#B7BCCE;
            font-weight:300;
            display:flex;
            justify-content:center;
            align-items:center;
            padding:8px 11px;
            background-color:transparent;
            border: 1px solid #B7BCCE;
            border-radius:4px;
            cursor: pointer;

            &:hover{
                border: 1px solid #1E86FF;
                color:#1E86FF;
            }
        }

        .active{
            background-color:#1E86FF;
            color:white;
            &:hover{
              color:white;
            }
        }

        
       

   }
`

export default PaginationConponent
