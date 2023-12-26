import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setNotificationState(state, action) {
      return action.payload
    },
    delNotifictionState(state, action) {
      return action.payload
    },
  }
})

export const {setNotificationState, delNotifictionState} = notificationSlice.actions

export const setNotification = (message, time) => {
  return async dispatch => {
    dispatch(setNotificationState(message))
    setTimeout(() => {
      dispatch(delNotifictionState(''))
    }, time * 1000)
  }
}

export default notificationSlice.reducer