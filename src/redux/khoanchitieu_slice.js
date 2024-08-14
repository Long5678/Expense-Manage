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

export const selectTotalExpensesByCategory = (state) => {
    const grouped = state.chitieu.chitieuDatas.reduce((acc, item) => {
        acc[item.name_dm] = (acc[item.name_dm] || 0) + Number(item.price || 0);
        return acc;
    }, {});

    return Object.entries(grouped).map(([name_dm, total]) => ({
        name_dm,
        total,
    }));
};

export const {addChiTieu, loadChiTieu, chitieuDatas, deleteChiTieu} = chitieuSlice.actions