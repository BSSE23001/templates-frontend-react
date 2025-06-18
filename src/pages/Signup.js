// Signup.jsx
import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAlert } from '../contexts/alert.context';
import { useToast } from '../contexts/toast.context';


import { useEffect } from 'react';


const Signup = ({ onSignup }) => {
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
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const exists = users.find(u => u.email === email);
    if (exists) {
      showAlert('User already exists', "warning");
      return;
    }
    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    addToast({title: "Sign UP Successfull", message: "User Had Logged in Successfully."});
    onSignup(newUser);
    navigate('/dashboard');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4" style={{ width: '400px' }}>
        <h3>Signup</h3>
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
          <Button type="submit" variant="success" className="w-100">Signup</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Signup;