import React from 'react';
import { Grid, Image, Container, Header } from 'semantic-ui-react';
import './styles/NavigationPanels.css';

const NavigationPanels = () => (
  <Container className="navigation-panels">
    <Grid columns={3} divided>
      <Grid.Row>
        <Grid.Column>
          <Image src='/path/to/image2.jpg' />
          <Header as='h3'>Figures Collection</Header>
        </Grid.Column>
        <Grid.Column>
          <Image src='/path/to/image3.jpg' />
          <Header as='h3'>T-Shirts</Header>
        </Grid.Column>
        <Grid.Column>
          <Image src='/path/to/image4.jpg' />
          <Header as='h3'>Support Artists</Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default NavigationPanels;
