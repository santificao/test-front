import React, { useEffect, useState } from 'react';
import { Container, Form, Row, Col, Card, Button } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom';
import '../styles/components/Description.css';

export default function Description () {
    
    const [productInfo, setproductInfo] = useState([]);

    const [selection, setSelection] = useState({
        id: '',
        colorCode: '',
        storageCode: ''
    })

    let params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://front-test-api.herokuapp.com/api/product/${params.id}`);
            const product = await response.json();
            setproductInfo(product);
            setSelection({
                ...selection,
                id: params.id,
                colorCode: product.options.colors[0].code,
                storageCode: product.options.storages[0].code,
            });
        }
        fetchData();
    }, [])

    const handleOnSubmit = e => {
        e.preventDefault();
        console.log(selection);
        const settings = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(selection)
        };
        const fetchData = async () => {
            const fetchResponse = await fetch(`https://front-test-api.herokuapp.com/api/cart`, settings);
            const data = await fetchResponse.json();
            return data;
        }
        fetchData();
    }

    return (
        <>
            <Container className="back">
                <Link className='justify-content-end' to="/">Volver</Link>
            </Container>
            <Container>
                <h3>{productInfo.brand} {productInfo.model}</h3>
                <Row>
                    <Col md={5} lg={5}>
                        <Card>
                            <Card.Img src={productInfo.imgUrl} />
                        </Card>
                    </Col>
                    <Col>
                        <Row>
                            <Card className="description padding-m">
                                <h4>Descripción del producto:</h4>
                                <Card.Text>Marca: {productInfo.brand}</Card.Text>
                                <Card.Text>Modelo: {productInfo.model}</Card.Text>
                                <Card.Text>Precio: {productInfo.price}€</Card.Text>
                                <Card.Text>CPU: {productInfo.cpu}</Card.Text>
                                <Card.Text>RAM: {productInfo.ram}</Card.Text>
                                <Card.Text>Sistema Operativo: {productInfo.os}</Card.Text>
                                <Card.Text>Resolución de pantalla: {productInfo.displayResolution}</Card.Text>
                                <Card.Text>Batería: {productInfo.battery}</Card.Text>
                                <Card.Text>Camaras: Delantera {productInfo.primaryCamera ? productInfo.primaryCamera[0] : ' ' } / Trasera: {productInfo.secondaryCmera ? productInfo.secondaryCmera[0] : ' '}</Card.Text>
                                <Card.Text>Dimensiones: {productInfo.dimentions} </Card.Text>
                                <Card.Text>Peso: {productInfo.weight} </Card.Text>
                            </Card>
                            <Card>
                                <Form
                                    className="padding-m"
                                    onSubmit={handleOnSubmit}>
                                    <Row>
                                        <Col md={4}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Color</Form.Label>
                                                <Form.Select
                                                    value={selection.colorCode}
                                                    onChange={e => setSelection({
                                                        ...selection,
                                                        colorCode: e.target.value
                                                    })}>
                                                {
                                                    productInfo.options ?
                                                        productInfo.options.colors.map((option, index) => {
                                                        return (<option key={index} value={option.code}>{option.name}</option>)
                                                        })
                                                        :
                                                        (<option value="0">No hay opciones disponibles</option>)
                                                }
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Almacenamiento</Form.Label>
                                                <Form.Select>
                                                {
                                                    productInfo.options ?
                                                        productInfo.options.storages.map((option, index) => {
                                                        return (<option key={index} value={option.code}>{option.name}</option>)
                                                        })
                                                        :
                                                        (<option value="0">No hay opciones disponibles</option>)
                                                }
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className='justify-content-end'>
                                        <Col md={4}>
                                            <Button type="submit">Añadir al carrito</Button>    
                                        </Col>
                                    </Row>
                                </Form>
                            </Card>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </>
    );
  }