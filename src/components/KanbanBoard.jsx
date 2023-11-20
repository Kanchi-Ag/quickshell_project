import React from 'react';

const KanbanBoard = ({ tickets, grouping, sorting }) => {
  const groupByStatus = () => {
    const grouped = {};
    tickets.forEach((ticket) => {
      const status = ticket.status;
      if (!grouped[status]) {
        grouped[status] = [];
      }
      grouped[status].push(ticket);
    });
    return formatGrouped(grouped, 'Status');
  };

  const groupByUser = () => {
    const grouped = {};
    tickets.forEach((ticket) => {
      const user = ticket.assigned_user;
      if (!grouped[user]) {
        grouped[user] = [];
      }
      grouped[user].push(ticket);
    });
    return formatGrouped(grouped, 'User');
  };

  const groupByPriority = () => {
    const grouped = {};
    tickets.forEach((ticket) => {
      const priority = ticket.priority;
      if (!grouped[priority]) {
        grouped[priority] = [];
      }
      grouped[priority].push(ticket);
    });
    return formatGrouped(grouped, 'Priority');
  };

  const formatGrouped = (grouped, groupName) => {
    return Object.keys(grouped).map((key) => ({
      key,
      name: key || 'No ' + groupName,
      tickets: grouped[key],
    }));
  };

  const sortByTitle = () => {
    return tickets.slice().sort((a, b) => a.title.localeCompare(b.title));
  };

  const sortByPriority = () => {
    return tickets.slice().sort((a, b) => b.priority - a.priority);
  };

  const getGroupedTickets = () => {
    switch (grouping) {
      case 'user':
        return groupByUser();
      case 'priority':
        return groupByPriority();
      default:
        return groupByStatus();
    }
  };

  const getSortedTickets = () => {
    switch (sorting) {
      case 'title':
        return sortByTitle();
      default:
        return sortByPriority();
    }
  };

  return (
    <div className="kanban-board">
      {getGroupedTickets().map((group) => (
        <div key={group.key} className="kanban-column">
          <h3>{group.name}</h3>
          {getSortedTickets().map((ticket) => (
            <div key={ticket.id} className="kanban-card">
              <p>{ticket.title}</p>
              <p>{ticket.priority}</p>
              {/* Add more ticket details as needed */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
