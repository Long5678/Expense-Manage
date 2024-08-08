import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    ngansachDatas: [],
};


export const ngansachSlice = createSlice({
    name: "ngansach",
    initialState,
    reducers: {
        loadNgansach(state, action) {
            state.ngansachDatas = action.payload;
            // nó sẽ cập nhật trạng thái NgansachDatas theo dữ liệu được gửi đến qua action.
        },
        deleteNgansach(state, action) {
            state.ngansachDatas = state.ngansachDatas.filter((item) => {
                return item._id != action.payload  // lưu ý _id chỗ này
            })
            //cập nhật lại trạng thái todoData,
            // nó sẽ lọc ra tk có id khác với id đc gửi lên (action.payload)
        },


        // add
        addNgansach(state, action) {
            state.ngansachDatas.push(action.payload)
            // console.log(this.NgansachDatas);

        }
    },
});

// Selector to calculate total budget
export const selectTotalBudget = (state) => {
    return state.ngansach.ngansachDatas.reduce((total, item) => total + Number(item.price || 0), 0);
};

export const { addNgansach, loadNgansach, ngansachDatas, deleteNgansach } = ngansachSlice.actions;

export default ngansachSlice.reducer;

