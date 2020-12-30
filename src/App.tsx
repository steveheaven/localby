import React from 'react';
import './App.css';
import Layout from "./layout/Layout.component";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/home/Home.page";
import Register from "./pages/register/Register.page";
import Login from "./pages/login/Login.page";
import NotFound from "./pages/404/NotFound.page";
import { theme } from './layout/Theme';
import { ThemeProvider } from 'styled-components';


function App() {
  return (
       <BrowserRouter>
         <ThemeProvider theme={theme}>
              <Layout>
                      <Switch>
                          <Route path="/" component={Home} exact />
                          <Route path="/login" component={Login} />
                          <Route path="/register" component={Register} />
                          <Route path="*" component={NotFound} exact={true} />
                      </Switch>
              </Layout>
         </ThemeProvider>
       </BrowserRouter>
  );
}

export default App;
