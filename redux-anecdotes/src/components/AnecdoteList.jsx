import { useSelector, useDispatch } from 'react-redux'
import { increaseVotes } from "../reducers/anecdoteReducer";
import { setNotification, delNotifiction } from "../reducers/notificationReducer";
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
    console.log('vote', id)
    dispatch(increaseVotes(id))
    dispatch(setNotification(`You voted '${anecdotes.find(anecdote => anecdote.id === id).content}'`))
    setTimeout(() => {
      dispatch(delNotifiction(''))
    }, 5000)
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