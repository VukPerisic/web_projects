import {useState, useEffect} from 'react';
import axios from 'axios';

const Comment = () => {

    const [comments, setComments] = useState();

    const getData = () => {
        axios.get("http://localhost:3002/post/:id")
        .then( (data) => setComments(data.comments))
        .catch ( (error) => console.log(error));
    };

    return (
        <div>
            {
            comments? comments.map(d =>
          <Comment text = {d.text} />
        )
      : []}
        </div>
    )
};

export default Comment;
