import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "views/NotFound";

const RouteProvider = ({ routes }) => {
  return (
    <Switch>
      {routes.map(x => (
        !x.redirect ?
          <Route path={x.path} key={x.name} exact={x.exact || false}>
            <x.component></x.component>
          </Route>
          :
          <Redirect from={x.path} to={x.redirect} key={x.name} exact={x.exact} />
      ))}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default RouteProvider;
