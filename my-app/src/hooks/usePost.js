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

    console.lo('response', )

    setData((prev) => [
      ...(prev || []),
      ...response.data.slice(skip * 5, (skip * 5) +5).filter((e) => (prev || []).findIndex((a) => a.id === e.id) < 0)
    ])
  }, [])

  useEffect(() => {
    (async () => await fetchData())()
  }, [])

  const fetchMore = async () => {
    console.log('cool')
    setSkip((prev) => prev + 1)

    console.log('skip', skip)
    await fetchData()
  }

  return {
    data,
    loading,
    fetchMore,
  }
}