import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard } from "../pages";
import { LINK_DASHBOARD } from "../utils/link";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={LINK_DASHBOARD} component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default Routes;
