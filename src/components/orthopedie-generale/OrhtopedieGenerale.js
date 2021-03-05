// import styles from './OrthopedieGenerale.module.scss'
import SubList from '../sub-list/SubList';
import Banner from '../ui components/banner/Banner'
import ItemCard from './itemCard/ItemCard';
import RdvCard from './rdvCard/RdvCard';

import items from "../../json/orthopedie-generale/orthopedie-generale.json";

const OrthopedieGenerale = ({match}) => {
  
  return (
    <div>
      <Banner match={match}/>
      <SubList match={match}/>
      {items.items.map((item, i) => <ItemCard key={i} data={item}/>)}
      <RdvCard/>
    </div>
  )  
}

export default OrthopedieGenerale