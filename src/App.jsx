import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/sass/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route exact path='/' element={<Home />}></Route>
					<Route path='/services' element={<Services />}></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
