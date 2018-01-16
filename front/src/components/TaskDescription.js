import React from 'react';

// ['チーム開発を円滑に進めるためにGitは超重要です。', <br />, '覚えましょう']
function breakDescription (description) {
  const result = [];

  description.split('\n').forEach((element) => {
    result.push(element);
    result.push(<br />);
  });

  return result;
}

const TaskDescription = ({description}) => (
  <p>{breakDescription(description)}</p>
);

export default TaskDescription;
