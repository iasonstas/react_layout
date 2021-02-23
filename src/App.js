import React, { useState } from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes/Routes';
import history from './history';
import 'assets/styles/global.scss';
import { SectionContext } from 'lib/context/context';

function App() {
  const [section, setSection] = useState(true);

  // Router handling and Context provider for the app.(Next like folder structure)
  return (
    <SectionContext.Provider value={{ section, setSection }}>
      <Router history={history}>
        <Routes />
      </Router>
    </SectionContext.Provider>
  );
}

export default App;
