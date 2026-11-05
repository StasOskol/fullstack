import { createRequire } from "module";
const require = createRequire(import.meta.url);

require('dotenv').config();

const express = require("express");

let data = require('./data/data.json');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.listen(PORT, () => {
	console.log(`Server starting on port ${PORT}`);
});

app.get('/api', (req, res) => {
	let a = 2 + 2;

	
	return res.json({
		message: 'Hello from backend server'
	})
});

app.get('/api/array', (req, res) => {
	return res.json(data.dataTest)
});

app.post('/api/array', (req, res) => {
	console.log(req.body)

	const result = {
		id: data.dataTest.length, // НЕЛЬЗЯ так делать
		name: req.body.name,
		age: req.body.age
	}

	data.dataTest.push(result);

	console.log(data.dataTest);

	return res.json(result);
 });