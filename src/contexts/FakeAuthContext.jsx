import { createContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = { user: null, isAuthendicated: false };

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthendicated: true };
    case "logout":
      return { ...state, user: null, isAuthendicated: false };
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthendicated }, dispatch] = useReducer(
    reducer,
    initialState
  );
  function login(email, password) {}
  function logout() {}

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
}
