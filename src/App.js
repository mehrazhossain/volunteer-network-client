import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import AddNewService from './components/AddNewService/AddNewService';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/addnewservice"
          element={<AddNewService></AddNewService>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
