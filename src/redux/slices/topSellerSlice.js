import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const initialState = {
topSellers:[],
selectedTopSellers: null,
}


export const fetchTopSellers = createAsyncThunk("fetchTopSellers", async (params) => {
  /*   console.log("params55") */
    const response = await axios("https://62ceb596826a88972d016070.mockapi.io/sellers")
/*    console.log(response?.data);  */
  
    return response?.data
})


const topSellersSlice = createSlice({
    name: "topSellers",
    initialState,
    reducers: {
        setSelectedTopSellers(state, actions) {
            state.selectedApplication = actions?.payload
        }
    },
    extraReducers: (builder) => {

        // ###############  all TopSellers
        builder.addCase(fetchTopSellers.pending, (state, actions) => {
            state.loading = true
        })
        builder.addCase(fetchTopSellers.fulfilled, (state, actions) => {
    /*      console.log("TopSellers", actions?.payload) */
            // state.filteredTopSellers = actions?.payload?.TopSellersByIntern;
            state.topSellers = actions?.payload
        
            state.loading = false
        })
        builder.addCase(fetchTopSellers.rejected, (state, actions) => {
        console.log("rejected TopSellers: " + actions.payload)
            console.log("rejected TopSellers: ", (actions))
            state.loading = false;
            state.error = JSON.stringify(actions.error);
        })

    }
})

export const { fetchAcceptedTopSellers, setSelectedTopSellers } = topSellersSlice.actions
export default topSellersSlice.reducer