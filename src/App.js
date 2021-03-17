import React from 'react';
import './App.css';

//a class that holds the state object with an empty 'data' property
class App extends React.Component {
  state = {
    data: "",
  };

  //
  componentDidMount() {
    this.fetchData();
  }

//create a function called fetchData, which uses fetch api which is 'fetch("url for api")
//api's can be found online, check through their docs to find out how they work
  fetchData = () => {
    fetch("https://www.tronalddump.io/random/quote")
    .then((response) => response.json())              //then run function to convert response into Json 
    .then((data) => this.setState({data: data}));     //then the data returned is set to the state 'data' property
  }

  render() {
    return (
      <div className="App">
        <h1>Quote Generator: Donald Trump</h1>
        <h3>Click the button to generate a dumb Donald Trump quote.</h3>
        <div className="btn-wrap">
          <Button fetchData={this.fetchData} />
        </div>
        <div className="quote-box">
          <p>"{this.state.data.value}"</p>    {/*puts info from data.value from api into a p tag*/}
        </div>
        <div className="github">
        <h4>visit my github - <a href="https://github.com/bensparrowdev" target="_blank">bensparrowdev</a></h4>
        </div>
      </div>
    );
    }
}

const Button = ({ fetchData }) => {
  return <button className="main-btn" onClick={fetchData}>Generate Quote!</button>
}

export default App;
