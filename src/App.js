
import './App.css';
import Header from './components/header/Header';
import Main from './components/Main/Main';
import Footer from './components/footer/Footer';
import Delivery from './components/Delivery/Delivery';
import Prefooter from './components/prefooter/prefooter';






function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Delivery/>
     <Prefooter/>
      <Footer/>
     
    </div>
  );
}



export default App;
