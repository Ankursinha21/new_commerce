//it's like a data warehouse, we can fetch or store data from this
//create a context (AppContext) with
//provider: AppProvider
//consumer: useContext Hook

import { useContext, createContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducer/productReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";
// const API = "https://fakestoreapi.com/products";
// const API = "https://ecommapinew.herokuapp.com/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts =async (url)=>{
        dispatch({ type: "SET_LOADING" });
        try {
          const res = await axios.get(url);
          const products = await res.data;
          dispatch({ type:"SET_API_DATA", payload: products });
        } catch (error) {
          dispatch({ type: "API_ERROR" });
        }
    }
    //api call for single product page//
    const getSingleProduct = async (url)=>{
      dispatch({ type: "SET_SINGLE_LOADING" });
      try {
	      const res = await axios.get(url);
	      const singleProduct = await res.data;
	      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
      } catch (error) {
          dispatch({type: "SET_SINGLE_ERROR"});
      }
    }
    useEffect(()=>{
        getProducts(API);
    },[]);// eslint-disable-next-line
  /*children is our App Component*/
  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}          
    </AppContext.Provider>
  );
};
//custom hook//
const useProductContext=()=>{
    return useContext(AppContext);
}
export { AppProvider, AppContext, useProductContext };
