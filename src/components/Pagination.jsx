const Pagination = ({items, itemsPerPage, handlePageChange, currentPage}) => {

    const totalPages = Math.ceil(items.length / itemsPerPage);
  
    return (
      <div className="pagination mt-8 relative z-40 gap-6 flex justify-center items-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active px-4 py-2 rounded-xl cursor-pointer' : 'border border-[#777] px-4 py-2 rounded-xl cursor-pointer hover:bg-[#EF2B2D] hover:text-white duration-300'}
          >
            {index + 1}
          </button>
        ))}
      </div>
    );
  };

export default Pagination