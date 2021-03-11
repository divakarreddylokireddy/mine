import React from 'react';
import './App.css';
import broccoli from './broccoli.jpg'

function Header(props) {
    return (
        <header>
            <h1>{props.nameHeader} Imports</h1>
        </header>
    );
}

function Main(props){
    return (
        <section>
            <p>Here are some of the {props.adjectiveMain}  items which are vailable</p>
            <img src={broccoli} height={ 100} alt="These are the products available now."/>
            <ul style={{textAlign: "left"}}>
                {props.products.map((products) => (
                    <li key={products.id}>{products.title}</li>))}
             </ul>
        </section>
        );
}
function Footer(props) {
    return (
        <footer>
            <p>Copyright {props.year} </p>
        </footer>
    );
}
const products = [
    "Fruits",
    "Vegitables",
    "Grocessary"
]

const productsObject = products.map((products, i) => ({ id: i, title: products }));

function App() {
  return (
      <div className="App">
          <Header nameHeader = "Dheeraj"/>
          <Main adjectiveMain="amazing" products={productsObject}/>
          <Footer year={new Date().getFullYear()} />  

      </div>
  );
}

export default App;
