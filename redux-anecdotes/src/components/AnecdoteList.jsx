import { useSelector, useDispatch } from 'react-redux'
import { increaseVotes } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";
import PropTypes from 'prop-types';

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)

  const anecdotesFiltered = anecdotes.filter(anecdote => {
    return anecdote.content.toLowerCase().includes(filter.toLowerCase())
  })
  const anecdotesOrdered = anecdotesFiltered.sort((a, b) => b.votes - a.votes)

  const vote = (id) => {
    const anecdoteToChange = anecdotes.find(a => a.id === id)
    dispatch(increaseVotes(id, anecdoteToChange))
    dispatch(setNotification(`You voted '${anecdotes.find(anecdote => anecdote.id === id).content}'`, 5))
  }
  return (
    <div>
      {anecdotesOrdered.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => vote(anecdote.id)}
        />
      )}
    </div>
  )
}

Anecdote.propTypes = {
  anecdote: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default AnecdoteList