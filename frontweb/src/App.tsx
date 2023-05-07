import './assets/styles/custom.scss';
import './App.css'; 

import Rotas from 'Rotas';
import { useState } from 'react';
import { AuthContext, AuthContextData } from 'AuthContext';

function App() {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <Rotas />
    </AuthContext.Provider>
  );
}

export default App;
