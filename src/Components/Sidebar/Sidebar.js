import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
      <h2 className='sidebar__title'>Список записей:</h2>
      <ul className='sidebar__notsList list'>
        <li>
          <button className='sidebar__note button' >Запись 1</button>
        </li>
        <li>
          <button className='sidebar__note button'>Запись 2</button>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;
