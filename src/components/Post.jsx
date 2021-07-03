import React from 'react';
import { RichText } from 'prismic-reactjs'
import { Link } from "gatsby"

const Post = ({data}) => {
    return (
        <Link to={data.node.url} className="post">
        <p>{RichText.asText(data.node.data.title)}</p>
        <p>{data.node.first_publication_date}</p>      
        <div className="tags flex items-center">
        {data.node.tags.map(node => {
            const tagData = node
            return (
                <div className="tag text-sm mr-2">{tagData}</div>
            )
        })}              
        </div>      
{/* {JSON.stringify(data.node.tags,null,2)} */}
        </Link>
    );
}

export default Post;
