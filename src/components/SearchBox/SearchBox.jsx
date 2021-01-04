import './searchbox.style.css'
const SearchBox = ({ searchChange }) => {
    return (
        <div className='searchbox'>
            <input className='searchbox-input' 
            type='search'
            placeholder='search...'
            onChange = {searchChange}
            />
        </div>
        
    )
}

export default SearchBox;