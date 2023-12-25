import React from "react";
import  { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialGenreParams = searchParams.getAll("category");
  //const initialSortParams = searchParams.get("sortBy");
  const [category, setCategory] = useState(initialGenreParams || []);
  //const [sortBy, setSortBy] = useState(initialSortParams || "");

  const handleGenreChange = (e) => {
    const option = e.target.value;
    //if the option is already present in the category, remove it
    //else add it in the category array
    let newCategory = [...category];
    if (category.includes(option)) {
      //remove it
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      //add it
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  

  useEffect(() => {
    //if the category changes then reflect it on the URL search as well
    if (category) {
      setSearchParams({ category: category,  });
    }
  }, [category, setSearchParams]);
  return (
    <div style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",width:"20%",paddingLeft:"30px"}}>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input type="checkbox" value="Analog" onChange={handleGenreChange} defaultChecked={category.includes('Analog')} />
          <label>Analog</label>
        </div>
        <div>
          <input type="checkbox" value="Digital" onChange={handleGenreChange} defaultChecked={category.includes('Digital')} />
          <label>Digital</label>
        </div>
        <div>
          <input type="checkbox" value="Chronograph" onChange={handleGenreChange} defaultChecked={category.includes('Chronograph')} />
          <label>Chronograph</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
//box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
