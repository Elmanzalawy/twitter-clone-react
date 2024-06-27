import axios from "axios";

const intance = axios.create({
    baseURL: 'https://troll-arriving-vertically.ngrok-free.app/api'
});

export default intance;