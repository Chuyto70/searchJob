import React, {useEffect} from 'react'
import styled from 'styled-components'

import JobsContent from './JobsContent';
import PaginationConponent from '../../PaginationConponent';
import useJobsSlice from '../../../utils/useJobsSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/config';
import { Jobs } from '../../../interfaces/interfaces';

import { LoadingComponents } from '../../LoadingComponents';

 
type Props = {
  value:Jobs[]
}

export const JobsComponet = ({value}:Props) => {
 

  const {getFirstData} = useJobsSlice()
  const { isLoading} = useSelector((state:RootState )=>state.jobs)
 
  
  
 

  useEffect(() => {
    getFirstData()
    
  }, []);
  return (

    <CardContainer>


      {

        isLoading 
          ?<LoadingComponents/>
          :value.map((element)=><JobsContent key={element.id} value={element}/>)
        
      }
      {
        isLoading
          ?<></>
          :<PaginationConponent/>
      }
     
    </CardContainer>
  )
}

const CardContainer = styled.div`
  display:flex;
  flex-direction:column;
  gap:24px;
`


