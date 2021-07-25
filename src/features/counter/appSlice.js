import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';



export const appSlice = createSlice({
  name: 'app',
  initialState:{
channelId:null,
channelName:null
  },

  reducers: {
    setChannelInfo: (state,action) => {
     
      state.channelId=action.payload.channelId;
      state.channelName=action.payload.channelName;
    },

   
    
  },
 
  
});

export const { setChannelInfo } = appSlice.actions;


export const selectChannelId = (state) => state.app.channelId;

export const selectChannelName=(state)=> state.app.channelName;


export default appSlice.reducer;
