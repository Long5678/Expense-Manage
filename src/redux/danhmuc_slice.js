import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    danhmucDatas: [],
};


export const danhmucSlice = createSlice({
    name: "danhmuc",
    initialState,
    reducers: {
        loadDanhmuc(state, action) {
            state.danhmucDatas = action.payload;
            // nó sẽ cập nhật trạng thái danhmucDatas theo dữ liệu được gửi đến qua action.
        },
        deleteDanhmuc(state, action) {
            state.danhmucDatas = state.danhmucDatas.filter((item) => {
                return item._id != action.payload  // lưu ý _id chỗ này
            })
            //cập nhật lại trạng thái todoData,
            // nó sẽ lọc ra tk có id khác với id đc gửi lên (action.payload)
        },
        editDanhmuc(state, action) {
            const index = state.danhmucDatas.findIndex((item) => item._id === action.payload._id);
            if (index !== -1) {
                state.danhmucDatas[index] = action.payload;
            }
        },


        // add
        addDanhmuc(state, action) {
            state.danhmucDatas.push(action.payload)
            // console.log(this.danhmucDatas);
            
        }
    },
});

export const { addDanhmuc, loadDanhmuc, danhmucDatas, deleteDanhmuc, editDanhmuc } = danhmucSlice.actions;

