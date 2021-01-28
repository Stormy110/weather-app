import React from 'react';

function Search(props) {
    return (
        <>
            <input placeholder="Enter Zip Code" type="text" value={props.zip} onChange={(e)=> {
                props.setZip(e.target.value)
            }}/>
            <br/>
            <p>{props.zip}</p>
            
        </>
    )
}

export default Search;