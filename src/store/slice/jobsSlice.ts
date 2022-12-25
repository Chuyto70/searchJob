import { createSlice } from '@reduxjs/toolkit'
import { Jobs } from '../../interfaces/interfaces'

export interface CounterState {
  isLoading: boolean
  activeJob:Jobs
  listOfJobs:Array<Jobs>
  pages:Array<number>
  activePage:Array<Jobs>
  page:number,
  listOfJobsFiltered:Array<Jobs>
}

const initialState: CounterState = {
  isLoading: true,
  activeJob:{
        id:"",
        name:"",
        author:"",
        date:"",
        salary:"",
        fulltime:"",
        city:"",
        zipcode:"",
        country:"",
        title:"",
        content:"",
        logo:""
  },
  listOfJobs:[],
  pages:[1],
  page:1,
  activePage:[],
  listOfJobsFiltered:[]
}

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    onLoadingData: (state) => {
     
      state.isLoading =  true   
    },
    onSetListOfJobs :(state, {payload}) => {
        state.isLoading = false
        state.listOfJobs = payload
        state.listOfJobsFiltered = payload
        state.activePage = state.listOfJobs.slice((state.page * 5) - 5, (state.page ) * 5)
    },
    onSetActiveJob : (state, {payload}) => {
        state.isLoading = false
        state.activeJob = payload
    },
    onSetPages: (state, {payload}) =>{
      if(state.pages.indexOf(payload) === -1){
        state.pages.push(payload)
      }

    },
    onNextPage:(state)=>{ 
      state.isLoading =  false   
      state.page +=1
      state.activePage = state.listOfJobsFiltered.slice((state.page * 5) - 5, (state.page ) * 5)

    },
    onPreviusPage:(state)=>{
      state.isLoading =  false   
      state.page -=1
      state.activePage = state.listOfJobsFiltered.slice((state.page * 5) - 5, (state.page ) * 5)
    },
    onSetFullTime:(state, {payload}) =>{
      state.pages = [1]
      state.page = 1
      state.listOfJobsFiltered =  state.listOfJobs.filter((jobs)=> jobs.fulltime === `${payload}` )
      state.activePage = state.listOfJobsFiltered.slice((state.page * 5) - 5, (state.page ) * 5)
    },
    onSetByInput:(state, {payload})=>{
       state.listOfJobsFiltered = state.listOfJobs.filter(jobs=>{
          return jobs.city.toLocaleLowerCase().includes(payload.toLocaleLowerCase()) || 
                 jobs.country.toLocaleLowerCase().includes(payload.toLocaleLowerCase()) ||
                 jobs.zipcode.includes(payload)
       })
       state.pages = [1]
       state.page = 1
       state.activePage = state.listOfJobsFiltered.slice((state.page * 5) - 5, (state.page ) * 5)
    },
    onSetByTopInput:(state, {payload}) =>{
        state.listOfJobsFiltered = state.listOfJobs.filter(jobs=>{
        return jobs.title.toLocaleLowerCase().includes(payload.toLocaleLowerCase()) || 
                 jobs.name.toLocaleLowerCase().includes(payload.toLocaleLowerCase()) ||
                 jobs.content.toLocaleLowerCase().includes(payload.toLocaleLowerCase())
       })
       state.pages = [1]
       state.page = 1
       state.activePage = state.listOfJobsFiltered.slice((state.page * 5) - 5, (state.page ) * 5)
    },
    onSetRadioButton: (state, {payload})=>{
      console.log(payload)
      state.listOfJobsFiltered = state.listOfJobs.filter(jobs=>{
        return jobs.city.toLocaleLowerCase() === payload.toLocaleLowerCase()
      })
      state.pages = [1]
      state.page = 1
      state.activePage = state.listOfJobsFiltered.slice((state.page * 5) - 5, (state.page ) * 5)
    },
    onSetDetailPage:(state, {payload}) =>{
      state.activeJob = payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { onPreviusPage,
  onNextPage,
  onLoadingData, 
  onSetListOfJobs, 
  onSetActiveJob,
  onSetPages,
  onSetByInput,
  onSetByTopInput,
  onSetRadioButton,
  onSetDetailPage,
  onSetFullTime} = jobsSlice.actions

