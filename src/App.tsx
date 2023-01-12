import React from 'react';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Home } from './screens';
import { Header } from './components';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql#',
  cache: new InMemoryCache(),
});
function App() {
  return (
    <>
    <ApolloProvider client={client}>
    <div className="App">
      <Header/>
      <Home/>
    </div>
    </ApolloProvider>
    </>
  );
}

export default App;
