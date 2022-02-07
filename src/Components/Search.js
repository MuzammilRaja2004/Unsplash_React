import React,{useState} from 'react';
import './project.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import axios from 'axios';
;


function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  const getData = () => {
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${searchValue}&client_id=3QjosUmcT4V_aAm7P_7DB-cp9YFjX-2k9qCXrpAqkDE`)
    .then(res => {
      setSearchResults(res.data.results);
    })  
  };
  
  return (
    <>
       <div className="main_di">
       <div className="search_div">
        <input type="text" placeholder="Search" className='search' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} />
        <button className='search_btn' onClick={getData}>Search</button>
        </div>

        <div className='images_div'>
    <ImageList variant="masonry" cols={3} gap={8}>
  {searchResults.map((item,index) => (
    <ImageListItem key={index}>
      <img
        src={`${item.urls.small}?w=248&fit=crop&auto=format`}
        srcSet={`${item.urls.small}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
    </div>
       </div>
    </>
  )
}

export default Search;
