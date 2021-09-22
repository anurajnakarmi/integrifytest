import React, { useState, useEffect } from 'react';
import './styles/App.css';
import List from './components/List';
import Moreinfo from './components/Moreinfo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [data, setData] = useState('');
  const [selectedData, setSelectedData] = useState(undefined);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => setData(result))
  }, [])

  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <List data={data} setSelectedData={setSelectedData} />} />
        <Route path="/Details" render={() => <Moreinfo data={selectedData} />} />
      </Switch>
    </Router>
  );
}

export default App;
