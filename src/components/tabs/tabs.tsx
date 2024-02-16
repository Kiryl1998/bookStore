import styleTabs from './tabs.module.css'

const Tabs=()=>{
  return(
    <div className={styleTabs.tabs}>
      <ul className={styleTabs.item}>
        <li className={styleTabs.itemList}>Description</li>
        <li className={styleTabs.itemList}>Authors</li>
        <li className={styleTabs.itemList}>Reviews</li>
      </ul>
    </div>
  )
}
export default Tabs