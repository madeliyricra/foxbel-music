import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Dashboard } from "../pages";
import { LINK_DASHBOARD } from "../utils/link";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={LINK_DASHBOARD} component={Dashboard} />
        <Redirect to={LINK_DASHBOARD} />
      </Switch>
    </Router>
  );
};

export default Routes;
