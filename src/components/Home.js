import React, { useEffect, useState } from 'react';
import Search from "./Search";
import Products from "./Products";
import { Alert } from 'react-bootstrap';


export default function Home() {

    const [productData, setproductData] = useState([]);

    const [productDataFiltered, setProductDataFiltered] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://front-test-api.herokuapp.com/api/product');
            const devices = await response.json();
            setproductData(devices);
            setProductDataFiltered(devices);
        }
        fetchData();
    }, [])

    return (
        <>
            <Search
                productData={ productData }
                setProductDataFiltered = { setProductDataFiltered }
            />
            { productDataFiltered.length === 0 ? <Alert variant='danger' className='text-center'>No hay ningún producto que coincida con tus criterios de búsqueda</Alert> : "" }
            <Products
                productData={ productDataFiltered }
            />
        </>
    )
}