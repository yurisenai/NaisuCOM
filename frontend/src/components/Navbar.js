import React, { useEffect, useState } from 'react';
import { Menu, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css'; // Assuming this is where your CSS is
import logo from './assets/logo-large.png';
import axios from 'axios'; // Ensure axios is imported


const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Replace this URL with your actual endpoint
    axios.get('/api/user')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);


  return (
    <Menu className="full-width-menu" >
      <div className="navbar">
        <div className="navbar-left">
          <Menu.Item as={Link} to='/' header>
            <Image size='small' src={logo} />
          </Menu.Item>
        </div>
        <div className="navbar-center">
          <Menu.Item as={Link} to='/explore'>Explore (Coming Soon)</Menu.Item>
          <Menu.Item as={Link} to='/shop'>Shop</Menu.Item>
          <Menu.Item as={Link} to='/about'>About</Menu.Item>
          <Menu.Item as={Link} to='/contact'>Contact Us</Menu.Item>
        </div>
        <div className="navbar-right">
          <Menu.Item as={Link} to='/search'>
            <Icon name='search' />
          </Menu.Item>
            {user && user.name ? (
            <Menu.Item as={Link} to='/profile'>
              {user.profilePicture ? (
                <Image avatar src={user.profilePicture} />
              ) : (
                <Icon name='user' />
              )}
              {user.name}
            </Menu.Item>
          ) : (
            <Menu.Item as={Link} to='/login'>
              <Icon name='user' />
              Login
            </Menu.Item>
          )}
          <Menu.Item as={Link} to='/cart'>
            <Icon name='shopping cart' />
          </Menu.Item>
        </div>
      </div>
    </Menu>
  );
};

export default Navbar;

