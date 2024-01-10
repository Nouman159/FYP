import axiosInstance from './axiosInstance';

const productService = {
    getAllProducts: async () => {
        try {
            const response = await axiosInstance.get('/products/get-all-products');
            return response.data;
        } catch (error) {
            console.error('Error fetching user:', error);
            throw error;
        }
    },
    getAllApprovedProducts: async () => {
        try {
            const response = await axiosInstance.get('/products/get-all-approved-products');
            return response.data;
        } catch (error) {
            console.error('Error fetching user:', error);
            throw error;
        }
    },
    getUserProducts: async () => {
        try {
            const response = await axiosInstance.get('/products/get-user-products');
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    loginUser: async (payload) => {
        try {
            const response = await axiosInstance.post('/products/register-product', payload);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default productService;