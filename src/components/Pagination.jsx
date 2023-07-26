import React, { useState } from 'react';

const ElementList = () => {
  const elementsPerPage = 5; // Number of elements to display per page
  const elements = [
    { id: 1, name: 'Element 1' },
    { id: 2, name: 'Element 2' },
    { id: 3, name: 'Element 3' },
    { id: 4, name: 'Element 4' },
    { id: 5, name: 'Element 5' },
    { id: 6, name: 'Element 6' },
    { id: 7, name: 'Element 7' },
    { id: 8, name: 'Element 8' },
    // Add more elements as needed
  ];

  const totalPages = Math.ceil(elements.length / elementsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handleClickPage = (page) => {
    setCurrentPage(page);
  };

  const renderElements = () => {
    const startIndex = (currentPage - 1) * elementsPerPage;
    const endIndex = startIndex + elementsPerPage;
    const currentElements = elements.slice(startIndex, endIndex);

    return currentElements.map((element) => (
      <div key={element.id}>{element.name}</div>
    ));
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handleClickPage(i)}
          className={currentPage === i ? 'active' : ''}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div>
      <div>{renderElements()}</div>
      <div className="pagination">{renderPagination()}</div>
    </div>
  );
};

export default ElementList;
