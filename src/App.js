import { BrowserRouter } from 'react-router-dom';

import AppHeader from './components/AppHeader';
import AppSidebar from './components/AppSidebar';
import AppContainer from './components/AppContainer';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container-scroller">
        <AppHeader />
        <div className="container-fluid page-body-wrapper">
          <AppSidebar />
          <AppContainer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
