import './App.css'
import Header from './components/Header/Header'

function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <h1 className="text-center">Modern Compass</h1>
        <p className="text-center">Welcome to our website!</p>
        <div className="button-group">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </main>
    </div>
  );
}

export default App;