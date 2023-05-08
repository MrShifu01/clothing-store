import './App.css';
import Header from './components/Header'

function App(props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return (
      <>
        <Header isLoggedIn={true} name="Chris" />
      </>
  );
  } else {
    return (
      <>
        <Header isLoggedIn={false} />
      </>
  );
  }

}

export default App;
