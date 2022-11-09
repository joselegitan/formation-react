import {DataContext} from "../contexts/data";
import {useContext} from "react";


const Hook1 = () => {
  const { fethMore, data, loading, setData } = useContext(DataContext)

  const func1 (updatedData) {
    //je process de la data

    setData(...)
  }

  return
}

