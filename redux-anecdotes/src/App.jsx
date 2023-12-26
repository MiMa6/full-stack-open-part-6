import { useEffect } from 'react'
import SearchFilter from './components/SearchFilter'
import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import anecdoteService from './services/anecdotes'
import { setAnecdotes } from './reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes.concat())))
  }, [])

  const notification = useSelector(state => state.notification)

  return (
    <div>
      <h2>Anecdotes</h2>
      {notification === ''
        ? <SearchFilter />
        : <Notification />
      }
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App