import './App.css';
import FinalSpace from './components/container';
import './styles.modules.css'

function App() {
  document.body.style = 'background: lightblue'
  document.title = "Final Space Characters";
  return (
    <div className="App">
      <h1>Final Space Characters</h1>
      <div className = "container">
        <FinalSpace />
      </div>
    </div>
  );
}

export default App;
