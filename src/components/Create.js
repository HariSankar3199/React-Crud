import React, { useState } from "react";
import axios from "axios";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate ,Link} from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [place, setPlace] = useState("");
 const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://64326dc0d0127730d2d236a8.mockapi.io/crud',{
        Name: name,
        Age:age,
        Place:place
    }).then(()=>{navigate('/')}).catch((err)=>{console.log(err);})
  };
  return (
    <>
      <Container>
        <Row style={{ margin: "15rem" }} className="w-100">
          <Col>
          <div className="my-2">
            <Link to='/'>
            <Button variant="primary" onClick={() => console.log("Primary")}>
                Read Data
            </Button>
            </Link>
          </div>
            <h1 className="bg-success text-center p-2 ">CREATE DATA</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="form-group-id">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="form-group-id">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Your Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="form-group-id">
                <Form.Label>Place</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Place"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                />
              </Form.Group>
              <br />
              <Button className=" w-100"  type="Submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Create;
