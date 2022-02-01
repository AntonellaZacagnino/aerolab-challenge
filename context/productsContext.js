import React, {createContext, useState } from 'react'

export const ProductsContext = createContext()

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);
    const [loading, setLoading] = useState(true);

    const itemsPerPage = 16;
    const fetchProducts = () => {
        const query =  fetch('https://coding-challenge-api.aerolab.co/products', 
        {headers: 
            { "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWVmMDNkZDZlMDQ1MzAwMWE3YzNlMTciLCJpYXQiOjE2NDMwNTQwNDV9.VVcZd3MqkZ7cq-HWT5KUyFWwkOPSwqIpIEesCPaL3y8"}
        }
        )
        .then(res => res.json())
        return query;
    }
    const productsList = []
    const getProducts = () => {
        fetchProducts()
        .then(data => {
            data.forEach(product => {
                productsList.push(product)
            })
            setProducts(productsList)
            setLoading(false)
        })
    }

    const sortLowest = (products) =>{
        const sorted = [...products].sort((a, b) => {
            return a.cost - b.cost;
    });
    setProducts(sorted);
    }

    const sortHighest = (products) =>{
        const sorted = [...products].sort((a, b) => {
            return b.cost - a.cost;
    });
        setProducts(sorted);
    }

    const sortRecent = (products) =>{
        const sorted = [...products].sort((a,b) => {
            if (a._id > b._id){
                return 1
            } else{
                return -1
            }
        });
        setProducts(sorted)
    }
    
    const filterCategory = (category) => { 
        fetchProducts().then(data => {
            const initialProducts = data
            const productsList = []
            initialProducts.filter(
                product => {
            if(product.category == category){
              productsList.push(product)
            } 
        }
        )
        if (category == 'All products'){
              getProducts()
        } else{
            setProducts(productsList)
        }
        })
    }
    return (
        <ProductsContext.Provider value={{products, getProducts, sortLowest, sortHighest, sortRecent, filterCategory, fetchProducts, itemsPerPage, itemOffset, setItemOffset, loading, setLoading}}>
            {children}
        </ProductsContext.Provider>
    )
}