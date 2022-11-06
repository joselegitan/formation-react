import Button from "../../ui/Button/Button";

function InitTab({ onClick }) {
  const onInsideClick = (value) => (e) => {
    e.preventDefault()
    onClick(value)
  }

  return (
    <div className='Form-tab'>
      <Button onClick={onInsideClick({ gender: 'Homme', name: 'Homme cool', lover: true, multiple: ['1'] })}>
        Homme / Choix 1
      </Button>
      <Button onClick={onInsideClick({ gender: 'Femme', name: 'Femme coole', lover: true, multiple: ['2', '3'] })}>
        Femme / Choix 2 | 3
      </Button>
    </div>
  );
}

export default InitTab;
