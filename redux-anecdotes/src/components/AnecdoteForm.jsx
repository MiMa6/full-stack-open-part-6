import { useDispatch } from "react-redux";
import { createAnecdote} from "../reducers/anecdoteReducer";
import { setNotification, delNotifiction } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdoteForm.value
    event.target.anecdoteForm.value = ''
    dispatch(createAnecdote(content))
    dispatch(setNotification(`You created '${content}'`))
    setTimeout(() => {
      dispatch(delNotifiction(''))
    }, 5000)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdoteForm" />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm