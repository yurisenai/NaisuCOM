import React, { useState } from 'react';
import { Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles/Register.css'; // Reuse the same CSS file for consistency

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login/', { username, password });
      localStorage.setItem('token', response.data.token);
      setSuccess('Login Successful');
      setTimeout(() => {
        navigate('/');
      }, 1000); // Redirect after 1 second
    } catch (err) {
      setError('Login Failed. Try again.');
    }
  };

  return (
    <div className='container'>
      <div className='left-column'>
        <div className='left-content'>
          <Link to='/'><h1>NaisuXpress</h1></Link>
          <p>Making dreams true way easier.</p>
          <Button color='google'>Login with Google</Button>
        </div>
      </div>
      <div className='right-column'>
        <Grid textAlign='center' verticalAlign='middle'>
          <Grid.Column>
            <Header as='h2' style={{ color: 'var(--primary-color)' }} textAlign='center'>
              Log-in to your account
            </Header>
            <Form size='large' onSubmit={handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='Username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button style={{ backgroundColor: 'var(--primary-color)', color: 'white' }} fluid size='large'>
                  Login
                </Button>
              </Segment>
            </Form>
            {success && <Message success>{success}</Message>}
            {error && <Message error>{error}</Message>}
            <Message>
              <Link to='/forgot-password'>Forgot Password?</Link>
            </Message>
            <Message>
              New to Naisu? <Link to='/register'>Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

export default Login;

