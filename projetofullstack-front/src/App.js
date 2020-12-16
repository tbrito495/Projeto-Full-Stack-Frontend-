import logo from './logo.svg';
import './App.css';
import Router from './Components/Router';
import styled from 'styled-components'

const AppContainer = styled.div`
display:flex;
align-items:center;
width: 100vw;
height:100vh;
flex-direction:column;
`

function App() {
  return (
    <AppContainer >
       <Router/>
    </AppContainer>
  );
}

export default App;
