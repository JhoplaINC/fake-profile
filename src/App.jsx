import { Profile } from "./components";
import { FakeProfileContextProvider } from "./context/FakeProfileContext";
import './assets/scss/main.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

function App() {

	return (
		<>
			<FakeProfileContextProvider>
				<Profile />
			</FakeProfileContextProvider>
		</>
	)
}

export default App
