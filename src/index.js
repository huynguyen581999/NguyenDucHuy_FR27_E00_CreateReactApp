import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';

let mau_nen = "yellow";

const root = ReactDOM.createRoot(document.getElementById('root'));
renderH1();

function action() {
  mau_nen = "blue";
  renderH1();
};

function renderH1() {
  const element = (
    <h1
      style={{
        color: "red", backgroundColor: mau_nen
      }}
      onClick={action}
    >
      Bye, Kmin
    </h1>
  );
  root.render(element);
}
