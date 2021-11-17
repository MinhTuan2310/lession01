import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useParams, useRouteMatch} from "react-router-dom";

DetailPage.propTypes = {
  
};

function DetailPage(props) {
    const {postId} = useParams();
    const [post, setPost] = useState({})
    //base url
    const baseUrl = `https://js-post-api.herokuapp.com/api/posts/${postId}`;

    useEffect(() => {
        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                setPost(data);
            })
    }, [])
  
  return (
    <div>
        <p>{post.title}</p>
        <p>{post.author}</p>
    </div>
  );
}

export default DetailPage;