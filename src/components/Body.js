import { useState } from "react";
import { carData } from "../Constant.js";
import CarDetailCard from "./carDetailCard.js";

function filterData(searchText, data) {
  const filterData = data.filter((resp) =>
    resp.title.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log(filterData);
  return filterData;
}

function Body() {
  const [data, setData] = useState(carData);
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const resp = filterData(searchText, data);
            setData(resp);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {data.map((resp) => {
          return (
            <CarDetailCard {...resp} key={resp.id} />
          );
        })}
      </div>
    </>
  );
}

export default Body;
