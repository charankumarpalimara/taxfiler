import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const isJwtExpired = (token) => {
  if (!token) return true;
  try {
    const base64Url = token.split(".")[1];
    if (!base64Url) return true;
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    const decoded = JSON.parse(jsonPayload);
    if (!decoded.exp) return false;
    return decoded.exp < Date.now() / 1000;
  } catch (e) {
    return true;
  }
};

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => sessionStorage.getItem("user_token"));
  const [user, setUser] = useState(() => {
    const storedUser = sessionStorage.getItem("user_data");
    if (!storedUser) return null;
    try {
      return JSON.parse(storedUser);
    } catch {
      return null;
    }
  });

  const isAuthenticated = Boolean(token && !isJwtExpired(token));

  useEffect(() => {
    if (token && isJwtExpired(token)) {
      logout();
    }
  }, [token]);

  const login = (newToken, userData) => {
    sessionStorage.setItem("user_token", newToken);
    sessionStorage.setItem("user_data", JSON.stringify(userData));
    setToken(newToken);
    setUser(userData);
  };

  const logout = () => {
    sessionStorage.removeItem("user_token");
    sessionStorage.removeItem("user_data");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        isAuthenticated,
        login,
        logout,
        isJwtExpired,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    return {
      token: null,
      user: null,
      isAuthenticated: false,
      login: () => {},
      logout: () => {},
      isJwtExpired: () => true,
    };
  }
  return context;
}
