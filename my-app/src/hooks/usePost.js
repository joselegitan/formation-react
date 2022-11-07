import {useCallback, useState} from "react";
import axios from "axios";

export default function () {
  const [data, setData] = useState()
  const [loading, setLoading] = useState()

  const fetchData = useCallback(() => {
    axios.get('')
  }, [])

  return {
    data,
    loading
  }
}