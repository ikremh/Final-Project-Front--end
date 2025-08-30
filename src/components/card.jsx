import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ExploreButton } from './buttons'; 
function BasicExample() {
  return (
    <div id='card-container' className=" row g-4 justify-content-center border-0" >
      <Card style={{ width: '28rem' , border: 'none'  }}>
        <Card.Body >
          <Card.Title className='card-title'>Quality Education</Card.Title>
          <Card.Text className='card-text'>
           Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.
          </Card.Text>
<ExploreButton>ExploreButton </ExploreButton >

        </Card.Body>
      </Card>
      <Card className=' border-start mx-3' style={{ width: '27rem' , border: 'none' }}>
        <Card.Body>
          <Card.Title className='card-title'>Experienced Teachers</Card.Title>
          <Card.Text className='card-text'>
           Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.
          </Card.Text>
<ExploreButton>ExploreButton </ExploreButton >

        </Card.Body>
      </Card>
      <Card className=' border-start mx-1'  style={{ width: '28rem' , border: 'none' }}>
        <Card.Body>
          <Card.Title className='card-title'>Delicious Food</Card.Title>
          <Card.Text className='card-text'>
           Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.
          </Card.Text>
<ExploreButton>ExploreButton </ExploreButton >
   </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;