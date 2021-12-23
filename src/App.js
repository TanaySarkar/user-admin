import AppHeader from './components/AppHeader';
import AppSidebar from './components/AppSidebar';
import AppContainer from './components/AppContainer';
import './App.css';

function App() {
  return (
    <div className="container-scroller">
      <AppHeader />
      <div className="container-fluid page-body-wrapper">
        <AppSidebar />
        <AppContainer />
      </div>
    </div>
  );
}

export default App;
