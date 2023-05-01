import {Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import { createContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { categoryCollection, onAuthChange, onCategoriesLoad, onProductsLoad, ordersCollection, productsCollection } from "./firebase";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import ThankYou from "./pages/ThankYou";
import Orders from "./pages/Orders";

// Создать контекст, который будет хранить данные.
export const AppContext = createContext({
  categories: [],
  products: [],
  orders: [], 

  // контекст для корзины
  cart: {},  // содержимое корзинки
  setCart: () => {}, // изменить содержимое корзтнки

  user: null,
});

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || {};
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => { // выполнить только однажды
    onCategoriesLoad(setCategories);
    onProductsLoad(setProducts);
    onOrdersLoad(setOrders);

      getDocs(productsCollection) // получить категории
      .then(({ docs }) => { // когда категории загрузились
        setProducts( // обновить состояние
          docs.map(doc => ({ // новый массив
            ...doc.data(), // из свойств name, slug
            id: doc.id // и свойства id
          }))
        )
      }); 
      
      getDocs(ordersCollection) // получить категории
      .then(({ docs }) => { // когда категории загрузились
        setOrders( // обновить состояние
          docs.map(doc => ({ // новый массив
            ...doc.data(), // из свойств name, slug
            id: doc.id // и свойства id
          }))
        )
      });  

      onAuthChange(user => {
        if (user) {
           user.isAdmin = user.email === "tojgonbaevasaule@gmail.com";
          }
        setUser(user);
      });
  }, []);


  return (
    <div className="App">
      <AppContext.Provider value={{categories, products, cart, setCart, user, orders, setOrders }}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/delivery" element={<Delivery/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/categories/:slug" element={<Category />} />
          <Route path="/products/:slug" element={<Product />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/orders" element={<Orders />} />


          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      </AppContext.Provider> 
    </div>
  );
}

export default App;
