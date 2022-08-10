import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeTabs: [],
}
export const Filter = createSlice({
    name: "filterDish",
    initialState,
    reducers:{
        setTagActive(state,action){
            const eleId = action.payload;
            const ele = document.getElementById(eleId);
            const activeStatus = ele.getAttribute("active");

            if(activeStatus === "1"){
                console.log("hello")
                ele.style.backgroundColor = "#F3F4F6";
                ele.style.color = "black";
                ele.setAttribute("active", "0");
                state.activeTabs = state.activeTabs.filter((item)=>(
                    (item !== ele.textContent)
                ))
            }
            if(activeStatus === "0"){
                console.log("hello2")
                ele.style.backgroundColor = "black";
                ele.style.color = "white";
                ele.setAttribute("active","1");
                state.activeTabs = [...state.activeTabs , ele.textContent];
            }
        console.log(state.activeTabs);
        },
    }
})

export const {setTagActive } = Filter.actions;
export default Filter.reducer;

