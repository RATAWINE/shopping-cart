import React,{useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import data from './components/back/data/data';
import Header from './components/font/Header/Header';
import Routes from './components/font/Routes/Routes';

const App = () => {

  const {productItems} = data;
const [cartItems, setCartItems] = useState([]);

const handleAddProduct=(product)=>{
  const ProoductExist = cartItems.find((item) => item.id === product.id);
  if(ProoductExist){
    setCartItems(cartItems.map((item) => item.id === product.id ? 
    {...ProoductExist, quantity:ProoductExist.quantity + 1}:item))
  }else{
    setCartItems([...cartItems,{...product, quantity: 1}]);
  }
}

const handleCartClearance =()=>{
  setCartItems([]);
}

const handleRemoveItem = (product)=>{
  const ProoductExist = cartItems.find((item) => item.id === product.id);
  if(ProoductExist.quantity === 1){
    setCartItems(cartItems.filter((item) => item.id !== product.id));

  }else{
    setCartItems(cartItems.map((item)=> item.id === product.id ? {...ProoductExist, quantity : ProoductExist.quantity - 1} : item));
  };

}
  return (
    <div className="App">
      <Router>
      <Header cartItems={cartItems}/>
      <Routes productItems = {productItems}
       cartItems={cartItems} 
       handleAddProduct={handleAddProduct} 
       handleCartClearance={handleCartClearance}
       handleRemoveItem={handleRemoveItem}
       />
      </Router>
    
    </div>
  )
}

export default App
