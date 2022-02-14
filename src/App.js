import burguer from './img/burguer.png';
import './App.css';
import { useEffect } from "react"
import { useState } from "react"
import Card from './components/card/card';
import Cart from './components/cart/cart';
import Preco from './components/preco/preco';
import Input from './components/input/input';

function App() {
  const [products, setProducts] = useState([])
  const [card, setCard] = useState([])
  const [preco, setPreco] = useState(0)
  const [filterPerKey, setFilterPerKey] = useState([])

  const keyFilter = (value) => {
    const result = products.filter((element) => value == element.name)
    console.log(result)
    return result
  }


  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
  }, [])
  const filterProduct = (productId) => {
    const filtered = products.find((value) => value.id == productId)
    if (!card.includes(filtered)) {
      setCard([...card, filtered])
    } else {
      return;
    }
  }

  const filterRemove = (newId) => {
    const remove = card.filter((value) => value.id != newId)

    setCard(remove)
  }
  const precoTotal = () => {
    const result = card.reduce((acc, cur) => cur.price + acc, 0)
    return result

  }

  console.log(card.length)
  return (
    <div className="App">
      <header className='header-top'>
        <img src={burguer} alt="burguer-Logo" />
        <Input products={products} keyFilter={keyFilter} />
      </header>
      <div className='div-Card-pai'>
        <section className='section-card'>
          {products.map((value, index) => <Card value={value} click={filterProduct} key={index} />)}
        </section>
        <section>
          {
            card.length == 0 ? (<><span>vazio</span></>) : (card.map((value, index) => <Cart value={value} click={filterRemove} card={card} key={index} />))
          }
          <span>total</span>
          <Preco price={precoTotal} />


          <button onClick={() => setCard([])}>remove todos</button>
        </section>
      </div>

    </div>
  );
}

export default App;
