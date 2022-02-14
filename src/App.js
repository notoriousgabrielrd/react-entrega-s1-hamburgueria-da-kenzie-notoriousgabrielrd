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
    return result.toFixed(2)

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
        <section className='section-cart'>
          <h3 className="div-h3">Carrinho de compras</h3>
          {
            card.length == 0 ? (<div className='div-msg'>
              <h3 className='h3-vazio'>Sua sacola está vazia</h3>
              <p className='p-vazio'>Adicione itens</p>
            </div >)
              : (card.map((value, index) => <Cart value={value} click={filterRemove} card={card} key={index} />))
          }
          <hr></hr>
          <div className='div-span'>
            <div className='span-price'>
              <span className='total-price'>Total</span>
              <Preco price={precoTotal} />
            </div>

            <button className='remove-todos' onClick={() => setCard([])}>remove todos</button>
          </div>
        </section>
      </div>

    </div>
  );
}

export default App;
