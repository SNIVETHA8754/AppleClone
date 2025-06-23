import React from 'react';

const Dropdown = ({ dropdown }) => {
  const { mainCategories, quickLinks } = dropdown;

  return (
    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] max-w-[90vw] bg-white shadow-xl rounded-lg z-50 p-6 flex border border-gray-100">
      {/* Left Column: Main Categories */}
      <div className="flex-1 pr-6">
        <ul className="space-y-3">
          {mainCategories.map((category, index) => (
            <li
              key={index}
              className={`text-gray-900 cursor-pointer hover:text-blue-600 transition-colors ${
                index === 0 ? 'font-semibold text-lg pb-2 border-b border-gray-200' : 'font-medium text-base'
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column: Quick Links */}
      <div className="flex-1 space-y-6">
        {Object.entries(quickLinks).map(([sectionTitle, links], index) => (
          <div key={index}>
            <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-3">{sectionTitle}</h3>
            <ul className="space-y-2">
              {links.map((link, linkIndex) => (
                <li key={linkIndex} className="text-gray-700 text-sm hover:text-blue-600 cursor-pointer transition-colors">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;