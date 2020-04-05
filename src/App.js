import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

// function App(props) {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>{props.msg}</p>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         > 
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  // changeVal = () => {ß
  //   this.setState({ msg: 'ohhhho' });
  // }
  render() {
    const { monsters, searchField } = this.state;
    const filteredVal = monsters.filter(res => res.name.toLowerCase().includes(searchField.toLowerCase()))
    console.log(filteredVal)
    return (
      // filteredVal.length > 0 ?
      <div className="App">
        <SearchBox placeholder="search"
          handleChange={e => this.setState({ searchField: e.target.value })} />

        <CardList monsters={filteredVal} />
        {/* {
          this.state.monsters.map((res, index) => <h1 key={index}>{res.name}</h1>)
        } */}
      </div>
    )
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => {
      return res.json();
    }).then(res => {
      this.setState({ monsters: res });
    })
  }
}

export default App;
