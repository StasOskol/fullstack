import { createRequire } from "module";
const require = createRequire(import.meta.url);

const data = require('./data/arr.json');

require('dotenv').config();

const express = require("express");

import { updateJsonFile } from "./src/helpers/_updateJsonFiles.js";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.listen(PORT, () => {
	console.log(`Server starting on port ${PORT}`);
});

app.get('/api', (req, res) => {
	res.json({
		message: 'Hello from backend server'
	})
});

app.get('/api/arr', (req, res) => {
	return res.json(data);
})

app.post('/api/arr', (req, res) => {
	console.log('post')
	let idNew = data.length;

	console.log(req.body);

	console.log(data);

	let localData = data;

	localData.push({
		id: idNew,
		name: req.body.name
	})

	updateJsonFile('arr.json', localData);

	return res.json("Completed");
})

app.get('/api/arr/:id', (req, res) => {
	const idParam = req.params.id;

	console.log(idParam);

	let localData = data;

	let sent;

	for (let i = 0; i < localData.length; i++){
		console.log(Number(idParam) == Number(localData[i].id));

		if (Number(idParam) == Number(localData[i].id)) {
			sent = localData[i];
			
		}
	}

	console.log(sent)

	return res.json(sent);
})