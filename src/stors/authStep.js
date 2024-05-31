import { defineStore } from 'pinia'
import  axios  from '../lib/axios'
export const useAuthForom = defineStore('authforom', {
  
    state: () => ({
        admin:[],
    }),
    getters: {
        getAdmin(state){
            return state.admin
        }
    },
    actions:{
        async adminExistence(data) {
            try {
              await axios.post('/auth/login', data);
            } 
            catch (error) {
              console.error('Error submitting form data:', error);
              throw error;
            }
          },
        
    }
})