import React, { useEffect, useState } from 'react'
import ResultCard from './ResultCard';

const Home = () => {
  const [show, setShow] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(res => res.json())
      .then(data => setShow(data));
    setLoading(false);
  }, [])
  const result = show.map(item => <ResultCard props={item} key={item.show.id}/>);
  const loading = <div className='text-white text-center'>
    <p>loading</p>
  </div>
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 lg-grid-cols-6 gap-5 w-5/6 mx-auto my-10'>
      {isLoading ? loading:result}
    </div>
  )
}

export default Home