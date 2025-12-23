import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// 컴포넌트 합성(Composition) 및 Props 적용예
// import LibraryPage from './pages/test/LibraryPage' ;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <LibraryPage />
// );


// 컴포넌트에 css 적용예
// import CommentPage from './pages/test/CommentPage' ;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <CommentPage />
// );

// props 적용한 버튼 적용예
import ButtonPage from './pages/test/ButtonPage' ;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ButtonPage />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
