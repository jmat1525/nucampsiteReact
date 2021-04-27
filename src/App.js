import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ConfigureStore } from './redux/configureStore';
import { Provider } from 'react-redux';



class App extends Component {
  
    render() {
        const store= ConfigureStore()
        return (
            <Provider store={store}>
          <BrowserRouter>
              <div className="App">
                  <Main />
              </div>
          </BrowserRouter>
      </Provider>

        );
    }
}

export default App;
