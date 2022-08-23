import store from './store'
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import Connect from 'containers/pages/Connect';
import Profile from 'containers/pages/user/Profile';

function App() {
  return (
      <Provider store={store}>
          <Router>
              <Routes>
                  {/* Error Display */}
                  <Route path="*" element={<Error404 />} />

                  {/* Home Display */}
                  <Route path="/" element={<Home />} />
                  <Route path="/connect" element={<Connect />} />

                  <Route path="/perfil/:user_account" element={<Profile />} />
              </Routes>
          </Router>
      </Provider>
  );
}

export default App;
