import React,{useState,useEffect} from 'react'

let fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

function Search(){

    let [list,setList] = useState(fruits);
    let [search,setSearch] = useState("");
    
    useEffect(()=>{
        handleSearch()
    },[search])
    
    function handleSearch(){
        setList(fruits.filter((fruit)=> fruit.toLowerCase().includes(search.toLowerCase())))
    }

    return (
        <div>
            <input onChange={(e)=> setSearch(e.target.value)} type='text' placeholder='Search'></input>
            <ul>
                {
                    list.map((fruit) =>{
                        return(
                            <li>{fruit}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Search