import chevron from './chevron.png'

export const listitems = ({ children }) => <li>{children}</li>

export const CheckBox = ({ onChange, name, checked, value }) => (
  <input type="checkbox" name={name} value={value} onChange={onChange} checked={checked} />
)

export const Collapser = ({ onClick, open }) => (
  <button onClick={onClick}>
    <img src={chevron} className={`icon ${open ? 'icon-open' : 'icon-close'}`} alt={'open-close'} />
  </button>
)