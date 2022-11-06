const required = (value) => !value && typeof value !== 'boolean' && 'Champs requis'

const regexNumber = /\d+/
const noNumber = (value) => (typeof value === 'string' && value.match(regexNumber)) && 'Pas de nombre'

export function mainFormValidation(data) {
  const validations = [
    {
      field: 'gender',
      validations: [required]
    },
    {
      field: 'name',
      validations: [required, noNumber]
    },
    {
      field: 'lover',
      validations: [required]
    },
  ]

  return validations.reduce((acc, validationField) => {
    const error = validationField.validations.reduce((err, validationFunction) => {
      if (!!err) return err
      return validationFunction(data[validationField.field])
    }, false)

    return {
      ...acc,
      ...(error && { [validationField.field]: error })
    }
  }, {})
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
