import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import { useRoutes } from 'react-router-dom'
import routes from './routes';





function App() {
  let router = useRoutes(routes)

  return (
    <div className="App my-2">
      <Navbar />
      {router}
    </div>
  );
}

export default App;
