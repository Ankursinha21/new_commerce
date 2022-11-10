import React from 'react'
import { useFilterContext } from '../Context/filterContext';
import ListView from './ListView';
import GridView from './GridView';

const ProdList = () => {
    const {filter_products,list_view} = useFilterContext();
    if(list_view === true ){
        return (
            <ListView products={filter_products}/>
        );
    }
    else {
        return(
            <GridView products={filter_products}/>
        );
    }
    
}

export default ProdList;