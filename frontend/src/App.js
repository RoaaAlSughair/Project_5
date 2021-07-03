import React from 'react';
import { Route } from 'react-router-dom';
import BookPage from './components/bookPage';
import Footer from "./components/footer/index"

const App = () => {
	return <div className="App">
	{/* <Footer/> */}
	<BookPage/>
	</div>;
};

export default App;
