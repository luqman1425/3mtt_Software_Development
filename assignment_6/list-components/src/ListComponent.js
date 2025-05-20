import React from 'react';

const ListComponent = ({ items, renderItem, emptyMessage = "No items to display." }) => {
  if (!items || items.length === 0) {
    return <div>{emptyMessage}</div>;
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={item.id || index}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
};

export default ListComponent;
