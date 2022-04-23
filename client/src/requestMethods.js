import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2YzNTQ5NThhNDc0MjUwYjQzYjA1YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDY1OTQ0MCwiZXhwIjoxNjUwOTE4NjQwfQ.cPJCV_MPmljVKzmKceEGKGhpxShkSix2Mrm2McWUIao"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token: `Bearer ${TOKEN}` }
});

