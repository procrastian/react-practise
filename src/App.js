import './App.css';
import { AppTitle } from './Components/AppTitle'

// update the name of the App being tested
const projectTitle = 'Messenger App'

function App() {
  return (

    <AppTitle projectTitle={projectTitle}/>

  );
}

export default App;
