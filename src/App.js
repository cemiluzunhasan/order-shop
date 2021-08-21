// import { useHistory } from "react-router-dom";
// import Auth from "layouts/Auth";
import Dashboard from "layouts/Dashboard";
// import { useEffect } from "react";

function App() {
  // const history = useHistory();
  // const token = localStorage.getItem('token');

  // useEffect(() => {
  //   if (window.location.pathname.includes('auth') && token) {
  //     history.push(`/`);
  //   }
  // }, [history, token]);

  return (
    <div className="App">
      {<Dashboard />}
    </div>
  );
}

export default App;
