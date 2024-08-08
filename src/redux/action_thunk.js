import axios from "axios";
import { addDanhmuc, loadDanhmuc, deleteDanhmuc, editDanhmuc } from "./danhmuc_slice";
import { addNgansach, loadNgansach, deleteNgansach } from "./ngansach_slice";
import { addChiTieu, loadChiTieu, deleteChiTieu } from "./khoanchitieu_slice";

export function handleAddDanhmuc(name, idUser) {
    return async (dispatch) => {
        try {
            let res = await axios.post("http://localhost:3000/danhmuc/create", {
                name: name,
                idUser: idUser
            })
            let _id = res.data.insertedId; // đây là _id mà mongodb trả về cho 1 đối tượng đc add vào

            dispatch(addDanhmuc({ _id, name, idUser }))
            console.log("add danh mục thành công");

        } catch (error) {
            console.log(error);

        }
    }
}

export function handleLoadDanhmuc(idUser) {
    return async (dispatch) => {
        try {
            let res = await axios.get(`http://localhost:3000/danhmuc/byIduser/${idUser}`)
            let data = res.data;
            // console.log(data);

            dispatch(loadDanhmuc(data))
        } catch (error) {
            console.log(error);

        }
    }
}

// export function handleEditDanhMuc(id){
//     return async (dispatch) => {
//         try {
//             let res = await axios.put(`http://localhost:3000/danhmuc/edit/${id}`);
//             let data = res.data;
//             dispatch(editDanhmuc(data))
//         } catch (error) {
//             console.log(error);
            
//         }
//     }
// }

export function handleDeleteDM(id) {
    return async (dispatch) => {
        try {

            let res = await axios.delete(`http://localhost:3000/danhmuc/del/${id}`)
            console.log("xóa thành công");
            dispatch(deleteDanhmuc(id))  // gửi 1 action deleteDanhmuc

        } catch (error) {
            console.log(error);

        }
    }
}


// action ngaan sach
export function handleAddNgansach(price, name_ngansach, idUser) {
    return async (dispatch) => {
        try {
            let res = await axios.post("http://localhost:3000/ngansach/create", {
                price: price,
                name_ngansach: name_ngansach,
                idUser: idUser
            })
            let _id = res.data.insertedId; // đây là _id mà mongodb trả về cho 1 đối tượng đc add vào

            dispatch(addNgansach({ _id, price, name_ngansach, idUser }))
            console.log("add danh mục thành công");

        } catch (error) {
            console.log(error);

        }
    }
}


export function handleLoadNgansach(idUser) {
    return async (dispatch) => {
        try {
            console.log(idUser);
            
            let res = await axios.get(`http://localhost:3000/ngansach/byIduser/${idUser}`)
            let data = res.data;
            
            console.log(data);

            dispatch(loadNgansach(data))
        } catch (error) {
            console.log(error);

        }
    }
}

export function handleDeleteNgansach(id){
    return async (dispatch) => {
        try {
            let res = await axios.delete(`http://localhost:3000/ngansach/del/${id}`)
            console.log("xóa thành công");
            dispatch(deleteNgansach(id))  // gửi 1 action deleteDanhmuc
        } catch (error) {
            console.log(error);
        }
    }
}

export function handleAddChiTieu(name, price, mota, ngaythang, iddm, idUser){
    return async(dispatch) =>{
        try {
            let res = await axios.post("http://localhost:3000/chiphi/create",{
                name: name,
                price: price,
                mota: mota,
                ngaythang: ngaythang,
                iddm: iddm,
                idUser: idUser,
            })
            let _id = res.data.insertedId;
            dispatch(addChiTieu({ _id, name, price, mota, ngaythang, iddm, idUser }))
        } catch (error) {
            console.log(error);
            
        }
    }
}

export function handleLoadchiTieu(idUser){
    return async (dispatch) => {
        try {
            console.log(idUser);
            
            let res = await axios.get(`http://localhost:3000/chiphi/byIduser/${idUser}`)
            let data = res.data;
            
            console.log(data);

            dispatch(loadChiTieu(data))
        } catch (error) {
            console.log(error);

        }
    }
}

export function handleDeleteChiTieu(id){
    return async (dispatch) => {
        try {
            let res = await axios.delete(`http://localhost:3000/chiphi/del/${id}`)
            console.log("xóa thành công");
            dispatch(deleteChiTieu(id))  // gửi 1 action deleteDanhmuc
        } catch (error) {
            console.log(error);
        }
    }
}