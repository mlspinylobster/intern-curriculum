import React from 'react';

const Todo = ({completed, link, text, onChange}) => (
  <React.Fragment>
    <li><input type='checkbox' checked={completed} onChange={onChange} />
      {link ? <a href={link} target='_blank'>{ text }</a> : text }
    </li>
  </React.Fragment>
);

export default Todo;
