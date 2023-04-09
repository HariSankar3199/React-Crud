import React, { useState,useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate} from "react-router-dom";

export default function Update() {

    const navigate=useNavigate()
//   const {id} = useParams();
  const[id, setId] = useState("0");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [place, setPlace] = useState("");

  useEffect(() => {
    //getting data from local Storage
    setId(localStorage.getItem("Id"));
    setName(localStorage.getItem('Name'))
    setAge(localStorage.getItem("Age"))
    setPlace(localStorage.getItem("Place"))
  }, []);

  const handleUpdate=(h)=>{
    h.preventDefault()
    axios.put(`https://64326dc0d0127730d2d236a8.mockapi.io/crud/${id}`,{
    Name:name,
    Age:age,
    Place:place
  }).then(()=>{navigate('/')}).catch((err)=>{console.log(err);})
  }
    
   
  return (
    <>
      <Container>
        <Row className="w-100">
          <Col style={{ margin: "15rem" }}>
            <div className="my-2">
              <Link to="/">
                <Button
                  variant="primary"
                  onClick={() => console.log("Primary")}
                >
                  Read Data
                </Button>
              </Link>
            </div>
            <h1 className="bg-warning text-center p-2 ">Edit data</h1>
            <Form onSubmit={handleUpdate}>
              <Form.Group controlId="form-group-id">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="form-group-id">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Your Age"
                  value={age}
                  onChange={(e)=>setAge(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="form-group-id">
                <Form.Label>Place</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Place"
                  value={place}
                  onChange={(e)=>setPlace(e.target.value)}
                />
              </Form.Group>
              <br />
              <Button className=" w-100" type="Submit">
                update
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
