import Header from './components/Header';
import Meals from './components/Meals';
import { CartContextProvider } from './store/CartContext';



const App = () => {
 return (
    <CartContextProvider>
    <div>
      <Header />
      <Meals />
    </div>
    </CartContextProvider>
    
  );
  

}



export default App;
