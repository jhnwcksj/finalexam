import React, { useState } from 'react';

const Filters = ({ items, isEditing, editIndex, handleAddItem, handleDeleteItem, handleEditItem, setIsEditing, setEditIndex }) => {
  const [newItem, setNewItem] = useState('');

  const handleAdd = () => {
    if (newItem.trim() !== '') {
      handleAddItem(newItem);
      setNewItem('');
    }
  };

  const handleEdit = () => {
    if (newItem.trim() !== '') {
      handleEditItem(editIndex, newItem);
      setNewItem('');
    }
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDeleteItem(index)}>Удалить</button>
            <button onClick={() => {
              setIsEditing(true);
              setEditIndex(index);
              setNewItem(items[index]);
            }}>Редактировать</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Введите элемент"
        />
        {isEditing ? (
          <button onClick={handleEdit}>Сохранить изменения</button>
        ) : (
          <button onClick={handleAdd}>Добавить</button>
        )}
      </div>
    </div>
  );
};

export default Filters;
