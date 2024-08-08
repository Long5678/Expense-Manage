import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Main_context } from "../../../context/main_context";
import { useDispatch } from "react-redux";
import { handleAddDanhmuc } from "../../../redux/action_thunk";
import Button from '@mui/material/Button';

function Form_loai() {
    let dispatch = useDispatch();
    // const [isPopupVisible, setPopupVisible] = useState(false); // state này để ẩn hiện popup khi click vào thêm mới
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    let { userToken, isPopupVisible, setPopupVisible , handlePopup } = useContext(Main_context);  //2 tham số đó lấy từ file main_context
    

    function handleAddLoai(data) {
        console.log(data.name, userToken.id);
        dispatch(handleAddDanhmuc(data.name, userToken.id))
        // dispatch là gửi đi 1 action
        setPopupVisible(false)
        // cho cái popup ẩn đi
        
    }


    return <>
        <h2>Type of Spending</h2>

        <div className={`box-popop ${isPopupVisible ? 'showPopup' : 'nonePopup'}`}>
            <form onSubmit={handleSubmit(handleAddLoai)}>
                <div className="mb-3">
                    <input  type="text" {...register("name")}  className="form-control" placeholder='Add expense type' />
                </div>

                <input type="submit" className="btn btn-primary" />
            </form>
        </div>

        <Button onClick={handlePopup} variant="contained">Add Budget</Button>
    </>
}

export default Form_loai