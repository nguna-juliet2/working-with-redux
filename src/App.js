 import {Route, Switch, Redirect} from 'react-router-dom';
 
import './App.css';
import Welcome from './Pages/Welcome';
import Products from './Pages/Product';
import MainHeader from './Components/MainHeader';
import ProductDetails from './Pages/ProductDetails';

function App() {
  return (
    <div >
      <MainHeader/>
      <main>
      <Switch>
      <Route path='/' exact> 
        <Redirect to ='/Welcome'/>
      </Route>
      <Route path='/Welcome'>
        <Welcome/>
      </Route>
      <Route path='/Products' exact>
        <Products/>
      </Route>
      <Route path='/products/:productId' >
        <ProductDetails/>
      </Route>
      </Switch>
     
   
      </main>
      
    </div>
  );
}

export default App;
