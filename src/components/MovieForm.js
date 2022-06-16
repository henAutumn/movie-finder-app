import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const MovieForm = ({ handleSubmit, setTitle }) => {
	return (
		<Container fluid>
			<Form onSubmit={handleSubmit}>
				<Form.Group role="form">
					<Form.Control
						type="text"
						onChange={(e) => setTitle(e.target.value)}
						placeholder="Movie Title"
					/>
				</Form.Group>
				<Button className="m-2" type="submit">
					Look it up!
				</Button>
			</Form>
		</Container>
	);
};
export default MovieForm;
