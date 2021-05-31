import './App.css';
import React from 'react';
import Entry from './pages/entry/Entry.page';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './pages/dashboard/Dashboard.page';
import { AddTicket } from './pages/new-ticket/AddTicket.page';
import { TicketLists } from './pages/ticket-list/TicketLists.page';
import { Ticket } from './pages/ticket/Ticket.page';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './components/private-route/PrivateRoute.comp';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Entry />
          </Route>
            <PrivateRoute path="/dashboard"><Dashboard /></PrivateRoute>
            <PrivateRoute path="/add-ticket"><AddTicket /></PrivateRoute>
            <PrivateRoute path="/tickets"><TicketLists /></PrivateRoute>
            <PrivateRoute path="/ticket/:tid"><Ticket /></PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
