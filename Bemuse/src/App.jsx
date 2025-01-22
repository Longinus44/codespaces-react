import './App.css';
// import Homepage from './component/Homepage/homepage';
import Header from './component/header/header';
// import Bodycard from './component/body/body';

function App() {
  return (

    <div className="App">
      <Header />
      {/* <Homepage /> */}
      {/* <Bodycard /> */}
      <h1 style={{ color: "blue", fontSize: '30px' }}>
        Hello world!
      </h1>
    </div>

  );
}

export default App;
