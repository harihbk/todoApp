import React  from "react";
import { Route , Routes , BrowserRouter } from "react-router-dom";
import Todo from "./Pages/todo";
import _createStore from "./store/store";
import { Provider } from 'react-redux';

function App() {
 

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<Provider store = {_createStore}> <Todo /> </Provider> }/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
