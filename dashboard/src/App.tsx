import React, { FC } from 'react';
import './App.css';
import Charts from './components/Charts';
import Header from './components/Header';

const App: FC = () => {
    return (
        <div className="App">
            <Header>
                <p>PerfAnalytics</p>
            </Header>
            <Charts />
        </div>
    );
};

export default App;
