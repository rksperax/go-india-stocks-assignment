import { createSlice } from '@reduxjs/toolkit'

const initialState =  true

export const slideSlice = createSlice({
  name: 'sidebarReducer',
  initialState,
  reducers: {
    changeState: (state) => {
      return !state
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { changeState} = slideSlice.actions

export default slideSlice.reducer