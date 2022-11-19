import './App.css';
import Dashboard from './components/dashboard/dashboard';
import Landing from './components/landing/landing';
import Login from './components/login/login';
import Register from './components/register/register';
import AddTopic from './components/addTopic/addTopic';

function App() {
  return (
    <div>
      < Dashboard />
      < Landing />
      < Login />
      < Register />
      < AddTopic />
    </div>
  );
}

export default App;
