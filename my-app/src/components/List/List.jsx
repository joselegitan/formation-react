import icon1 from './icon1.png'
import icon2 from './icon2.png'
import ListItem from "./ListItem";

const List = () => {
  const data = [
    { icon: icon1, label: 'Label 1'},
    {
      icon: icon2,
      label: 'Label 2',
      children: [
        { icon: icon1, label: 'Enfant'},
        { icon: icon1, label: 'Enfant'}
      ]
    },
  ]

  return (
    <ul className={'list'}>
      {data.map((element, index) => (
        <ListItem key={index} {...element} />
      ))}
    </ul>
  )
}

export default List