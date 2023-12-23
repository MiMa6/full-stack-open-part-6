import SearchFilter from './components/SearchFilter'
import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import { useSelector } from 'react-redux'

const App = () => {

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