

import auth from "routes/auth";
import RouteProvider from "routes/RouteProvider";

const Auth = () => {
  return (
    <div className="Auth">
      <RouteProvider routes={auth} />
    </div>
  )
};

export default Auth;
