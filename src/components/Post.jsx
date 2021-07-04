import React from 'react';
import { RichText } from 'prismic-reactjs'
import { Link } from "gatsby"

const Post = ({data}) => {
    return (
        <Link to={data.node.url} className="post py-4 flex flex-wrap justify-between border-b border-gray-200">
            <p className="font-recoleta text-xl">{RichText.asText(data.node.data.title)}</p>
            <p>{data.node.first_publication_date}</p>      
            <div className="tags flex items-center w-full mt-4">
            {data.node.tags.map(node => {
                const tagData = node
                return (
                    <div className="tag text-sm mr-2 text-gray-400">{tagData}</div>
                )
            })}              
            </div>
        </Link>
    );
}

export default Post;
