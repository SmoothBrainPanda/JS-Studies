import quizData from './data/quizData.js'

class Quiz {
	constructor(data) {
		this.questionCount = data.questionCount
		this.playerCount = data.playerList.length
	}
}

class Answers extends Quiz {
	constructor(data) {
		super(data)
		this.answerSheetArray = data.playerList.map((x) => {
			return this.createAnswerSheet(x)
		})

		console.log(this.answerSheetArray);
	}

	createAnswerSheet(x) {
		return {
			player: x,
			score: 0
		}
	}

	answerQuestion(data) {
		data.map((x) => {
			this.answerSheetArray.find((y) => {
				if (y.player == x.player) {
					if (x.answer == true) y.score += 1
				}
			});
			this.getScores()
		})
	}

	getScores() {
		console.log(this.answerSheetArray);
	}
}

const data = {
	questionCount: 10,
	playerList: ['a', 'b']
}

const answers = new Answers(data)
answers.answerQuestion(quizData)
