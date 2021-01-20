import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dogs from "./pages/Dogs";
import DogDetail from "./pages/DogDetail";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

import { Provider } from "react-redux";
import store from "./redux/store";

const client = new ApolloClient({
   request: (operation) => {
     const token = localStorage.getItem('id_token')
     operation.setContext({
       headers: {
         authorization: token ? `Bearer ${token}` : ''
       }
     })
   },
  uri: "/graphql",
});

console.log(client);

// console.log(store.getState());

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Provider store={store}>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/dogs" component={Dogs} />
              <Route exact path="/dogs/:id" component={DogDetail} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/about" component={About} />
              <Route exact path="/donate" component={Donate} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Provider>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
