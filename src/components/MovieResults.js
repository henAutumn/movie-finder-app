import React, { useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';

const MovieResults = ({ movieResults }) => {
	useEffect(() => {}, [movieResults]);
	return (
		<Container fluid>
			<Card style={{ width: '12rem', margin: 'auto' }}>
				<Card.Img src={movieResults.Poster} />
				<Card.Body>
					<Card.Title>{movieResults.Title}</Card.Title>
					<Card.Subtitle>Director(s):{movieResults.Director}</Card.Subtitle>
					<Card.Subtitle>Genre(s):{movieResults.Genre}</Card.Subtitle>
					<Card.Subtitle>Release Date {movieResults.Released}</Card.Subtitle>
				</Card.Body>
			</Card>
		</Container>
	);
};
export default MovieResults;
