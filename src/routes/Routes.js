import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import MainLayout from 'template/layouts/Main/Main';
import Home from 'pages/Home';
import PageTwo from 'pages/PageTwo';
import WithLayoutRoute from './WithLayoutRoute';
import NotFound from 'pages/NotFound';

// Handling of the routing with a Layout That adds Head + Nav + Main  and not found - 404 page.

export default function Routes() {
  return (
    <Switch>
      <WithLayoutRoute component={Home} head={'Home'} exact layout={MainLayout} path="/" />
      <WithLayoutRoute component={PageTwo} head={'Page'} exact layout={MainLayout} path="/page-2" />
      <WithLayoutRoute component={Home} exact layout={MainLayout} path="/section-one" />
      <WithLayoutRoute component={Home} exact layout={MainLayout} path="/section-two" />
      <Route component={NotFound} path="/not-found" />
      <Redirect to="/not-found" />
    </Switch>
  );
}
