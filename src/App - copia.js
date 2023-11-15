import React, {Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Formas de definir el objeto
// #1  Función
// function Hello (props) {
//   return <h2>{props.title}</h2>
// }

// #2  Función flecha
// const Hello = (props) => <h2>{props.title}</h2>

// #3  clases

class Hello extends Component {
  render () {
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component{
  render (){
    const textoSegunBool = this.props.boolean ? 'Argentina' : 'Perón'
    //const mappedNumbers = this.props.arrayOfNumbers.map(n => n * 2)
    const {
      arrayOfNumbers,
      multiply,
      objectWithInfo,
      objetoTitulo,
    } = this.props
    const mappedNumbers = arrayOfNumbers.map(multiply)
    return (
      <>
        <h2> ¡ Viva {textoSegunBool} !</h2>
        <p>{mappedNumbers.join(', ')}</p>
        <p>Country: {objectWithInfo.country} <br></br>Name: {objectWithInfo.name}</p>
        {objetoTitulo}
      </>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title='¡¡VIVA PERON!!' />
        <Text 
          boolean = { false } 
          arrayOfNumbers = { [1,2,3,4,5,6,7,8,9,10] }
          objectWithInfo = {{country: 'Argentina', name: 'Simón'}}
          multiply = {(number) => number * 4 }
          objetoTitulo = {<h1>Viva la patria!</h1>}
          />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p> VIVA PERON </p>
    </div>
  );
}

export default App;
