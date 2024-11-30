import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations'; // Assume you have a register operation defined
import { Container } from '../Container/Container';
import { Form, Input, Button, Title, AuthWrapper, Text } from './Auth.styled';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
  };    

  return (
    <AuthWrapper>
        <Container>
            <Title>Register</Title>
      <Form onSubmit={handleRegister}>
        <Input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <Input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <Input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <Button type="submit">Register</Button>
      </Form>
      <Text to='/login'>Already have account? Signin</Text>
    </Container>
    </AuthWrapper>
  );
};

export default Register;
