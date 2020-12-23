import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import HomeScreen from './pages/HomeScreem'
import UploadScreen from './pages/UploadScreen'

import Header from './components/Header'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' name="Home" component={HomeScreen} />
        <Route exact path='/upload' name="Upload" component={UploadScreen} />
      </Switch>
    </Router>
  );
}

export default App;
