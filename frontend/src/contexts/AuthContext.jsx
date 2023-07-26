import React, { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { kullanici: action.payload };
    case 'LOGOUT': // Fixed typo 'LOGout' to 'LOGOUT'
      return { kullanici: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    kullanici: null
  });

  console.log('AuthContext state: ', state);

  return ( // Move the return statement here
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
