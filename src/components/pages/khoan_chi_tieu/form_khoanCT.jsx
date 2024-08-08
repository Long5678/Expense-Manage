import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Main_context } from "../../../context/main_context";
import { useDispatch, useSelector } from "react-redux";
import { handleAddChiTieu } from "../../../redux/action_thunk";
import Button from '@mui/material/Button';

function Form_khoanCT() {
    let dispatch = useDispatch();
    let chitieuData = useSelector((state) => state.danhmuc.danhmucDatas);
    const { register, handleSubmit, watch, formState: {errors} } = useForm();
    let { userToken, isPopupVisible, setPopupVisible, handlePopup } = useContext(Main_context);

    let datas = chitieuData.map((item, index) => {
        return <option key={index} value={item.id}>{item.name}</option>
    });

    function handleAdd(data) {
        console.log(data.name, userToken.id);
        dispatch(handleAddChiTieu(data.name, data.price, data.mota, data.ngaythang, data.name_dm, userToken.id));
        setPopupVisible(false);
    }

    return (
        <>
            <h2>Expenditures</h2>

            <div className={`box-popop ${isPopupVisible ? 'showPopup' : 'nonePopup'}`}>
                <form onSubmit={handleSubmit(handleAdd)}>
                    <div className="mb-3">
                        <label className="form-label">Expense</label>
                        <input type="text" className="form-control" {...register("name")} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Amount of money</label>
                        <input type="text" className="form-control" {...register("price")} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Date</label>
                        <input type="text" className="form-control" {...register("ngaythang")} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input type="text" className="form-control" {...register("mota")} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Type of Spending</label>
                        <select className="form-select" aria-label="Default select example" {...register("name_dm")}>
                            {datas}
                            {/* <option value="Hóa đơn">Hóa đơn</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Ăn uống">Ăn uống</option> */}
                        </select>
                    </div>
                    <input type="submit" className="btn btn-primary mb-3" value="Submit" />
                </form>
            </div>

            <Button onClick={handlePopup} variant="contained">Add</Button>
        </>
    );
}

export default Form_khoanCT;
