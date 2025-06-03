import React, { createContext, useContext, useEffect, useState } from "react";

const AUTH_TOKEN_KEY = "@nekoJudo/authToken";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem(AUTH_TOKEN_KEY);
    if (token) setAuthToken(token);
  }, []);

  const authenticateUser = (token) => {
    sessionStorage.setItem(AUTH_TOKEN_KEY, token);
    setAuthToken(token);
  };

  const signOutUser = () => {
    sessionStorage.removeItem(AUTH_TOKEN_KEY);
    setAuthToken(null);
  };

  const isAuthenticated = !!authToken;

  return (
    <AuthContext.Provider value={{ isAuthenticated, authToken, authenticateUser, signOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export function getAuthToken() {
  return sessionStorage.getItem("@nekoJudo/authToken");
}
