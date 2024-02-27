import './App.scss';
import styled from 'styled-components';
import Left from './components/Left/Left';
import Right from './components/Right/Right';

function App() {
  return (
    <div className="App">
      <Left/>
      <Right/>
    </div>
  );
}

export default App;

// const Title = styled.h1`
//     font-size: 1.5em;
//     text-align: center;
//     color: #e91e63;
// `;