import Card from 'react-bootstrap/Card';
import { FaRegMap } from "react-icons/fa";
import { TfiMobile } from "react-icons/tfi";
import { TfiEmail } from "react-icons/tfi";

function BasicExample() {
  return (
    <div id='card-container' className=" row g-5 justify-content-center border-0 p-2" >
      <Card style={{ width: '25rem' , border: 'none'  }}>
        <Card.Body className='text-center '>
            <FaRegMap size={40} color='#2eca7f' />
          <Card.Title className='card-title text-center m-3'> our location
</Card.Title>
          <Card.Text className='card-text text-center m-3'>
          3481 Melrose Place, Beverly Hills <br />
CA 90210
          </Card.Text>

        </Card.Body>
      </Card>
      <Card className=' border-start ' style={{ width: '27rem' , border: 'none' }}>
        <Card.Body className='text-center'>
            <TfiMobile 
 size={40} color='#2eca7f' />
          <Card.Title className='card-title text-center m-3'> Telephone
</Card.Title>
          <Card.Text className='card-text text-center m-3'>
          (+1) 517 397 7100
<br />
(+1) 411 315 8138
          </Card.Text>

        </Card.Body>
      </Card>
      <Card className=' border-start '  style={{ width: '28rem' , border: 'none' }}>
 <Card.Body className='text-center'>
            <TfiEmail 
size={40} color='#2eca7f' />
          <Card.Title className=' text-center m-3'> Send email
</Card.Title>
          <Card.Text className=' text-center m-3'>
          info@example.com <br />
admin@example.com
          </Card.Text>

        </Card.Body>
      </Card>
    </div>
  );
}

export default BasicExample;