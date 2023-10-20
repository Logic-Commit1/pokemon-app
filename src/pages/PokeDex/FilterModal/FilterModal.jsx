const FilterModal = ({
  typesList,
  selectedTypes,
  setSelectedTypes,
  onClose,
  onSelectType,
}) => {
  const handleCheckboxChange = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((item) => item !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSelectType(selectedTypes);
    onClose();
  };

  return (
    <div className="shadow-2xl fixed bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h2 className="ml-8 mt-6 font-semibold lg:ml-11 lg:text-lg lg:font-semibold">
        Types
      </h2>
      <form onSubmit={handleSubmit}>
        <ul className="grid auto-cols-auto grid-cols-2 gap-2 flex-col lg:px-11 lg:pb-1 lg:grid-cols-3 lg:gap-x-9 px-9 py-5">
          {typesList.map((type, index) => (
            <li key={index} className="mb-4">
              <label className="flex items-center">
                <input
                  className="w-4 mr-1 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="checkbox"
                  value={type}
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleCheckboxChange(type)}
                />
                {type}
              </label>
            </li>
          ))}
        </ul>
        <div className="buttons text-center lg:text-right lg:mr-4 lg:mb-4">
          <button
            onClick={onClose}
            className="py-2.5 px-5 my-2 mx-2 text-sm font-medium text-gray-900 focus:outline-none  border-gray-200  hover:text-amber-800 focus:z-10 focus:ring-4 focus:ring-gray-200 "
          >
            Cancel
          </button>
          <button
            type="submit"
            className="text-white bg-amber-950 hover:bg-yellow-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 my-2 mx-2 dark:hover:bg-yellow-800 focus:outline-none dark:focus:bg-yellow-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterModal;
