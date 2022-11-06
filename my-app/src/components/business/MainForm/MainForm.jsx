import {useState} from "react";
import Select from "../../ui/Select/Select";
import TextField from "../../ui/TextField/TextField";
import {wait} from "../../../utils/helpers";
import Button from "../../ui/Button/Button";
import {getRandomInt} from "../../../utils/helpers";
import {mainFormValidation} from "../../../utils/validation";
import CheckboxGroup from "../../ui/CheckboxGroup/CheckboxGroup";
import InitTab from "./InitTab";

function MainForm({ multipleOptions, onComplete }) {
  const [formValue, setFormValue] = useState({})
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [globalError, setGlobalError] = useState(null)

  const onResetForm = (value) => {
    setFormValue(value)
    setErrors({})
    setGlobalError(null)
  }

  const onSelect = (name) => (e) => {
    if (formValue[name] !== e.target.value && !!errors[name]) {
      setErrors((prev) => {
        let updatedErrors = {...prev}
        delete updatedErrors[name]
        return updatedErrors
      })
    }

    setFormValue((prev) => ({ ...prev, [name]: e.target.value }))
  }

  const onChange = (name) => (value) => {
    if (formValue[name] !== value && !!errors[name]) {
      setErrors((prev) => {
        let updatedErrors = {...prev}
        delete updatedErrors[name]
        return updatedErrors
      })
    }

    setFormValue((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setGlobalError(null)
    setLoading(true)
    const validationErrors = mainFormValidation(formValue)

    if (JSON.stringify(validationErrors) === '{}') {
      await wait(3)
      const key = getRandomInt(2)

      if (key < 1) {
        setGlobalError('Erreur Server ')
      } else {
        alert(JSON.stringify(formValue))
        onComplete(formValue)
      }
    } else {
      setErrors(validationErrors)
    }

    setLoading(false)
  }

  const options = [undefined, 'Homme', 'Femme', 'Autre'].map((e) => ({ value: e, label: e }))
  const disabled = loading || JSON.stringify(errors) !== '{}'

  return (
    <form className="App-mainform" onSubmit={onSubmit}>
      <InitTab
        onClick={onResetForm}
      />
      {!!globalError && <p className={'Input-error'}><b>{globalError}</b></p>}
      <Select
        name="gender"
        label="Genre"
        className="Mainform-gender"
        value={formValue.gender}
        onChange={onSelect('gender')}
        options={options}
        error={errors.gender}
      />
      <TextField
        name="name"
        label="Nom"
        className="Mainform-name"
        value={formValue.name || ''}
        onChange={onChange('name')}
        error={errors.name}
      />
      <CheckboxGroup
        name="lover"
        label="Es-tu un kiffeur ?"
        value={formValue.lover}
        onChange={onChange('lover')}
        error={errors.lover}
        options={[
          { value: true, label: 'Oh Yeah' },
          { value: false, label: 'Oh No' },
        ]}
      />
      <CheckboxGroup
        name="multiple"
        label="Plusieurs choix ?"
        multiple
        value={formValue.multiple}
        onChange={onChange('multiple')}
        options={multipleOptions}
      />
      <Button
        type={'submit'}
        loading={loading}
        disabled={disabled}
      >
        Submit
      </Button>
    </form>
  );
}

export default MainForm;
