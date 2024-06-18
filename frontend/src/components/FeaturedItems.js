import React from 'react';
import { Card, Image, Container, Header, Button } from 'semantic-ui-react';
import './styles/FeaturedItems.css';

const FeaturedItems = () => (
  <Container className="featured-items">
    <Header as='h2' textAlign='center'>Top Community Creations</Header>
    <Card.Group itemsPerRow={4}>
      <Card>
        <Image src='../assets/Arutera_Hero.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>NaisuXpress</Card.Header>
          <Card.Meta>Software</Card.Meta>
          <Card.Description>
            Create beautiful art fast and efficiently.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button primary>Add to Cart</Button>
        </Card.Content>
      </Card>
      {/* Repeat similar Card components for other featured items */}
    </Card.Group>
  </Container>
);

export default FeaturedItems;
