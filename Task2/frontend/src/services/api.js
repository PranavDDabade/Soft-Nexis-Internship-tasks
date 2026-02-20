import axios from 'axios';

const api = axios.create({
    baseURL : 'http://localhost:5000/api', // Adjust the base URL as needed
})

export const fetchProducts = () => api.get('/products');
                export const createProduct = (prodcut)  =>api.post('/products', prodcut);
export const updateProduct = (id, product) =>api.put(`/products/${id}`, product);
export const deleteProduct = (id) => api.delete(`/products/${id}`);