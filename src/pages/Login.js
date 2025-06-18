// Login.jsx
import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAlert } from '../contexts/alert.context';
import { useToast } from '../contexts/toast.context';

import { useEffect } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const {showAlert} = useAlert();
  const {addToast} = useToast();

  useEffect(() => {
    const currentUser = localStorage.getItem('user');
    if (currentUser) navigate('/dashboard');
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const matched = storedUsers.find(u => u.email === email && u.password === password);
    if (matched) {
      onLogin(matched);
      addToast({title: "Login Successfull", message: "User Had Logged in Successfully."});
      navigate('/dashboard');
    } else {
      showAlert('Invalid credentials', "danger");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4" style={{ width: '400px' }}>
        <h3>Login</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit" variant="primary" className="w-100">Login</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;