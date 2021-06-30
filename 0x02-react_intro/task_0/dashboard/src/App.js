import logo from './holberton-logo.jpg';
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
			</main>
			<footer className='App-footer'>
				<p>Copyright 2020 - holberton School</p>
			</footer>
		</>
	);
}

export default App;
