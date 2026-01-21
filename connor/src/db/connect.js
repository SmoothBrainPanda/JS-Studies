import { Client } from "pg";
import "dotenv/config";

async function connect() {
	const client = new Client({
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		database: process.env.DB_NAME,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD
	})

	try {
		await client.connect();
		console.log('Database connected successfully.')
	} catch (e) {
		console.error('Connection error: ', e)
	}

	return client
}

export default connect
