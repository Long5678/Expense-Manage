import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Main_context } from "../../../context/main_context";
import { useDispatch } from "react-redux";
import { handleEditDanhMuc } from "../../../redux/action_thunk";
import Button from '@mui/material/Button';

function Form_Editloai() {
    let dispatch = useDispatch();
    // const [isPopupVisible, setPopupVisible] = useState(false); // state này để ẩn hiện popup khi click vào thêm mới
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    let { userToken, isEditPopupVisible, setEditPopupVisible , handleEditPopup } = useContext(Main_context);  //2 tham số đó lấy từ file main_context
    

    function handleEditLoai(data) {
        console.log(data.name, userToken.id);
        dispatch(handleEditDanhMuc({ newData: data }));

        // dispatch là gửi đi 1 action
        setEditPopupVisible(false)
        // cho cái popup ẩn đi
        
    }


    return <>

        <div className={`box-popop ${isEditPopupVisible ? 'showPopup' : 'nonePopup'}`}>
            <form onSubmit={handleSubmit(handleEditLoai)}>
                <div className="mb-3">
                    <input  type="text" {...register("name")}  className="form-control" placeholder='Edit expense type' />
                </div>

                <input type="submit" className="btn btn-primary" />
            </form>
        </div>

        <Button onClick={handleEditPopup} variant="contained">Edit</Button>

    </>
}

export default Form_Editloai