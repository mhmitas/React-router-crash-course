import React, { useEffect, useState } from 'react';

const Github = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/mhmitas')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data)
            })
    }, [])

    return (
        <div className='bg-[#292929] text-center p-10 text-white'>
            <h3 className='text-xl font-semibold p-4 m-4'>Github followers: {data.followers}</h3>
            <img className='w-96 rounded-xl mx-auto' src={data.avatar_url} alt="git pic" />
        </div>
    );
};

export default Github;