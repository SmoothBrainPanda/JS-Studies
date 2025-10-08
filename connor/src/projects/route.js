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

projectRouter.get('/all', (req, res) => {
	console.log('projects all route');
	res.send({
		message: 'all projects'
	})
})

export default projectRouter
