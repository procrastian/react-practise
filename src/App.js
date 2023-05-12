import './App.css';
// import { AppTitle } from './Components/AppTitle'
// import { MessageBoard } from './Components/MessageBoard'
// import { DiceRoller } from './Components/DiceRoller'

import { Routes, Route, Link } from 'react-router-dom'
import { Repo, Repos, Form, Home, Edit } from './Components/Repos'
import AllNotes from './Components/Repos/AllNotes';


export default function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <AppTitle projectTitle={projectTitle}/> */}
        {/* <MessageBoard /> */}
        {/* <DiceRoller /> */}

        <>
          <Link to='/'>HOME</Link>
          <Link to='/notes'>ALL NOTES</Link>

          <Routes>
            <Route 
             path='/'
             element={<Home />}
            />
            <Route 
              path='/:notes'
              element={<AllNotes />}
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
              path='/:username/:reponame/notes/add'
              element={<Form />}
              
            />
                  <Route 
              path='/:username/:reponame/notes/:id/edit'
              element={<Edit />}
              
            />
          </Routes>
        </>

      </header>
    </div>
  );
}
