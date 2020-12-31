import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	Button,
} from 'react-native';
import { getUserId } from 'redux/selector';
import { editUserProperty, logIn } from 'redux/action/user';
import { UserProperty } from 'redux/types/user';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { allState } from 'redux/selector/user';

export default () => {
	const dispatch = useDispatch();
	const aState = useSelector(allState);
	const userId = useSelector(getUserId);

	const onPress = () => {
		console.log('HI');
		console.log(aState);
		dispatch(editUserProperty(UserProperty.ID, 666));
		dispatch(logIn('user', 'password'));
	};

	return (
		<ScrollView
			contentInsetAdjustmentBehavior="automatic"
			style={styles.scrollView}
		>
			<View style={styles.body}>
				<View style={styles.sectionContainer}>
					<Button title="Test Store" onPress={onPress} />
					<Text style={styles.sectionTitle}>User ID</Text>
					<Text style={styles.sectionDescription}>
						User ID: <Text style={styles.highlight}>{userId || 'NULL'}</Text>
					</Text>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: Colors.lighter,
	},
	engine: {
		position: 'absolute',
		right: 0,
	},
	body: {
		backgroundColor: Colors.white,
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: Colors.black,
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
		color: Colors.dark,
	},
	highlight: {
		fontWeight: '700',
	},
	footer: {
		color: Colors.dark,
		fontSize: 12,
		fontWeight: '600',
		padding: 4,
		paddingRight: 12,
		textAlign: 'right',
	},
});
