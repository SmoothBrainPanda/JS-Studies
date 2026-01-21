import express from 'express'
import projectRouter from './projects/route.js'
import loggerMiddleware from './middleware/logger.js'
import cors from 'cors'
import connect from './db/connect.js'

const server = express()
const port = 3000

server.use(cors())
server.use(express.json())
server.use(loggerMiddleware)

const db = await connect()
const result = await db.query('SELECT NOW()');
console.log('Current time from DB:', result.rows[0]);

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
