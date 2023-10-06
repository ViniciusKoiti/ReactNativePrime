import axios from 'axios';

const BASE_URL = 'https://prime-number-api.onrender.com'; // Substitua pelo URL da sua API real

const PrimeNumberController = {
    isPrimeNumber: async (number) => {
        try {
            const response = await axios.get(`${BASE_URL}/checkIfPrime/?num=${number}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default PrimeNumberController;