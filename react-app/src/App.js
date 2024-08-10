import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function App() {
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/attractions")
      .then((res) => res.json())
      .then((result) => {
        setAttractions(result);
      });
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {attractions.map((attractions) => (
            <Col xs={12} sm={4}  key={attractions.id}>
              <Card style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  src={attractions.coverimage}
                />
                <Card.Body>
                  <Card.Title>{attractions.name}</Card.Title>
                  <Card.Text className="text-truncate">
                  {attractions.detail}
                  </Card.Text>
                  <Button variant="primary">See More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}

        </Row>
      </Container>
    </div>
  );
}

export default App;
