import React from 'react';
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import '../styles/components/Products.css';

export default function Products({ productData}) {
    return (
        <Container>
            <Row>
                {productData.map((productData, k) => (
                    <Col key={k} md={4} lg={3}>
                        <Card >
                            <Card.Img src={productData.imgUrl} />

                            <Card.Body>
                                <Card.Title>Marca: {productData.brand}</Card.Title>
                                <Card.Text>Modelo: {productData.model}</Card.Text>
                                <Card.Text>Precio: {productData.price}€</Card.Text>
                                <Button variant="primary">Ver detalles</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}