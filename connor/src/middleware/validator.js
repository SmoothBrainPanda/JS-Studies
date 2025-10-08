import * as z from 'zod'

const request = z.object({
	a: z.string(),
	b: z.number(),
	c: z.boolean(),
	d: z.string().length(10)
})

export function validator(req, res, next) {
	try {
		request.parse(req.body)
		next()
	} catch (e) {
		const errorList = []
		if (e instanceof z.ZodError) {
			e.issues.map((x) => {
				const error = `input: ${x.path} | message: ${x.message}`
				errorList.push(error)
			})
		}

		res.send({
			sadTrumpet: 'whomp whomp',
			errors: errorList
		})
	}
}
