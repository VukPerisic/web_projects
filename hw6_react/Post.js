const Post = ({ title, body }) => {
  return <div style={{ textAlign: 'left', marginBottom: '12px'}}>
    <h3>
      {title}
    </h3>
    <p>{body}</p>
    <div>
      <input type="text" placeholder="comment" />
    </div>
    <button>post comment</button>
  </div>
}

export default Post;
