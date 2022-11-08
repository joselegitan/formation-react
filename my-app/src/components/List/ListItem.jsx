import {useState} from "react";
import chevron from '../SideBar/chevron.png'
import './List.css'

const ListItem = ({ icon, label, children }) => {
  const [isOpen, setOpen] = useState(false)

  const onClick = () => {
    setOpen((prev) => !prev)
  }

  const hasChildren = children && children.length > 0

  const mode = isOpen ? 'light' : 'dark'


  return (
    <li>
      <div className={'listitem'}>
        <img src={icon} alt={label} className={'icon'}/>
        <p>{label}</p>
        {hasChildren && (
          <button onClick={onClick} className={'collapse'}>
            <img src={chevron} alt={'open-close'} className={`icon ${!isOpen ? 'icon-list-open' : 'icon-list-close'}` }/>
          </button>
        )}
      </div>
      {hasChildren && isOpen
        ? (
          <ul>
            {children.map((element, index) => (
              <ListItem key={`${label}-${element.label}-${index}`} {...element} />
            ))}
          </ul>
        )
        : null
      }
    </li>
  )
}

export default ListItem