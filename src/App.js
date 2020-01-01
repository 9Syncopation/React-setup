import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.state = {bcgColor: 'gray'}

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
     
  }


  handleUserInput(event) {
  //  const value = event.target.value;
    this.setState({
      value: event.target.value
      
    })
    
  }

  handleSubmit() {
    let value = this.state.value
    let bcgColor = this.state.bcgColor
    console.log(value , 'value');
    if (value.length < 6) {
      this.setState({
        bcgColor: 'red'
      })
    } else {
      this.setState({
        bcgColor: 'green'
      })
    
    }
    console.log('change background to : ', bcgColor,);
    
    
  }

  
  
  render() {

    const bcgColor = this.state.bcgColor
    return (

      <div className="App">
      <Header></Header>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div style={{ backgroundColor: bcgColor }} >
          <a>
          Email Validatoion
          </a>
          <form>
          <input type="email" placeholder="Email" value={this.state.email}  required/> <br/>
          <input type="text" placeholder="Password > 6 digit" value={this.state.value} onChange ={this.handleUserInput} /> <br/>
          <button type="submit" value="submit" onClick={this.handleSubmit}>Submit</button>
          </form>
          </div>
        </header>
        <Footer/>
        </div>
    );
  }
}

export default App;
