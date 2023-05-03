import './App.css';
// import { AppTitle } from './Components/AppTitle'
import { MessageBoard } from './Components/MessageBoard'
// import { DiceRoller } from './Components/DiceRoller'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <AppTitle projectTitle={projectTitle}/> */}
        <MessageBoard />
        {/* <DiceRoller /> */}
      </header>
    </div>
  );
}

export default App;
