import React from "react";

type FilterBarProps = {
  filters: string[];
  onRemoveFilter: (filter: string) => void;
  onClearFilters: () => void;
};

const FilterBar: React.FC<FilterBarProps> = ({ filters, onRemoveFilter, onClearFilters }) => {
  if (filters.length === 0) return null; // Don't show if no filters are applied

  return (
    <div className="bg-white shadow-md rounded-lg py-4 px-6 flex items-center justify-between">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <div
            key={filter}
            className="bg-light-grayish-cyan-tablet text-desaturated-dark-cyan px-2 py-1 rounded flex items-center space-x-2"
          >
            <span>{filter}</span>
            <button
              onClick={() => onRemoveFilter(filter)}
              className="bg-desaturated-dark-cyan text-white font-bold px-2 rounded"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <button onClick={onClearFilters} className="text-dark-grayish-cyan font-semibold hover:underline">
        Clear
      </button>
    </div>
  );
};

export default FilterBar;
