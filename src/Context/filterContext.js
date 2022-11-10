import { useContext, useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useProductContext } from "./productContext";
import reducer from '../Reducer/filterReducer';

const FilterContext = createContext();

const initialState = {
    filter_products:[],
    all_products: [],
    list_view: false,
    sorting_value: "lowest",
}

export const FilterContextProvider = ({children})=>{

    const {products} = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    const setListView=()=>{
        return dispatch({type: "SET_LIST_VIEW"});
    }
    const setGridView=()=>{
        return dispatch({type: "SET_GRID_VIEW"});
    }
    const sorting =()=>{
        dispatch({type:"SORT_VALUE"});
    }

    useEffect(()=>{
        dispatch({type: "LOAD_FILTER_PRODUCTS", payload: products});
    },[products]);

    return(
        // <FilterContext.Provider value={{ ...state, setListView}}>
        <FilterContext.Provider value={{ ...state, setListView, setGridView, sorting}}> 
            {children}
        </FilterContext.Provider>
    )
}
export const useFilterContext = ()=>{
    return useContext(FilterContext);
};
