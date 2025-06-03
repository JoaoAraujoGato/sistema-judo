import React, { createContext, useContext, useEffect, useState } from "react";

const AUTH_TOKEN_KEY = "@nekoJudo/authToken";
const USER_ID_KEY = "@nekoJudo/userId";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem(AUTH_TOKEN_KEY);
    const storedUserId = sessionStorage.getItem(USER_ID_KEY);
    if (token) setAuthToken(token);
    if (storedUserId) setUserId(storedUserId);
  }, []);

  const authenticateUser = (token, id) => {
    sessionStorage.setItem(AUTH_TOKEN_KEY, token);
    sessionStorage.setItem(USER_ID_KEY, id);
    setAuthToken(token);
    setUserId(id);
  };

  const signOutUser = () => {
    sessionStorage.removeItem(AUTH_TOKEN_KEY);
    sessionStorage.removeItem(USER_ID_KEY);
    setAuthToken(null);
    setUserId(null);
  };

  const isAuthenticated = !!authToken;

  return (
    <AuthContext.Provider value={{ isAuthenticated, authToken, userId, authenticateUser, signOutUser }}>
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

// Para pegar o userId basta fazer: const { userId } = useAuth();