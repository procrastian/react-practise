import './App.css';
// import { AppTitle } from './Components/AppTitle'
// import { MessageBoard } from './Components/MessageBoard'
// import { DiceRoller } from './Components/DiceRoller'

import { Routes, Route, Link } from 'react-router-dom'
import { Repo, Repos, Form, Home } from './Components/Repos'


export default function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <AppTitle projectTitle={projectTitle}/> */}
        {/* <MessageBoard /> */}
        {/* <DiceRoller /> */}

        <>
          <Link to='/'>HOME</Link>
          <Routes>
            <Route 
             path='/'
             element={<Home />}
            />
            <Route 
              path='/:username'
              element={<Repos />}
            />
            <Route 
              path='/:username/:reponame'
              element={<Repo />}
            />
               <Route 
              path='/:username/:reponame/:notes/add'
              element={<Form />}
              
            />
          </Routes>
        </>

      </header>
    </div>
  );
}
