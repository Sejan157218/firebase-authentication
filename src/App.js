
import './App.css';
import Home from './Component/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import initializeAuthentication from './Firebase/firebase.init';

initializeAuthentication();
function App() {
  return (
    <div className="">
      <Home></Home>
    </div>
  );
}

export default App;
