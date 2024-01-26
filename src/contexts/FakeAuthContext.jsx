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

const FAKE_USER = {
  name: "Tony",
  email: "tony@example.com",
  password: "superSafePW",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }) {
  const [{ user, isAuthendicated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={(user, isAuthendicated, login, logout)}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
}

export { AuthProvider, useAuth };
