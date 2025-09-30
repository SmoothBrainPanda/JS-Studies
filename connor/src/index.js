import express from 'express'
import projectRouter from './projects/route.js'

const server = express()
const port = 3000

server.get('/info', (req, res) => {
	res.send('info route')
})

server.get('/health', (req, res) => {
	res.send({
		message: 'Server is running'
	})
})

server.use('/projects', projectRouter)

server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
})
