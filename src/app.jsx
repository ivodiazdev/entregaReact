import React from 'react';
import Navbar from './navbar/navbar.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* Resto del contenido de la aplicación */}
      </div>
    );
  }
}

export default App;