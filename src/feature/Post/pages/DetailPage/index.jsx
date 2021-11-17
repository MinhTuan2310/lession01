import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams, useRouteMatch } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import './styles.css'

DetailPage.propTypes = {};

function DetailPage(props) {
  dayjs.extend(relativeTime);

  const { postId } = useParams();
  const [post, setPost] = useState({});
  //base url
  const baseUrl = `https://js-post-api.herokuapp.com/api/posts/${postId}`;

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      });
  }, []);

  return (
    <div className="container">
      <div className="detail-page">
        <h1>detail page</h1>
        <h2>{post.title}</h2>
        <span>{post.author + " - "}</span>
        <span>{dayjs(post.updatedAt).toNow()}</span>
        <img src={post.imageUrl} alt="123"></img>
        <p>{post.description}</p>
      </div>
    </div>
  );
}

export default DetailPage;
