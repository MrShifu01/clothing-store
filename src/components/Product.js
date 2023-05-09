import { Card } from 'react-bootstrap'
import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// Function for the Product component that needs to be standar for all the products
function Product ({ product }) {
    return (
        <>
        {/* Using bootstrap Card for the product component */}
            <div class="card-container">
                <Card className="my-3 p-3 rounded bg-dark" style={{width: '18rem'}}>
                    <Card.Img className="product-image" src={product.image} variant="top" />
                    <Card.Body>
                        <Card.Title class="card-title">
                            <strong>{product.name}</strong>
                        </Card.Title>
                    </Card.Body>
                    <Card.Text class="card-price">R{product.price}</Card.Text>
                </Card>
            </div>
        </>
    )
}

export default Product