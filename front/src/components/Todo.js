import React from 'react';

const Todo = ({completed, link, text, onClick}) => (
  <React.Fragment>
    <li><input type='checkbox' checked={completed} onChange={onClick} />
      {link ? <a href={link} >{ text }</a> : text }
    </li>
  </React.Fragment>
);

export default Todo;
