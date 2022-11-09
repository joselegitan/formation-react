import MainForm from "../components/business/MainForm/MainForm";
import React, {useState} from "react";
import MainFormVisualizer from "../components/business/MainFormVisualizer/MainFormVisualizer";
import ReactHookForm from "../components/business/ReactHookForm/ReactHookForm";
import {CircularProgress} from "@mui/material";
import Header from "../components/business/Header/Header";
import Footer from "../components/business/Footer/Footer";
import ProductList from "../components/ui/ProductList/ProductList";
import {useData} from "../contexts/data";

function HomePage() {
  const [formData, setData] = useState({})
  const { data, loading, fetchMore, postData } = useData()
  const [dataHook, setDataHook] = useState({ multiple: [], name: '', lover: true })

  const onSubmit = async (formValue) => {
    const response = await postData(formValue)
    setData(response)
  }
  const onSubmitHook = (formValue) => {
    setDataHook((prev) => ({ ...prev, ...formValue }))
  }

  const multipleOptions = (data || []).map((e) => ({
    value: e.id, label: e.body.slice(0, 30)
  }))

  const selectedMultipleOptions = multipleOptions.filter((e) =>
    (formData?.multiple || []).includes(e.value)
  ).map((e) => e.label)

  if (loading) return (
    <CircularProgress />
  )

  return (
    <div className="App">
      <Header />
      <main>
        {loading
          ? <CircularProgress />
          : <ProductList />
        }
        <div className={'HomePage-layout'}>
          <MainForm
            multipleOptions={multipleOptions}
            loadingPost={loading}
            fetchMore={fetchMore}
            onComplete={onSubmit}
          />
          {JSON.stringify(formData) !== '{}' && (
            <MainFormVisualizer
              data={{
                ...formData,
                multiple: selectedMultipleOptions
              }}
            />
          )}
        </div>
        <div className={'HomePage-layout'}>
          <ReactHookForm onSubmit={onSubmitHook} />
          {JSON.stringify(dataHook) !== '{}' && (
            <MainFormVisualizer
              data={{
                ...dataHook,
              }}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
