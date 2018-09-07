import React, { Component } from 'react';
import { Provider } from 'react-redux';
import reduxStore from './redux/store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Header from './components/header';
import Homepage from './components/pages/index';

class App extends Component {
	componentDidMount() {
		// check whether use is connected to internet
		if (!navigator.onLine) {
			toast.error('You are not connected to internet!');
		}
	}

	render() {
		return (
			<Provider store={reduxStore}>
				<React.Fragment>
					<Header />
					<Homepage />
					<ToastContainer />
				</React.Fragment>
			</Provider>
		);
	}
}

export default App;
