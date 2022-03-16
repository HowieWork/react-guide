import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink,
} from 'react-router-dom';

import Hero from './shared/components/Hero';
import Footer from './shared/components/Footer';

import FetchAPI from './fetchAPI/pages/FetchAPI';
import Navigation from './navigation/pages/Navigation';
import CustomButton from './customButton/pages/CustomButton';

function App() {
  return (
    <Router basename='/react-guide'>
      <main className='content-container'>
        <div className='center-flex-column content-container__header'>
          <h1>React Guide</h1>
          <NavLink to='/'>home</NavLink>
        </div>
        <div className='content-container__body'>
          <Switch>
            <Route path='/' exact>
              <Hero />
            </Route>
            <Route path='/fetchAPI' exact>
              <FetchAPI />
            </Route>
            <Route path='/navigation' exact>
              <Navigation />
            </Route>
            <Route path='/custom-button' exact>
              <CustomButton />
            </Route>
            <Redirect to='/' />
          </Switch>
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
