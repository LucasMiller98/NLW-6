import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './../pages/Home';
import { NewRoom } from './../pages/NewRoom';

export const Routes = () => {
  return(
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/rooms/new' component={NewRoom} />
      </Switch>
    </Router>
  )
}