import { useSelector, useDispatch } from 'react-redux'
import { increaseVotes } from "../reducers/anecdoteReducer";
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
  const anecdotes = useSelector(state => state)
  const anecdotesOrdered = anecdotes.sort((a, b) => b.votes - a.votes)

  const vote = (id) => {
    console.log('vote', id)
    dispatch(increaseVotes(id))
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