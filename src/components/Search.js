import { Col, Container, Form, Row } from "react-bootstrap";
import PropTypes from 'prop-types';

export default function Search({ productData, setProductDataFiltered }) {
    let productFiltered;

    const handleOnChange = e => {
        productFiltered = productData.filter(
            p => p.brand.toUpperCase().includes(e.target.value.toUpperCase()) 
            || p.model.toUpperCase().includes(e.target.value.toUpperCase()));
        setProductDataFiltered(productFiltered);
    }

    const handleOnSubmit = e => {
        e.preventDefault();
    }

    return (
        <Container>
            <Form
                onSubmit={handleOnSubmit}>
                <Row className='justify-content-end'>
                    <Col md={3}>
                        <Form.Group className="mb-3">
                            <Form.Label>Marca/Modelo</Form.Label>
                            <Form.Control 
                                type="text"
                                name="marca"
                                onChange={ handleOnChange }
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

Search.propTypes = {
    productData: PropTypes.array.isRequired,
    setProductDataFiltered: PropTypes.func.isRequired,
}