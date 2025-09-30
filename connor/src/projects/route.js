import express from 'express'

const projectRouter = express.Router()

projectRouter.get('/all', (req, res) => {
	console.log('projects all route');
	res.send({
		message: 'all projects'
	})
})

// create the following routes:
// /id
// /create
// /update
// /delete

export default projectRouter
