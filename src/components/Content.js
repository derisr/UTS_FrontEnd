import react from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IMG_1 from "./IMG_1.JPG";

const content = () => {
    return(
        <Row xs={1} md={5} className="flex-md-row">
            {Array.from({ length: 10 }).map((_, idx) => (
                <Col>
                    <Card>
                        <Card.Img variant="top" src={IMG_1} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting 
                                text below as a natural lead-in to
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}
export default content