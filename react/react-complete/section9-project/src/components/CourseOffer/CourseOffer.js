import React from 'react';

const courseOffer = (props) =>(
<article className="Course" key={props.id} onClick={props.clicked}>{props.title}</article>
);

export default courseOffer;




