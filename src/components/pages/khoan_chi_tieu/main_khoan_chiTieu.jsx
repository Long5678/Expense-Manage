import Form_khoanCT from "./form_khoanCT"
import List_khoanCT from "./list_khoanCT"
import { useDispatch } from "react-redux"
import { handleLoadchiTieu } from "../../../redux/action_thunk"
import { handleLoadDanhmuc } from "../../../redux/action_thunk"
import { Main_context } from "../../../context/main_context"
import { useContext ,useEffect } from "react"


function Main_khoan_chiTieu() {
  let dispatch = useDispatch();
  let {userToken} = useContext(Main_context)

  useEffect(() => {
    if(userToken.id){
      const fetchData = async() => {
        try {
          await dispatch(handleLoadchiTieu(userToken.id));
          await dispatch(handleLoadDanhmuc(userToken.id));
        } catch (error) {
          console.log("Error dispatching actions:", error);
          
        }
      };
      fetchData();
    }
  }), [userToken.id]
  return <>
      <div className='container-main'>
          <Form_khoanCT />
          <List_khoanCT />
     </div>
  </>
}

export default Main_khoan_chiTieu