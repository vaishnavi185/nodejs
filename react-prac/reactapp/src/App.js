import logo from './logo.svg';
import './App.css';

function App() {
  const fru=["apple", "banana", "orange", "grape", "kiwi"];


  return (
  
    <div className="App">
   {fru.map((item)=><button className='btn btn-primary'>{item}</button>)}
    </div>
  );
}

export default App;

