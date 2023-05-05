import axios from "axios";
const API_URL_PROD = 'http://localhost:4000/products';

const productModule = {
    namespaced: true,


    state: {
        products: [],
    },

    getters: {
        numberOfProducts(state){
            return state.products.length;
        }
    },


    mutations: {
        getProducts(state, products){
            state.products = products;
        },

        addProduct(state, product){
            state.products.push(product);
        },

        updateProduct(state, product){
            const index = state.products.findIndex(i => i._id === product._id);
            if(index !== -1){
                state.products.splice(index, 1, product);
            }
        },

        deleteProduct(state, product){
            state.products = state.products.filter(prod => prod._id !== product);
        },


    },



    actions: {
        async getProducts( { commit } ){
            const response = await axios.get(API_URL_PROD);

            commit('getProducts', response.data);
        },

        async addProduct( { commit }, product){
            const response = await axios.post(API_URL_PROD, product);

            commit('addProduct', response)
        },

        async updateProduct( { commit }, product){
            const response = await axios.put(`${API_URL_PROD}/${product._id}`, product);

            commit('updateProduct', response.data);
        },

        async deleteProduct( { commit }, productId){
            await axios.delete(`${API_URL_PROD}/${productId}`);

            commit('deleteProduct', productId);
        },

    }
}


export default productModule;