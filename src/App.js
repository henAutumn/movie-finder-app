import './App.css';
import { useState } from 'react';

import { getMovieDetails } from './services/apiCalls';
import MovieForm from './components/MovieForm';
import MovieResults from './components/MovieResults';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
	const [results, setResults] = useState();
	const [title, setTitle] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();
		getMovieDetails(title).then((res) => setResults(res));
	};

	return (
		<Container fluid>
			<Container fluid className="p-5 mb-4 bg-light rounded-3">
				<Row className="justify-content-md-center">
					<Col className="display-3">Find a Movie!</Col>
				</Row>
			</Container>
			<Container>
				<MovieForm handleSubmit={handleSubmit} setTitle={setTitle} />
				{results ? <MovieResults movieResults={results} /> : null}
			</Container>
		</Container>
	);
}

export default App;
