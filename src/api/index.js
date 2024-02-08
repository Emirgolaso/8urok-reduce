import axios from "axios";

const endpoint = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,

});

const getBooks = () => endpoint.get('/books');
const getCartItems = () => endpoint.get('/CartItems');

const addCartItems = (payload) => endpoint.post('/CartItems',payload);
const deleteCartItems = (payload) => endpoint.delete(`/CartItems/${payload.id}`);
const editCartItems = (payload) => endpoint.put(`/CartItems/${payload.id}`,payload);

const api ={
    getBooks,
    getCartItems,
    addCartItems,
    deleteCartItems,
    editCartItems,
}

export default api;

