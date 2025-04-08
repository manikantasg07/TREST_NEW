import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header';
import Layout from './Layout/MainLayout';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import AppGate from './init/AppGate';
import Approutes from './RoutesConfig';
// import {B} from "react-router-dom";

// const app={
// }

function App() {
  return (
     <Provider store={store}>
      <Router>
         <AppGate>
            <Approutes />
         </AppGate>
      </Router>
     </Provider>
  );
}

export default App;
