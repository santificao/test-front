import React from 'react';
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../styles/components/Products.css';

export default function Products({ productData}) {
    let navigate = useNavigate();

    const handleOnClick = (e, product) => {
        e.preventDefault();
        navigate(`/detalle/${product.id}`);
    }

    return (
        <Container>
            <Row>
                {productData.map((product, k) => (
                    <Col key={k} md={4} lg={3}>
                        <Card >
                            <Card.Img src={product.imgUrl} />

                            <Card.Body>
                                <Card.Title>Marca: {product.brand}</Card.Title>
                                <Card.Text>Modelo: {product.model}</Card.Text>
                                <Card.Text>Precio: {product.price}€</Card.Text>
                                <Button onClick={event => handleOnClick(event, product)} variant="primary">Ver detalles</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}