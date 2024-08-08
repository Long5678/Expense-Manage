import { useForm } from "react-hook-form"
import { handleAddNgansach } from "../../../redux/action_thunk"
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { Main_context } from "../../../context/main_context";
import { selectTotalBudget } from "../../../redux/ngansach_slice";

function Form_nganSach() {
    // đoạn này để mình lấy list của danh mục đưa vào form ngân sách
    let dispatch = useDispatch();
    let { userToken } = useContext(Main_context);  // lấy id người dùng ở context
    let danhmucData = useSelector((state) => state.danhmuc.danhmucDatas);  // nó sẽ lấy được cải mảng danhmucDatas nằm trong danhmuc_slice.js
    let totalBudget = useSelector(selectTotalBudget)
    const { register, handleSubmit, formState: { errors }, } = useForm();
    let datas = danhmucData.map((item, index) => {
        return <option key={index} value={item.name}>{item.name}</option>
    })
    // 

    function handleGetValueNgansach(data) {
      console.log(data);
      console.log(userToken.id);
      dispatch(handleAddNgansach(data.price, data.name_ngansach, userToken.id)); 
        // lấy dữ liệu dispath đếnhandleAddNgansach ở action_thunk
      
    }

    return <>
        <div className="box-nganSach">
            <h2>Budget</h2>
            <h3>Total Budget (${totalBudget})</h3>
        </div>

        <div>
            <form onSubmit={handleSubmit(handleGetValueNgansach)}>
                <div className="mb-3">
                    <label className="form-label">Budget amount</label>
                    <input type="number" {...register("price")} className="form-control" id="exampleFormControlInput1" placeholder="$" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Type of spending</label>
                    <select className="form-select" aria-label="Default select example"  {...register("name_ngansach")}>
                        {datas}
                        {/* <option value="Hóa đơn">Hóa đơn</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Ăn uống">Ăn uống</option> */}
                    </select>
                </div>
                <input type="submit" className="btn btn-primary mb-3" value="Submit" />
            </form>
        </div>
    </>
}

export default Form_nganSach