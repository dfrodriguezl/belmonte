import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Home, ListProducts} from 'domains/core/containers';
import { ThemeProvider } from '@material-ui/core';
import { MailChimpFormContainer } from 'domains/common/containers';
import theme from 'app/theme';
import { Footer, WaitingList } from 'domains/core/components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/register" component={MailChimpFormContainer} />
        <Route path="/waiting/:name" component={WaitingList} />
        <Route path="/home" component={Home} />
        <Route path="/list-products" component={ListProducts} />
        <Redirect from="/" to="/register" />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
