import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { Container } from 'react-bootstrap';
import ItemListContainer from "./components/ItemListContainer";

const styleBg = {
	backgroundImage: 'url(../images/bg.jpeg)', 
	backgroundPosition: 'center center', 
	backgroundSize: 'cover',
	minHeight: '100vh',
}

let styles = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  fontSize: 'calc(2em + 2vmin)',
  color: 'white',
  paddingTop: 'calc(5em + 2vmin)'
}

function App() {
	return (
		<>
			<Navbar />
			<main style={ styleBg }>
				<Container>
				    <h1 className="text-white text-center text-uppercase py-5"> Mi centro de Luz </h1>  
					<ItemListContainer saludo="Aqui debera ir un listado de productos" />
				</Container>
			</main>
		</>
	);
}

export default App;
