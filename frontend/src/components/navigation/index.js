import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

	const [search, setSearch] = useState("");
	const handleChange = (e) => {
		setSearch(e.target.value);
	}

	return <div className="NavBar">
		<Link to="/categories">Categories</Link>
		<Link to="/authors">Authors</Link>
		<input type="text" placeholder="Search book by title or author" onChange={handleChange}/>
		<span><button>Search</button></span>
		<Link to="/login">Login</Link>
		<Link to="/Register"><button>Sign up</button></Link>
		</div>;
};

export default Navigation;
