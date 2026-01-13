import express from 'express'
import { validator } from '../middleware/validator.js';

const projectRouter = express.Router()

projectRouter.use(validator)

projectRouter.get('/', (req, res) => {
	console.log('default');
	res.send({
		message: 'default'
	})
})

projectRouter.post('/validator', (req, res) => {
	res.send({
		message: 'route hit successfully'
	})
})

// ----- READ -----
projectRouter.get('/all', (req, res) => {
	console.log('projects all route');
	res.send({
		message: 'all projects'
	})
})

// single - id

// ----- CREATE -----
// create

// ----- UPDATE -----
// update

// ----- DELETE -----
projectRouter.delete('/delete', (req, res) => {
	console.log('project delete');
	res.send({
		message: 'deleted'
	})
})

export default projectRouter
