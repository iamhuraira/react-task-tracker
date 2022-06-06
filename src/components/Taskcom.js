import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Taskcom = ({ task, onDelete, ontoggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => ontoggle(task.id)}>
      <h3>
        {task.text}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Taskcom