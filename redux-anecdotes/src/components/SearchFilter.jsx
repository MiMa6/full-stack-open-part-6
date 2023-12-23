import { filterChange } from '../reducers/filterReducer';
import { useDispatch } from 'react-redux';

const SearchFilter = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(filterChange(event.target.value));
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter
      <input 
        type="search" 
        placeholder="..."
        onChange={handleSearch} 
      />
    </div>
  )
}

export default SearchFilter