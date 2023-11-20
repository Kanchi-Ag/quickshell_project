import React from 'react';

const Controls = ({ grouping, sorting, onGroupingChange, onSortingChange }) => {
  return (
    <div className="controls">
      <button onClick={() => onGroupingChange('status')} disabled={grouping === 'status'}>
        Group by Status
      </button>
      <button onClick={() => onGroupingChange('user')} disabled={grouping === 'user'}>
        Group by User
      </button>
      <button onClick={() => onGroupingChange('priority')} disabled={grouping === 'priority'}>
        Group by Priority
      </button>

      <button onClick={() => onSortingChange('priority')} disabled={sorting === 'priority'}>
        Sort by Priority
      </button>
      <button onClick={() => onSortingChange('title')} disabled={sorting === 'title'}>
        Sort by Title
      </button>
    </div>
  );
};

export default Controls;
