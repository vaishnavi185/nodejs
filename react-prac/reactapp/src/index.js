import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Des from './Des';
import reportWebVitals from './reportWebVitals';

function Car(props){
  return (
    <h1>hi i am {props.color}</h1>
  )
}
function Grage(){
  return(
    <>
    <h1>who is there</h1>
    <Car color="red"></Car>
    </>
  )
}
const tapp="hello"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App></App> */}
    <Des></Des>
    {/* <Car color="red"></Car>  */}
    <Grage></Grage>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
