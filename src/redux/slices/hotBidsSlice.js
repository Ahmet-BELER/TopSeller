import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const initialState = {
hotBids:[],
selectedHotBids: null,
}


export const fetchHotBids = createAsyncThunk("fetchHotBids", async (params) => {

    const response = await axios("https://62ceb596826a88972d016070.mockapi.io/bids")
    // console.log(response);
    return response?.data
})


const hotBidsSlice = createSlice({
    name: "hotBids",
    initialState,
    reducers: {
        setSelectedHotBids(state, actions) {
            state.selectedApplication = actions?.payload
        }
    },
    extraReducers: (builder) => {

        // ###############  all hotBids
        builder.addCase(fetchHotBids.pending, (state, actions) => {
            state.loading = true
        })
        builder.addCase(fetchHotBids.fulfilled, (state, actions) => {
            // console.log("hotBids", actions?.payload?.hotBidsByIntern)
            // state.filteredhotBids = actions?.payload?.hotBidsByIntern;
            state.hotBids = actions?.payload
        
            state.loading = false
        })
        builder.addCase(fetchHotBids.rejected, (state, actions) => {
            // console.log("rejected hotBids: " + actions.payload)
            console.log("rejected hotBids: ", (actions))
            state.loading = false;
            state.error = JSON.stringify(actions.error);
        })

    }
})

export const { fetchAcceptedhotBids, setSelectedHotBids } = hotBidsSlice.actions
export default hotBidsSlice.reducer