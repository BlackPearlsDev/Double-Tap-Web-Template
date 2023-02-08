import axios from 'axios';

export const getAllPlayers = async (account, id) => {
    try {
        return await axios.get(`/api/v1/user/players/${account}/${id}`);
    } catch (error) {
        return error.response;
    }
}