import chevron from './chevron.png'
import './Sidebar.css';
import List from "../List/List";
import {Collapser} from "../ui/uis";

const SideBar = (props) => {
  const { isOpen, onClick } = props

  const handleClick = () => {
    onClick(!isOpen)
  }

  return (
    <div className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-close'}`}>
      <div className={`sidebar-top`}>
        <Collapser onClick={handleClick} open={isOpen} />
      </div>
      <List />
    </div>
  )
}

export default SideBar