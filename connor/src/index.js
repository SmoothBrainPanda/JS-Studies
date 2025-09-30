import http from "node:http"

const port = 3000

const server = http.createServer((req, res) => {
	const method = req.method

	if (method == 'GET') {
		res.end('GET route')
	} else if (method == 'POST') {
		res.end('POST route')
	} else if (method == 'PUT') {
		res.end('PUT route')
	} else if (method == 'DELETE') {
		res.end('DELETE route')
	} else {
		res.end(`You done fucked up with your ${method} method`)
	}
})

server.listen(port, () => {
	console.log(`Server running on port ${port}`)
})
