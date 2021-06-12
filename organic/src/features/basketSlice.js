import {createSlice} from '@reduxjs/toolkit'

const basketSlice = createSlice({
    name:'basket',
    initialState:[],
  
    reducers:{
        saveTodo:(state,{payload})=>{
            state.push(payload)
                },
            
         del:(state,action)=>{
            const index = state.findIndex(item => item.id === action.payload.id);
            return state.filter((_, i) => i !== index);
             
            


         }  
        } 
            
        
})
export const {saveTodo,del}= basketSlice.actions
export const selectBasket = (state) => state.basket
export default basketSlice.reducer