import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routing/Routes'
import './styles/minify/main.css'
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
//MDBReact
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';


import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import rootReducers from './store/reducers/rootReducers'
import fbConfig from './config/fbConfig'
const store = createStore(rootReducers,
		compose(
			applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase})),
			reduxFirestore(fbConfig),
			reactReduxFirebase(fbConfig,{useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true})
		)
		
	)

ReactDOM.render(
	<Provider store={store}>
	<Routes />
	</Provider>, document.getElementById('root'));
serviceWorker.unregister();
