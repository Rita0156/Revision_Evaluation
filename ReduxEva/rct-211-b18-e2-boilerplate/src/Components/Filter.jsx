import React from "react";
import  { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI
  const [searchParam,setSearchparam]=useSearchParams()
     
     const initialGenreParams =searchParam.getAll("genre")
     const [category,setCategory]=useState(initialGenreParams || []);
     
     
     const initialSortParams =searchParam.get("sortBy")
     const [sortBy,setSortBy]=useState(initialSortParams || "")

    function handleGenre(e){
       const option = e.target.value;
       let newCategory=[...category]
       if(category.includes(option)){
          newCategory.splice(newCategory.indexOf(option),1)
       }
       else{
          newCategory.push(option)
       }
       setCategory(newCategory)
    }

     function nandleSortBy(e){
       setSortBy(e.target.value)
     }

    useEffect(()=>{
        if(category){
           setSearchparam({genre:category,
          // sortBy:sortBy 
         })
           
        }
    },[category,setSearchparam])
  return (
    <div style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",width:"20%",paddingLeft:"30px"}}>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input type="checkbox" value="Analog" onChange={handleGenre} defaultChecked={category.includes('Analog')} />
          <label>Analog</label>
        </div>
        <div>
          <input type="checkbox" value="Digital" onChange={handleGenre} defaultChecked={category.includes('Digital')} />
          <label>Digital</label>
        </div>
        <div>
          <input type="checkbox" value="Chronograph" onChange={handleGenre} defaultChecked={category.includes('Chronograph')} />
          <label>Chronograph</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
//box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
