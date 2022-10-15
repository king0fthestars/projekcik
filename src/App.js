import './App.css';
import { Form } from './components/Form';
import backgroundURL from './assets/background.jpg';

function App() {
  return (
    <div className="container" style={{ backgroundImage: `url(${backgroundURL})`}}>
      <Form />
    </div>
  )
}

export default App;
