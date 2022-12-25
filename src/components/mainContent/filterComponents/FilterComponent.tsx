import React, {useState} from 'react'
import { useDispatch} from 'react-redux'
import styled from 'styled-components'
import { onSetFullTime, onSetRadioButton} from '../../../store/slice/jobsSlice'
import { InputComponent } from '../../InputComponent'

const FilterComponent = () => {
  const dispatch = useDispatch()
  const [city, setCity] = useState('')
  const [state,setState] = useState({
    fulltime:false,
    inputLocationValue :''
  })
  const handleEventInputCheck = (e:React.SyntheticEvent) =>{

    const target = e.target as HTMLInputElement
    
    setState({
      ...state,
      [target.name]:target.checked
    })
    dispatch(onSetFullTime(target.checked))
    
  }

const handleRadioEvenet = (e:React.SyntheticEvent) =>{
  const target = e.target as HTMLInputElement
  setCity(target.name)
  
  dispatch(onSetRadioButton(target.name))
  

}
  return (
    <Container>
      <form >
        <Flex>
           <input 
           onChange={handleEventInputCheck} 
           type="checkbox" 
           name="fulltime" />
            <span>Full time</span>
        </Flex>
     
      <p>LOCATION</p>
      <ContainerInput>
        <InputComponent
            icon='Public' 
            iconStyle='material-icons md-dark md-inactive material-symbols-outlined'
            placeHolderText='City, state, zip code or country'
            />   
      </ContainerInput>
    
      
      <Div>
        
          <div className='radiosContainer'> 
             <input 
             onChange={handleRadioEvenet} 
             type="radio" name="london" 
             checked={city === "london" ? true : false} />
             <label htmlFor="london">London</label>
          </div>
       
        <div className='radiosContainer'> 
            <input
            onChange={handleRadioEvenet} 
            checked={city === "amsterdam" ? true : false} 
            type="radio" 
            name="amsterdam" />
            <label htmlFor="amsterdam">Amsterdam</label>
          </div>
         <div className='radiosContainer'> 
            <input
            onChange={handleRadioEvenet} 
            checked={city === "new york" ? true : false} 
            type="radio" 
            name="new york" />
            <label htmlFor="new york">New York</label>
          </div>
         <div className='radiosContainer'> 

            <input
            onChange={handleRadioEvenet} 
            checked={city === "berlin" ? true : false} 
            type="radio" 
            name="berlin"/>
            <label htmlFor="berlin">Berlin</label>
          </div>
       
      </Div>
      

      </form>
    </Container>
  )
}


const Container = styled.div`
    color:#334680;
    font-weight:500;

    p{
      font-size:14px;
      font-weight:700;
      color:#B9BDCF;
    }
`


const Div = styled.div`
      display:flex;
      flex-direction:column;
      gap:16px;

      .radiosContainer{
        display:flex;
        gap:10px;
        
        input[type="radio"]{
          cursor:pointer;
        }
      }
`

const ContainerInput = styled.div`
  background-color:#ffffffff;
  display:flex;
  padding:17px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius:4px;
  margin:14px 0;
  span{
    padding-right:16px;
  }
  input{
    width:100%;
    border:none;
    outline:none;
    
  }
  input::placeholder  {
        color:#B9BDCF;
      }

`

const Flex = styled.div`
  display:flex;
  margin-bottom:28px;
  span{
    font-size:14px;
  }
   input[type="checkbox"]{
      width:18px;
      height: 18px;
      border: 1px solid #B9BDCF;
      margin-right:12px;
      opacity:0.5;
      cursor:pointer;
   }
`


export default FilterComponent
