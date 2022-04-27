import React, { createContext, useState } from 'react';
import { StyleSheet,Text, Switch } from 'react-native';
import { Provider } from 'react-redux';
import NavigationProvider from './src/navigation';
import store from './src/store';

const themes = {
  light: {
    backgroundColor: '#fff',
    borderColor: '#17aede',
    color: '#000'
  },
  dark: {
    backgroundColor: '#000',
    borderColor: '#f47a00',
    color: '#fff'
  }
}


export const ThemeContext = createContext(themes.light);

export default function App() {
  const [currentTheme, setCurrentTheme] = useState('dark' as keyof typeof themes);
  return (
    <Provider store={store}>
      <ThemeContext.Provider value={themes[currentTheme]}>
        {/* <Switch style={{ marginRight: 10 ,position: 'absolute',top:30 }}
          trackColor={{ false: '#17aede', true: '#f47a00' }}
          onValueChange={() => (setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark'), setIsDark(currentTheme === 'dark'))}
          value={isDark}
        /> */}

        <NavigationProvider setTheme={(isLight: boolean) =>{
            setCurrentTheme(isLight?'light':'dark')}
        }/>
      </ThemeContext.Provider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
