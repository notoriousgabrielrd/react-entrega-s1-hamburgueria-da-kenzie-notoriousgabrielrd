import burguer from './img/burguer.png';
import './App.css';
import { useEffect } from "react"
import { useState } from "react"
import Card from './components/card/card';

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
  }, [])
  console.log(products)
  //  {id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 14, img: 'https://i.imgur.com/Vng6VzV.png'}
  return (
    <div className="App">
      <header className='header-top'>
        <img src={burguer} alt="burguer-Logo" />
        <input type="text" placeholder='tem que ter botao aqui dentro'></input>
      </header>
      <div className='div-Card-pai'>
        <section className='section-card'>
          {products.map((value, index) => <Card img={value.img} name={value.name} category={value.category} price={value.price} id={value.id} key={index} />)}
        </section>
      </div>

    </div>
  );
}

export default App;
