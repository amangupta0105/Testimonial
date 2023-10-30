import './App.css';
import Testimonials from  './components/Testimonials.js';
import reviews from './data';

function App() {
  return (
    <div className="App">
      <h1>Our Testimonal</h1>
      <Testimonials reviews ={reviews}/>
    </div>
  );
}

export default App;
