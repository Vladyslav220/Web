import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authOperations'; // Assume you have a login operation defined
import { Container } from '../Container/Container';
import { Form, Input, Button, Title, AuthWrapper, Text } from './Auth.styled';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Get token from Redux state

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };


  return (
    <AuthWrapper>
      <Container>
        <Title>Login</Title>
        <Form onSubmit={handleLogin}>
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
          {/* <Text to='/'> */}
            <Button type="submit">Log In</Button>
          {/* </Text> */}
        </Form>
        <Text to='/register'>Don't have an account? Signup</Text>
      </Container>
    </AuthWrapper>
  );
};

export default Login;
