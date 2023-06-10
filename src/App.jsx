import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Player from './components/Player'
import players from './players'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container>
        <Row>
          {
            players.map((item, index) => {
              return(
                <Col>
                  <Player name={item.name} nationality={item.nationality} team={item.team} jersyNumber={item.jersyNumber} age={item.age} image={item.image} key={index} />
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </>
  )
}

export default App
