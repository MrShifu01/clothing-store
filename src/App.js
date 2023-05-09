// Importing the components and the CSS
import './App.css';
import Header from './components/Header'
import Product from './components/Product'
import products from './components/assets/products'
import Footer from './components/Footer';

function App(props) {
  // creating a variable to check fo loggedIn
  const isLoggedIn = props.isLoggedIn
  // If Statement to check for logged in, coming from Index.js
  if (isLoggedIn) {
    return (
      <>
      {/* Adding the components */}
        <Header isLoggedIn={true} name="Chris" />
        
        <section class="products-section">
          <hr/>
          <h1 class="products-heading">Latest Products</h1>
          {/* using a map function to add products from the schema to the Product component */}
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
