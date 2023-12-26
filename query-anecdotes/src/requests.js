import axios from 'axios'
const baseUrl = 'http://localhost:3001'

export const getAnecdotes = () =>
  axios.get(`${baseUrl}/anecdotes`)
    .then(res => res.data)

export const createAnecdote = newAnecdote =>
  axios.post(`${baseUrl}/anecdotes`, newAnecdote)
    .then(res => res.data)

export const updateAnecdote = newObject =>
  axios.put(`${baseUrl}/anecdotes/${newObject.id}`, newObject)
    .then(res => res.data)