import React, { useEffect, useState } from 'react';
import Search from "./Search";
import Products from "./Products";
import { Alert, Container, Button } from 'react-bootstrap';
import '../styles/components/Home.css';

const Home = () => {

    const [productData, setproductData] = useState([]);

    const [productDataFiltered, setProductDataFiltered] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const [totalCart, setTotalCart] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://front-test-api.herokuapp.com/api/product');
            const devices = await response.json();
            setproductData(devices);
            setProductDataFiltered(devices);
            setIsLoading(false);
        }
        fetchData();      
        setTotalCart(localStorage.getItem('cart'));
    }, [])

    const handleOnClick = (e) => {
        e.preventDefault();
        localStorage.clear();
        setTotalCart(0);
    }

    return (
        <>
            <Container className="total">
                <h5> Total productos: {totalCart ? totalCart : 0}</h5>
                { totalCart ? 
                    <Button 
                        onClick={handleOnClick}
                        variant="danger">Vaciar cesta</Button>
                    : "" 
                }
            </Container>
            <Search
                productData={ productData }
                setProductDataFiltered = { setProductDataFiltered }
            />
            { productDataFiltered.length === 0 && !isLoading ? <Alert variant='danger' className='text-center'>No hay ningún producto que coincida con tus criterios de búsqueda</Alert> : ""}
            <Products
                productData={ productDataFiltered }
            />
        </>
    )
}

export default Home;