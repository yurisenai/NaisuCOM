import React, { useState } from 'react';
import { Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './styles/Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/register/', { username, password, email });
      setSuccess('Register Successful');
      setTimeout(() => {
        navigate('/login');
      }, 1000); // Redirect after 2 seconds
    } catch (err) {
      setError('Username already exists');
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
              Sign-up for a new account
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
                  icon='mail'
                  iconPosition='left'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  Register
                </Button>
              </Segment>
            </Form>
            {success && <Message success>{success}</Message>}
            {error && <Message error>{error}</Message>}
            <Message>
              Already have an account? <Link to='/login'>Login</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

export default Register;

