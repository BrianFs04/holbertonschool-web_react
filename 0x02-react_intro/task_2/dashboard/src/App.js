import logo from './holberton-logo.jpg';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App() {
	return (
		<>
			<header className='App-header'>
				<img width='150px' height='150px' src={logo} alt='logo'></img>
				<h1>School dashboard</h1>
			</header>
			<main className='App-body'>
				<p>Login to access the full dashboard</p>
				<label>
					Email:
					<input type='email'></input>
				</label>
				<label>
					Password:
					<input type='password'></input>
				</label>
				<button>OK</button>
			</main>
			<footer className='App-footer'>
				<p>
					Copyright {getFullYear()} - {getFooterCopy(true)}
				</p>
			</footer>
		</>
	);
}

export default App;
