import React, { useEffect, useContext } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { UserContext } from '../context/user.contex';

import Login from '../pages/login.page';
import Home from '../pages/home.page';

export default function Routes() {
  let history = useHistory();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      history.push('/');
    } else {
      history.push('/home')
    }
  }, [user, history]);

  console.log(history);
  return (
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/home' exact component={Home} />
    </Switch>
  );
}
