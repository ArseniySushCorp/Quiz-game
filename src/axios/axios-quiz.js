import axios from 'axios'

export default axios.create({
	baseURL: 'https://react-quiz-8a657.firebaseio.com/'
})