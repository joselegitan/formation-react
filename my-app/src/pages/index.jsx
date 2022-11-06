import MainForm from "../components/business/MainForm/MainForm";
import {useState} from "react";
import MainFormVisualizer from "../components/business/MainFormVisualizer/MainFormVisualizer";
import ReactHookForm from "../components/business/ReactHookForm/ReactHookForm";

function HomePage() {
  const [data, setData] = useState({})
  const [dataHook, setDataHook] = useState({ multiple: [], name: '', lover: true })

  const onSubmit = (formValue) => {
    setData(formValue)
  }
  const onSubmitHook = (formValue) => {
    setDataHook((prev) => ({ ...prev, ...formValue }))
  }

  const multipleOptions = [
    { value: '1', label: 'Choix 1' },
    { value: '2', label: 'Choix 2' },
    { value: '3', label: 'Choix 3' },
  ]
  const selectedMultipleOptions = multipleOptions.filter((e) =>
    (data?.multiple || []).includes(e.value)
  ).map((e) => e.label)

  return (
    <main>
      <div className={'HomePage-layout'}>
        <MainForm
          multipleOptions={multipleOptions}
          onComplete={onSubmit}
        />
        {JSON.stringify(data) !== '{}' && (
          <MainFormVisualizer
            data={{
              ...data,
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
