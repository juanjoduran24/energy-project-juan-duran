const DataTable = ({
  visibleColumns,
  currentItems,
  currentPage,
  totalPages,
  goToNextPage,
  goToPreviousPage,
}) => {
  return (
    <div className="bg-purple-50 p-4 shadow-lg rounded-lg">
      {/* Contenedor con scroll interno */}
      <div className="max-h-[500px] overflow-y-auto">
        <table className="table-auto border-collapse border border-purple-200 w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-purple-800 text-white">
              {visibleColumns.map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-2 border border-purple-300 text-left"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-pink-100 odd:bg-purple-100 even:bg-pink-50"
              >
                {visibleColumns.map((header, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-4 py-2 border border-purple-300 text-purple-800"
                  >
                    {row[header] || ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-purple-800 text-white rounded-md shadow-md disabled:bg-gray-300"
        >
          Anterior
        </button>
        <span className="text-purple-800 font-semibold">
          Página {currentPage} de {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-pink-500 text-white rounded-md shadow-md disabled:bg-gray-300"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default DataTable;

