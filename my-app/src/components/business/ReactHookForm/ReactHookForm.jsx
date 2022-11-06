import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Button from "../../ui/Button/Button";
import InitTab from "../MainForm/InitTab";
import Select from "../../ui/Select/Select";

const schema = yup.object({
  gender: yup.string().required(),
}).required();

function ReactHookForm({ onSubmit }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const options = [undefined, 'Homme', 'Femme', 'Autre'].map((e) => ({ value: e, label: e }))

  return (
    <form className="App-mainform" onSubmit={handleSubmit(onSubmit)}>
      <InitTab
        onClick={reset}
      />
      <Select
        {...register("gender")}
        label="Genre"
        className="Mainform-gender"
        options={options}
        error={errors?.gender?.message}
      />
      <Button
        type={'submit'}
      >
        Submit
      </Button>
    </form>
  );
}

export default ReactHookForm;
