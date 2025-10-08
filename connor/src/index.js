import express from 'express'
import projectRouter from './projects/route.js'
import loggerMiddleware from './middleware/logger.js'
import cors from 'cors'

const server = express()
const port = 3000

server.use(cors())
server.use(express.json())
server.use(loggerMiddleware)

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
