import React from 'react';
import LoginContext from "../components/auth/context";
import Login from "../components/auth/login";
import Auth from "../components/auth/auth";

import RecordList from './record/list.js';

class App extends React.Component {
  render() {
    return (
      <LoginContext>
        <Login />
        <hr />
        <Auth>
          <div>
            <h2>Teams</h2>
            <RecordList model="teams" />
          </div>
        </Auth>
      </LoginContext>
    );
  }
}

export default App;
