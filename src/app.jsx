import React from 'react';
import Navbar from './navbar/navbar.js';
import ItemListContainer from './itemlistcontainer/itemlistcontainer.js';
import Card from './card/card.js';

class App extends React.Component {
  render() {
    return (
      <body>
        <div>
        <Navbar />
        </div>
        <div>
        <ItemListContainer greeting="¡Bienvenidos!" />
        </div>
        <div className="card-container">
          <Card className="articulo"/>
          <Card className="articulo"/>
          <Card className="articulo"/>
        </div>
      </body>
    );
  }
}

export default App;