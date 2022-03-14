import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { buildStyles, CircularProgressbar} from '@hollyhoesisme/react-circular-progressbar';
import { MdPlayCircleOutline } from 'react-icons/md'
import { BsStar, BsDisplay } from 'react-icons/bs'
const ShowDetail = () => {
    const { id } = useParams();
    const [show, setShow] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then(res => res.json())
            .then(data => setShow(data));
        setLoading(false)
    }, [])

    const loading = <div className='bg-black text-white'>
        loading
    </div>

    const genre = show?.genres?.map((item, idx) => <div key={idx} className="border rounded-xl px-2 py-1 w-min">{item}</div>);

    const content = <div className='bg-black'>
        <div className="flex gap-2 flex-col md:flex-row items-center">
            <div className='md:w-3/6'>
                <img src={show?.image?.original} alt={show?.name} className='w-full'/>
            </div>
            <div className="w-full md:pl-16 mt-10 md:mt-0">
                <div className="flex gap-2 mb-5"> {genre}</div>
                <h1 className='text-2xl font-semibold mb-3'>{show?.name}</h1>
                <div className='w-5/6' dangerouslySetInnerHTML={{ __html: `${show?.summary}` }}></div>
                <div className="flex items-center gap-3 mt-3">
                    <div className='flex gap-1 items-center'><BsStar />{show?.rating?.average}</div>
                    <div className='flex gap-1 items-center'><BsDisplay />{show?.premiered}</div>
                </div>

            </div>
         
            <a href={`${show?.officialSite}`} target="_blank" className='text-3xl'><MdPlayCircleOutline/></a>
      
        </div>
    </div>

    return (
        <div className='bg-black text-white w-5/6 mx-auto flex items-center py-10 md:h-screen'>
            {isLoading ? loading : content}
        </div>
    )
}

export default ShowDetail