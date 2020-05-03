import React from 'react';
import { Link } from "gatsby"
import styled from 'styled-components';
import { breakpointFrom, breakpointTo, breakpoints } from '../components/global/StyledBreakpoints';

const Post = () => {
    return (
        <PostWrapper to="/post/hah">
            <PostTitle>Title</PostTitle>
            Date
        </PostWrapper>
    );
}

export default Post;

// Styles
const PostWrapper = styled(props => <Link {...props} />)`
    display: flex;
    text-decoration:none;
    color:var(--primaryColor);
    &:hover{
        text-decoration:none;
        color:var(--primaryColor);
    }
`

const PostTitle = styled.div`
    flex-grow:1;
`