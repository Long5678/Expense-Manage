import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chitieuDatas: [],
};

export const chitieuSlice = createSlice({
    name: 'chitieu',
    initialState,
    reducers: {
        loadChiTieu(state, action){
            state.chitieuDatas = action.payload;
        },
        deleteChiTieu(state, action){
            state.chitieuDatas = state.chitieuDatas.filter((item) =>{
                return item.id !== action.payload;
            })
        },
        addChiTieu(state, action){
            state.chitieuDatas.push(action.payload);
        }
    },
});

export const {addChiTieu, loadChiTieu, chitieuDatas, deleteChiTieu} = chitieuSlice.actions