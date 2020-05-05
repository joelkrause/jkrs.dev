import React from 'react';
import { Link } from "gatsby"
import styled from 'styled-components';
import { breakpointFrom, breakpointTo, breakpoints } from '../components/global/StyledBreakpoints';

const Post = ({data}) => {
    return (
        <PostWrapper to={data.path}>
            <PostTitle>{data.title}</PostTitle>
            <PostDate>{data.date}</PostDate>
        </PostWrapper>
    );
}

export default Post;

// Styles
const PostWrapper = styled(props => <Link {...props} />)`
    padding:1rem 0;
    margin:0 0 1rem;
    display:block;
    text-decoration:none;
    color:var(--primaryColor);
    &:not(:last-of-type){
        border-bottom:1px solid #ccc;
    }
    &:hover{
        text-decoration:none;
        color:var(--primaryColor);
    }
    ${breakpointFrom.tabletLandscape`
        width:50vw;
	`}
`

const PostTitle = styled.div`
    flex-grow:1;
`
const PostDate = styled.div`
    color:#999;
    font-size:0.875rem;
`