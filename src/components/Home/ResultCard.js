import React from 'react'
import { BsPlusSquare, BsClock, BsStar } from 'react-icons/bs'
import { Link } from 'react-router-dom';
const ResultCard = props => {
    console.log(props);
    console.log();
    return (
        <div className=''>
            <Link to={`show/${props.props.show.id}`}>
                <img src={props.props.show.image.medium} alt="" className='w-full' />
            </Link>
            <div className="flex justify-between items-center p-5 bg-gray-900 text-white">
                <div>
                    <h1 className='text-xl font-semibold'>
                        {props.props.show.name}
                    </h1>
                    <div className="flex justify-between gap-3 mt-1">
                        <div className='flex items-center gap-1 text-sm'>
                            <BsClock />{props.props.show.averageRuntime}Hours
                        </div>
                        <div className='flex items-center gap-1 text-sm'>
                            <BsStar />{(props.props.score * 10).toFixed(1)}/10
                        </div>
                   </div>
                </div>
                <div>
                    <BsPlusSquare />
                </div>
            </div>
        </div>
    )
}

export default ResultCard