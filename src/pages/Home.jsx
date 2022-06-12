import React from 'react'
import { useSelector } from 'react-redux';
import Header from '../components/Header'
import List from '../components/List'


const Home = () => {
  const user = useSelector((state) => state.auth);
  console.log(user);
  return (
    <div>
      <Header name={user.name}/>
        <List/>
    </div>
  )
}

export default Home