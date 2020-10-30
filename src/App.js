import React, {useState, useEffect} from "react";
import  UserCard  from './components/UserCard';
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Axios from "axios";

const App = () => {

  const [details, setDetails] = useState({});

  const fetchUserDetails = async () => {
    const {data} = await Axios.get("https://randomuser.me/api/").catch(function (error) {
    // handle error
    console.log(error);
  });

    const userDetails = data.results[0];
    setDetails(userDetails);
  }

  useEffect(() => {
    fetchUserDetails();
  },[])


  return (
    <Container fluid className="p-4 App">
      <Row>
        <Col md={4} className="mt-4 offset-md-4">
          <UserCard details={details}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
