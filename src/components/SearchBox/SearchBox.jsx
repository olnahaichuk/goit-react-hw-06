import css from './SearchBox.module.css'

const SearchBox = ({ filter, onFilterChange }) => {
    const handleInputChange = (event) => {
        onFilterChange(event.target.value);
    }
    return (
        <div className={css.searchWrapper}>
            <span>Find contacts by name</span>
            <br />
            <input type="text" name="searchName" placeholder='Rosie Simpson'
                className={css.searchField}
                value={filter}
                onChange={handleInputChange}
            />
         </div>  )
        
}

export default SearchBox

