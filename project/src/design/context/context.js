import { createContext, useContext, useEffect, useReducer } from "react";
import { lightTheme } from "../themes";
import { themeReducer } from "./reducer";

const AppThemeContext = createContext();

export const AppThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, lightTheme);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("theme"))) {
      //checking if there already is a state in localstorage
      //if yes, update the current state with the stored one
      dispatch({
        type: "initial",
        value: JSON.parse(localStorage.getItem("theme")),
      });
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(state));
    //create and/or set a new localstorage variable called "state"
  }, [state]);

  return (
    <AppThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </AppThemeContext.Provider>
  );
};

export const useAppTheme = () => {
  const { state } = useContext(AppThemeContext);
  return state;
};

export const useDispatchAppTheme = () => {
  return useContext(AppThemeContext).dispatch;
};
