import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
	return (
		<div className="App">
			<LoadData></LoadData>
			<Product name="Rased" job="Software Developer"></Product>
			<Product name="Rahul" job="Student"></Product>
			<Product name="Alif" job="Software Developer"></Product>
		</div>
	);
}

function LoadData() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) => setPosts(data));
	}, []);
	return (
		<div>
			{/* console.log(); */}
			<h1>Post: {posts.length}</h1>
			{/* {posts.map((post) => console.log(post))} */}
			{posts.map((post) => (
				<h3>{post.name}</h3>
			))}
		</div>
	);
}

function Product(props) {
	const [power, setPower] = useState(1);
	const boostPower = () => {
		const newPower = power * 2;
		setPower(newPower);
	};
	const nameStyle = {
		backgroundColor: "lightblue",
		padding: "10px",
		border: "1px solid black",
		margin: "20px",
	};
	return (
		<div style={nameStyle}>
			<h3>{props.name}</h3>
			<p>{props.job}</p>
			<h4>Power: {power}</h4>
			<button onClick={boostPower}>Boost The Power</button>
		</div>
	);
}
export default App;
