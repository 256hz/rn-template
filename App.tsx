import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	Button,
} from 'react-native';
import 'react-native-gesture-handler';

import {
	Header,
	LearnMoreLinks,
	Colors,
	DebugInstructions,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import getStore from 'redux/getStore';
import { editUserProperty } from 'redux/action/user';
import { UserProperty } from 'redux/types/user';
import { getUserId } from 'redux/selector';
import Test from '@screens/test';

declare const global: {HermesInternal: null | any };

export const { store, persistor } = getStore();

const App = () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor()}>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<Test />
			</SafeAreaView>
		</PersistGate>
	</Provider>
);

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

export default App;
