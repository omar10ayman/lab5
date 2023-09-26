import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './Components/Home';
import { Route ,Routes } from 'react-router-dom';
import Product from './Components/Product';
import NotFounded from './Components/NotFounded';
import { Provider } from 'react-redux';
import FavouritesPage from './Components/Favourites';
import store from './store/store';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
     <Provider store={store}>
      <NavBar/> 
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productId/:id' element={<Product/>}/>
        <Route path='/favourite' element={<FavouritesPage/>}/>
        <Route path='*' element={<NotFounded/>}/>
      </Routes>
     </Provider>
    </div>
  );
}

export default App;

