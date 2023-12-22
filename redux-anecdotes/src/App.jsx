import { useSelector, useDispatch } from 'react-redux'
import { increaseVotes, createAnecdote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdoteForm.value
    event.target.anecdoteForm.value = ''
    dispatch(createAnecdote(content))


  }
  const vote = (id) => {
    console.log('vote', id)
    dispatch(increaseVotes(id))
  }

  const anecdotesOrdered = anecdotes.sort((a, b) => b.votes - a.votes)

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotesOrdered.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdoteForm" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App