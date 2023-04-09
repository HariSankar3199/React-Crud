import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Read() {
  const [apiData, setApiData] = useState([]);

  const getData = async () => {
    axios
      .get("https://64326dc0d0127730d2d236a8.mockapi.io/crud")
      .then((response) => {
        setApiData(response.data);
      });
  };

  //!updating part => storing to localStorage
  const setDataToStorage=(id,name,age,place)=>{
    localStorage.setItem('Id',id)
    localStorage.setItem('Name',name)
    localStorage.setItem('Age',age)
    localStorage.setItem('Place',place)
  }

  const handleDelete=(id)=>{
    axios.delete(`https://64326dc0d0127730d2d236a8.mockapi.io/crud/${id}`)
    .then(()=>{getData()})
    .catch((err)=>{console.log(err);})
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Container>
        <Row>
          <Col>
          <div className="my-2">
            <Link to='/create'>
            <Button variant="primary" onClick={() => console.log("Primary")}>
                createNew
            </Button>
            </Link>
          </div>
            <Table className="table-bordered table-striped table-dark ">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Place</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {apiData.map((item) => {
                  return (
                    <> 
                      <tr>
                        <td>{item.Name}</td>
                        <td>{item.Age}</td>
                        <td>{item.Place}</td>
                        <td>
                          {" "}
                          <Link to="/update">
                            <Button onClick={()=>setDataToStorage(item.id,item.Name,item.Age,item.Place)}>Edit</Button>
                          </Link>
                        </td>
                        <td>
                          <Link >
                            <Button onClick={() =>{ if (window.confirm('Are You Sure To Delete Data ??')) { handleDelete(item.id) } }}>
                              Delete
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Read;
