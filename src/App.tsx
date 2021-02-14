import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider} from 'react-apollo';
import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import RepoSearch from "./RepoSearch";


const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers:{
    authorization: `Bearer 7093e52b7766dd438a6fe19784ec2cf301e7eb2e`
  }
});

class App extends Component {
  render(){
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <Header/>
          </header>
          <RepoSearch client={client}/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
