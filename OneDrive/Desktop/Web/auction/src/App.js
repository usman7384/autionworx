// import logo from './logo.svg';
import './App.css';
import ClippedDrawer from './components/drawer/Sidebar';
import SimpleContainer from "./components/grid/Grid";

function App() {
  return (
    <div className="App">
    <div className='Clippeddrawer' >
    <ClippedDrawer/>
    </div>
    <div className='Content'>
    <SimpleContainer/>
    </div>
    </div>
  );
}

export default App;
