import React, { useEffect, useState } from 'react';
import { Menu, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import logo from './assets/logo-large.png';
import useSendRequest from '../hooks/useSendRequest';

const Navbar = ({ isLoggedIn , user}) => {
  const { sendRequest, response, error, loading } = useSendRequest();

  return (
    <Menu className="full-width-menu">
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
          {isLoggedIn  && user ? (
            <Menu.Item as={Link} to='/profile'>
              <Icon name='user' />
              {user.username}
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
