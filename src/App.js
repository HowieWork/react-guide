import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom';

import Hero from './shared/components/Hero';
import Footer from './shared/components/Footer';

import FetchAPI from './fetchAPI/pages/FetchAPI';

function App() {
  return (
    <Router>
      <main>
        <div>
          <h1>React Guide</h1>
          <Link to='/'>home</Link>
        </div>
        <Switch>
          <Route path='/' exact>
            <Hero />
          </Route>
          <Route path='/fetchAPI' exact>
            <FetchAPI />
          </Route>
          <Route path='/navigation' exact>
            <FetchAPI />
          </Route>
          <Redirect to='/' />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
