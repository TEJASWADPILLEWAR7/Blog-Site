import React from 'react'
import { Link } from 'react-router-dom'
import appwriteService from "../appwrite/config.js"

function PostCard({
    $id,
    title,
    freaturedImage
}) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <img src={appwriteService.getFilePreview(freaturedImage)} alt={title}
                        className='rounded-xl'
                    />
                </div>
                <div className='text-lg font-bold'>{title}</div>
            </div>
        </Link>
    )
}

export default PostCard