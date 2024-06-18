import React from 'react';
import { Grid, Container, Header, List } from 'semantic-ui-react';
import './styles/FooterNav.css';

const FooterNav = () => (
  <Container fluid className="footer-nav" style={{ backgroundColor: '#f1f1f1', padding: '2em 0em' }}>
    <Container>
      <Grid columns={4} divided>
        <Grid.Row>
          <Grid.Column>
            <Header as='h4'>Connect With Us!</Header>
            <List>
              <List.Item>Get The App</List.Item>
              <List.Item>Careers</List.Item>
              <List.Item>About</List.Item>
              <List.Item>Help/FAQ</List.Item>
              <List.Item>Contact Us</List.Item>
              <List.Item>Privacy Policy</List.Item>
              <List.Item>Terms of Use</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Header as='h4'>Naisu</Header>
            <List>
              <List.Item>Browse Projects</List.Item>
              <List.Item>Browse Art</List.Item>
              <List.Item>Shop</List.Item>
              <List.Item>News</List.Item>
              <List.Item>Games</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Header as='h4'>Accounts</Header>
            <List>
              <List.Item>Create An Account</List.Item>
              <List.Item>Login</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Container>
);

export default FooterNav;
