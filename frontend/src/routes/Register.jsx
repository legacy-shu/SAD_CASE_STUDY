import React,{useState,useEffect} from 'react';
import Nav from '../components/Nav';
import { Container } from '@mui/material';
const Register = () => {
  const [session, setSession] = useState();
  const getData = () => {
    
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container fixed>
      <Nav></Nav>
    </Container>
  );
};

export default Register;
