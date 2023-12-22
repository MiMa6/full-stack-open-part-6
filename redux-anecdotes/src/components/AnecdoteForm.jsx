import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdoteForm.value
    event.target.anecdoteForm.value = ''
    dispatch(createAnecdote(content))
  }

  return (
      <form onSubmit={addAnecdote}>
        <input name="anecdoteForm" />
        <button type="submit">create</button>
      </form>
  )
}

export default AnecdoteForm