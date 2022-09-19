import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import GameManager from './components/GameManager';


function App() {

  return (
    <>
      <div id='game'>
        <GameManager></GameManager>
      </div>
    </>
  );
}

export default App;

/*<Card className='mb-3'>
        <Card.Img style={{'width': '100px', 'aspect-ratio':'1'}} src={comet}/>
        <Card.Body>
          <Card.Title>
            Card Example 
          </Card.Title>
          <Card.Text>
            This is an example of a card
          </Card.Text>
          <Button variant="primary">Read more</Button>
        </Card.Body>
      </Card>
      <Breadcrumb>
        <Breadcrumb.Item active>Test 1</Breadcrumb.Item>
        <Breadcrumb.Item>Test 2</Breadcrumb.Item>
        <Breadcrumb.Item>Test 3</Breadcrumb.Item>
      </Breadcrumb>
      <Alert variant='success'>This is a button</Alert>
      <Button>Test button</Button>*/ 
