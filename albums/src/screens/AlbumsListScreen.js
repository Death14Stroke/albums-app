import React, { useCallback } from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AlbumDetail from '../components/AlbumDetail';
import useResults from '../hooks/useResults';

const AlbumsListScreen = () => {
	const [fetchAlbums, albums, err] = useResults();

	const albumsKeyExtractor = useCallback(album => album.title, []);
	const albumsRenderItem = useCallback(({ item }) => {
		return <AlbumDetail album={item} />;
	}, []);

	return (
		<>
			<NavigationEvents onWillFocus={fetchAlbums} />
			{err ? <Text>{err}</Text> : null}
			<FlatList
				data={albums}
				keyExtractor={albumsKeyExtractor}
				renderItem={albumsRenderItem}
			/>
		</>
	);
};

const styles = StyleSheet.create({});

export default AlbumsListScreen;
