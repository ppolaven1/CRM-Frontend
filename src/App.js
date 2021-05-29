import './App.css';
import React from 'react';
import Entry from './pages/entry/Entry.page';
import { DefaultLayout } from './layout/DefaultLayout';

function App() {
  return (
    <div className="App">
        {/* <Entry /> */}
        <DefaultLayout>
          Send Page Content
          </DefaultLayout>
    </div>
  );
}

export default App;
