// export default getMovieDetails = (title, imdb) => {
// 	if (!title || !imdb) {
// 		return 'User must provide title or imdb id';
// 	}
// 	let param = title ? `t=${title}` : `i=tt${imdb}`;

// 	fetch(
// 		`http://www.omdbapi.com/?{param}&apikey=${process.env.REACT_APP_OMDB_MOVIE_API_KEY}`
// 	)
// 		.then((res) => res.json())
// 		.then((res) => console.log(res));
// };

// export default function getMovieDetails(lookUp) {
// 	if (!lookUp) {
// 		return 'User must provide title or imdb id';
// 	}
// 	let results = fetch(
// 		`http://www.omdbapi.com/?t=${lookUp}&apikey=${process.env.REACT_APP_OMDB_MOVIE_API_KEY}`
// 	)
// 		.then((res) => res.json())
// 		.then((res) => res.data).;

// 	return results;
// }

const getMovieDetails = async (lookUp) => {
	let results = await fetch(
		`http://www.omdbapi.com/?t=${lookUp}&apikey=${process.env.REACT_APP_OMDB_MOVIE_API_KEY}`
	);
	let res = await results.json();
	return res;
};

export { getMovieDetails };
