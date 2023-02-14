import './search.css';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/fa';

function SearchBar(){
    return(
        
        <div className='navbar-search '>
            
      
                <input type="text" className='border' placeholder= "Search: Make, model or location"></input>
        
        </div>
    )
}

export default SearchBar;
