import styled from "styled-components"
import './App.css';

const Title = styled.h1`
  font-size: 15em;
  text-align: center;
  color: palevioletred;
`

const Button = styled.button`
  background: ${props=>props.primary?"palevioletred":"white"};
  color: ${props=>props.primary?"white":"palevioletred"}

  font-size 1em;
  margin:1em;
  padding: 0.25 1em; 
  border: 2px solid palevioletred;
  border-radius: 4px;
`
const TomatoButton = styled(Button)`
  background: ${props=>props.primary?"tomato":"white"};;
  color: ${props=>props.primary?"white":"tomato"};
  border-color:red;
`

function App() {
  return (
    <>
    <Title>
      Hey guys!
    </Title>
    <Button primary>Normal</Button>
    <Button>Primary</Button>
    <TomatoButton primary>TOMATO</TomatoButton>
    
    </>
  );
}

export default App;