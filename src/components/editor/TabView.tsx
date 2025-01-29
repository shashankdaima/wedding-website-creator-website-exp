import React from 'react';

interface TabViewProps {
  value: "mobile"|"desktop"|"tablet";
  setValue: (value: "mobile"|"desktop"|"tablet") => void;
}

export const TabView: React.FC<TabViewProps> = ({ value, setValue }) => {
  return (
    <div className="w-full">
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px" aria-label="Tabs">
          <button
            onClick={() => setValue('desktop')}
            className={`w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm ${
              value === 'desktop'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Desktop
          </button>
          <button
            onClick={() => setValue('tablet')}
            className={`w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm ${
              value === 'tablet'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Tablet
          </button>
          <button
            onClick={() => setValue('mobile')}
            className={`w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm ${
              value === 'mobile'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Mobile
          </button>
        </nav>
      </div>
    </div>
  );
};

export default TabView;
