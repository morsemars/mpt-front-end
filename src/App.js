import React from 'react';
import './App.css';
import Nav from './component/nav'
import ProjectList from './component/projects/project-list'

function App() {
  return (
    <div className="container">
      <Nav />

      <main>
        <header>
          Projects
      </header>

        <ProjectList />
      </main>

    </div>
  );
}

export default App;
