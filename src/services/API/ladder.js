import axios from 'axios';

export const getAllLadder = async () => {
    try {
        return await axios.get("/api/v1/ladder/all");
    } catch (error) {
        return error.response;
    }
}