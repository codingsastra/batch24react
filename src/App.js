import React, {Component} from 'react';
import './App.css';
import Welcome from './Welcome'
import Counter from './Counter'

class  App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Welcome title="Varma" year={2020}/>
        </header>
        <Counter/>
      </div>
    );
  }
}

export default App;
