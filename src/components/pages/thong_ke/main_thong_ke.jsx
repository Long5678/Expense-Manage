import Bieu_do from "./bieu_do"
import Tk_tien from "./Tk_tien"
import List_thong_ke from "./list_thong_ke"
import { useDispatch } from "react-redux"
import { handleLoadchiTieu } from "../../../redux/action_thunk"
import { handleLoadDanhmuc } from "../../../redux/action_thunk"
import { Main_context } from "../../../context/main_context"
import { useContext ,useEffect } from "react"

function Main_thong_ke() {
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
      <Bieu_do />
      <Tk_tien />
      <List_thong_ke />
  </>
}

export default Main_thong_ke