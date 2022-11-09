import {useCallback, useEffect, useState} from "react";
import axios from "axios";

export default function usePosts () {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)
  const [skip, setSkip] = useState(0)

  const fetchData = useCallback(async () => {
    setLoading(true)
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setLoading(false)

    setData((prev) => [
      ...(prev || []),
      ...response.data.slice(skip * 5, (skip * 5) +5).filter((e) => (prev || []).findIndex((a) => a.id === e.id) < 0)
    ])
    setSkip((prev) => prev + 1)
  }, [skip])

  useEffect(() => {
    (async () => await fetchData())()
  }, [])

  const fetchMore = async () => {
    await fetchData()
  }

  const postData = useCallback(async (formValue) => {
    setLoading(true)
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formValue)
    setLoading(false)
    setSkip(0)
    return response.data
  }, [])

  return {
    data,
    loading,
    fetchMore,
    postData
  }
}