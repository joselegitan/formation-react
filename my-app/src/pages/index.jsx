import MainForm from "../components/business/MainForm/MainForm";
import {useState} from "react";
import MainFormVisualizer from "../components/business/MainFormVisualizer/MainFormVisualizer";
import ReactHookForm from "../components/business/ReactHookForm/ReactHookForm";
import usePosts from "../hooks/usePost";
import {CircularProgress} from "@mui/material";

function HomePage() {
  const [formData, setData] = useState({})
  const { data, loading, fetchMore } = usePosts()
  const [dataHook, setDataHook] = useState({ multiple: [], name: '', lover: true })

  const onSubmit = (formValue) => {
    setData(formValue)
  }
  const onSubmitHook = (formValue) => {
    setDataHook((prev) => ({ ...prev, ...formValue }))
  }

  const multipleOptions = data.map((e) => ({
    value: e.id, label: e.body.slice(0, 30)
  }))

  const selectedMultipleOptions = multipleOptions.filter((e) =>
    (data?.multiple || []).includes(e.value)
  ).map((e) => e.label)


  if (loading) return (
    <CircularProgress />
  )

  return (
    <main>
      <div className={'HomePage-layout'}>
        <MainForm
          multipleOptions={multipleOptions}
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
  );
}

export default HomePage;
