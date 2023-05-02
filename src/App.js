import './App.css';
// import { AppTitle } from './Components/AppTitle'
import { MessageBoard } from './Components/MessageBoard'

// update the name of the App being tested
// const projectTitle = 'Messenger App'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <AppTitle projectTitle={projectTitle}/> */}
        <MessageBoard />
      </header>
    </div>
  );
}

export default App;
