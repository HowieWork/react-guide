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

function App() {
  return (
    <Router>
      <main>
        <div className='center-text'>
          <h1>React Guide</h1>
          <NavLink to='/'>home</NavLink>
        </div>
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
          <Redirect to='/' />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
