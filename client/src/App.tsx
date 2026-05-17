import {
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/dashboard"
        element={
          localStorage.getItem("token")
            ? <Dashboard />
            : <Login />
        }
      />

      <Route
        path="/leads"
        element={
          localStorage.getItem("token")
            ? <Leads />
            : <Login />
        }
      />

    </Routes>
  );
}

export default App;