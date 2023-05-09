import './App.css';
import Header from './components/Header'
import Product from './components/Product'
import products from './components/assets/products'
import Footer from './components/Footer';

function App(props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return (
      <>
        <Header isLoggedIn={true} name="Chris" />
        
        <section class="products-section">
          <hr/>
          <h1 class="products-heading">Latest Products</h1>
          <div class="products-container">
            {products.map((product) => (
              <div sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </>
  );
  } else {
    return (
      <>
      {/* Login Header */}
        <Header isLoggedIn={false} />
        <Footer />
      </>
  );
  }

}

export default App;
