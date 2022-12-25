import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { RootState } from '../../store/config';
import FilterComponent from './filterComponents/FilterComponent'
import {JobsComponet} from './jobsComponents/JobsComponet'


export const MainContent = () => {

  
  const { activePage} = useSelector((state:RootState )=>state.jobs)

  return (
    <Container>
        <FilterComponent/>
        <JobsComponet value={activePage} />
    </Container>
  )
}

const Container = styled.div`
    display:grid;
    grid-template-columns: 2fr 4fr; 
    gap:28px;

    @media (max-width:675px) {
        grid-template-columns: 1fr; 
    }
`


