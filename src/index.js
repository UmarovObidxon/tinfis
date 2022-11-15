import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from './containers/header';
import Main from './containers/main';
import Body from './containers/body';
import Nav from './components/header/nav';
import Header2 from './containers2/header2';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Body/>
    <Nav/>
    <Header2/>
     {/* <Header/>
     <Main/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
