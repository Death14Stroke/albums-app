import React from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
	const { title, artist, thumbnail_image, image, url } = album;

	return (
		<Card>
			<CardSection>
				<View style={styles.thumbnailContainerStyle}>
					<Image
						style={styles.thumbnailStyle}
						source={{ uri: thumbnail_image }}
					/>
				</View>
				<View style={styles.headerContentStyle}>
					<Text style={styles.headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
			<CardSection>
				<Image
					style={styles.imageStyle}
					source={{ uri: image }}
					resizeMode='stretch'
				/>
			</CardSection>
			<CardSection>
				<Button title='Buy Now' onPress={() => Linking.openURL(url)} />
			</CardSection>
		</Card>
	);
};

const styles = StyleSheet.create({
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 10
	},
	imageStyle: {
		height: 300,
		flex: 1
	}
});

export default AlbumDetail;
