import axios from 'axios'
import { useDispatch} from 'react-redux'
import { onLoadingData, onSetListOfJobs } from '../store/slice/jobsSlice'

const useJobsSlice = () => {
  
  const dispatch = useDispatch()

  const getFirstData = async () =>{
    dispatch(onLoadingData())
    const {data} = await axios.get('https://apis.camillerakoto.fr/fakejobs/jobs')

    dispatch(onSetListOfJobs(data))
   

  }
  return {
    

    getFirstData
  }
}

export default useJobsSlice

   
