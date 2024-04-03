import React, { useEffect, useState } from 'react'

import NewCollections from '../Components/NewCollections/NewCollections'


import HomeBaner from '../Components/HomeBanner/Banner'

const Shop = () => {
  const apiUrl ="https://autopilot97-8dad7d99b556.herokuapp.com";

  const [newcollection, setNewCollection] = useState([]);

  const fetchInfo = () => { 
    fetch(apiUrl +'/newcollections') 
            .then((res) => res.json()) 
            .then((data) => setNewCollection(data))
    }

    useEffect(() => {
      fetchInfo();
    }, [])


  return (
    <div>
      <HomeBaner/>
      
      <NewCollections data={newcollection}/>
     
      
    </div>
  )
}

export default Shop
