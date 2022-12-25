
import styled from 'styled-components';

import './App.css';
import { NavBar } from './components/NavBar';
import { MainPage } from './pages/MainPage';
import { Routes, Route, Navigate } from "react-router-dom";
import { DetailPage } from './pages/DetailPage';
import { useSelector } from 'react-redux';
import { RootState } from './store/config';

function App() {
  const {activeJob} = useSelector((state:RootState) =>state.jobs)
  return (
    <Div className="App">

      
      <NavBar/>
      <Routes>
        <Route path='/' element={ <MainPage/>} />
        {
          activeJob.author.length > 1
            ?<Route path='/workinfo' element={ <DetailPage/>} />
            :<Route path='/*' element={ <Navigate to={'/'} />} />
        }
        <Route path='/*' element={<Navigate to={'/'}/> } />
      </Routes>
     
    </Div>
  );
}

const Div = styled.div`
  padding:32px 62px;

  @media (max-width: 675px) {
     padding:32px 8px;
  }
`
  



export default App;
