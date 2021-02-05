import { useState } from 'react';
import albumsApi from '../api/albumsApi';

export default () => {
	const [err, setError] = useState('');
	const [albums, setAlbums] = useState([]);

	const fetchAlbums = async () => {
		try {
			const response = await albumsApi.get('/albums');
			setAlbums(response.data);
			setError('');
		} catch (err) {
			setError('Something went wrong');
		}
	};

	return [fetchAlbums, albums, err];
};
