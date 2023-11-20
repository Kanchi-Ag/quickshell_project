import React from 'react';
// import './DisplayOptions.css';

const DisplayOptions = ({ displayOption, sortOption, onDisplayOptionChange, onSortOptionChange ,sortByTitle,sortByPriority }) => {
  return (
    <div className="display-options">
      <button
        className={displayOption === 'status' ? 'active' : ''}
        onClick={() => onDisplayOptionChange('status')}
      >
        By Status
      </button>
      <button
        className={displayOption === 'user' ? 'active' : ''}
        onClick={() => onDisplayOptionChange('user')}
      >
        By User
      </button>
      <button
        className={displayOption === 'priority' ? 'active' : ''}
        onClick={() => onDisplayOptionChange('priority')}
      >
        By Priority
      </button>
      <div className="sort-options">
        <label>Sort By:</label>
        <select value={sortOption} onChange={(e) => onSortOptionChange(e.target.value)}>
          <option onClick={sortByPriority} value="priority">Priority</option>
          <option onClick={sortByTitle} value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default DisplayOptions;
