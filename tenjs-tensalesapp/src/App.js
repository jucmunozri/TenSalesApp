import logo from './components/TenSalesAppLogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>TenSalesApp</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <a class="App-link" href={"./login.html"}>Clic para continuar</a>
        <div class="footer">
        <img class="logo10js" src="./images/logoTenJS.png" alt="Logo TenJS" />
        <p id="footer_p" ALIGN="middle">© 2021 TenJS. ALL RIGHTS RESERVED.</p>
        </div>

      </header>

    </div>
  );
}

export default App;
