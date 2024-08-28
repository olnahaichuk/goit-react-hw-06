import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css'
import { setFilterValue } from '../../redux/filter/filterReducer';

const SearchBox = () => {
    const dispatch = useDispatch();

    const selectNameFilter= useSelector(state => state.filters.filterValue);
  

    const handleInputChange = (event) => {
        dispatch(setFilterValue(event.target.value));
    }

    return (
        <div className={css.searchWrapper}>
            <span>Find contacts by name</span>
            <br />
            <input type="text" name="searchName" placeholder='Rosie Simpson'
                className={css.searchField}
                value={selectNameFilter}
                onChange={handleInputChange}
            />
         </div>  )
        
}

export default SearchBox

