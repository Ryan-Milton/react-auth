import React from "react";
import { LoginContext } from "./context";
import jsonWebToken from "jsonwebtoken";
// import API from '../../lib/api.js';
import If from '../if/index.js';

class Auth extends React.Component {
  render() {
    return (
      <LoginContext.Consumer>
        {context => {
          const user = context.token
            ? jsonWebToken.verify(context.token, "changeit")
            : {};
          const { capability } = this.props;
          const okToRender =
            context.loggedIn &&
            (capability ? user.capabilities.includes(capability) : true);
          return <If condition={okToRender}>{this.props.children}</If>;
        }}
      </LoginContext.Consumer>
    );
  }
}

export default Auth;