import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../Context/filterContext";
import '../styles/Sort.css';

const Sort = () => {
  const { filter_products, list_view, setGridView, setListView, sorting } =
    useFilterContext();
    
  return (
   <section className="products-header">
    {/* 1st column  */}
    <div className="select-sort">
        <form action="#">
          <label htmlFor="sort">Sort By</label>
          <select
            name="sort"
            id="sort"
            className="select-sort-style"
            onClick={sorting}>
            <option value="highest">Price(highest)</option>
            <option value="lowest">Price(lowest)</option>
            <option value="a-z">Price(a-z)</option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
      {/* 2nd column  */}
      <div className="product-data-sort">
        <p>{`${filter_products.length} Products Available`}</p>
      </div>

      {/* 3rd column  */}
      
      <div className="sorting-list">
        <button
          className={list_view ? "active sort-btn" : "sort-btn"}
          onClick={setListView}>
          <BsList className="icon" />
        </button>
        <button
          className={!list_view ? "active sort-btn" : "sort-btn"}
          onClick={setGridView}>
          <BsFillGridFill className="icon" />
        </button>
      </div>
   </section>
  );
};

export default Sort;


