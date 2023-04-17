import {Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import { createContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore/lite";
import { categoryCollection, productsCollection } from "./firebase";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

// Создать контекст, который будет хранить данные.
export const AppContext = createContext({
  categories: [],
  products: [],
  // контекст для корзины
  cart: {},  // содержимое корзинки
  setCart: () => {}, // изменить содержимое корзтнки
});

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => { // выполнить только однажды
    getDocs(categoryCollection) // получить категории
      .then(({ docs }) => { // когда категории загрузились
        setCategories( // обновить состояние
          docs.map(doc => ({ // новый массив
            ...doc.data(), // из свойств name, slug
            id: doc.id // и свойства id
          }))
        )
      });

      getDocs(productsCollection) // получить категории
      .then(({ docs }) => { // когда категории загрузились
        setProducts( // обновить состояние
          docs.map(doc => ({ // новый массив
            ...doc.data(), // из свойств name, slug
            id: doc.id // и свойства id
          }))
        )
      });  
  }, []);


  return (
    <div className="App">
      <AppContext.Provider value={{categories, products, cart, setCart }}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/delivery" element={<Delivery/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/categories/:slug" element={<Category />} />
          <Route path="/products/:slug" element={<Product />} />


          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      </AppContext.Provider> 
    </div>
  );
}

export default App;
