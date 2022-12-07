// 1) import react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) selecting the root div element
const el = document.getElementById('root');

// 3) telling react what to do with that div
const root = ReactDOM.createRoot(el);

// 4) creating a react component
function App({ type }) {
  return (
    <>
      <div style={{ display: 'flex' }} className="apple">
        <input
          type={type}
          maxLength={5}
          style={{ border: '1px solid blue', marginRight: '10px' }}
        />
        <textarea autoFocus spellCheck={true} />
      </div>
    </>
  );
}

// 5) telling react to render that component
root.render(<App type="text" />);
