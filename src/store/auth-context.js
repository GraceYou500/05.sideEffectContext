import React from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
}); // AuthContext is an object that will contain a component.

export default AuthContext;
