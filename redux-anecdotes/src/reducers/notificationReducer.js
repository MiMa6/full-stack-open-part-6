import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
    delNotifiction(state, action) {
      return action.payload
    },
  }
})

export const {setNotification, delNotifiction} = notificationSlice.actions
export default notificationSlice.reducer