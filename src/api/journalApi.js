import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-journal-7d43a-default-rtdb.firebaseio.com'
})

export default journalApi