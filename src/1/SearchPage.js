import React, { useState } from 'react';
import Search from './Search'; // Импортируем компонент Search
import Filters from './Filters'; // Импортируем компонент Filters
import './SearchPage.css';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Добавляем состояние для хранения элементов (для CRUD операций)
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Функция для добавления элемента
  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  // Функция для удаления элемента
  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  // Функция для обновления элемента
  const handleEditItem = (index, newItem) => {
    const updatedItems = [...items];
    updatedItems[index] = newItem;
    setItems(updatedItems);
    setEditIndex(null);
    setIsEditing(false);
  };

  const handleSearch = () => {
    // Здесь вы можете выполнить логику поиска, например, с использованием API
    // В данном случае, мы просто имитируем результаты поиска.
    const mockSearchResults = [
      'Результат 1',
      'Результат 2',
      'Результат 3',
    ];

    setSearchResults(mockSearchResults);
  };

  return (
    <div>
      
      <h1>Ключевые элементы</h1>
      {/* Используем компонент Filters для добавления CRUD функциональности */}
      <Filters
        items={items}
        isEditing={isEditing}
        editIndex={editIndex}
        handleAddItem={handleAddItem}
        handleDeleteItem={handleDeleteItem}
        handleEditItem={handleEditItem}
        setIsEditing={setIsEditing}
        setEditIndex={setEditIndex}
      />
      <br/>
      <h1>Поиск</h1>
      {/* Используем компонент Search для отображения поиска и результатов */}
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        searchResults={searchResults}
      />
    </div>
  );
};

export default SearchPage;



// import React, { useState } from 'react';
// import './SearchPage.css';


// const SearchPage = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = () => {
//     // Здесь вы можете выполнить логику поиска, например, с использованием API
//     // В данном случае, мы просто имитируем результаты поиска.
//     const mockSearchResults = [
//       'Результат 1',
//       'Результат 2',
//       'Результат 3',
//     ];

//     setSearchResults(mockSearchResults);
//   };
//   const [isOpen, setOpen] = useState(false);
//   return (
//     <div>
//         <h1>Поиск</h1>
//       <div>
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Введите ваш запрос"
//         />
//         <button onClick={handleSearch}>Поиск</button>
//       </div>
//       <div>
//         {searchResults.length == 0 ? (
//           <ul>
//             {searchResults.map((result, index) => (
//               <li key={index}>{result}</li>
//             ))}
//           </ul>
//         ) : (
//           <p>Нет результатов поиска</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchPage;