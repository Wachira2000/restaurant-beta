"use client"

import { useState } from 'react';
import JapaneseMenu from './JapaneseMenu';
import ChineseMenu from './ChineseMenu';
import ItalianMenu from './ItalianMenu';
import KoreanMenu from './KoreanMenu';
import DrinksMenu from './DrinksMenu';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { name: 'Japanese', component: <JapaneseMenu /> },
    { name: 'Chinese', component: <ChineseMenu /> },
    { name: 'Italian', component: <ItalianMenu /> },
    { name: 'Korean', component: <KoreanMenu /> },
    { name: 'Drinks', component: <DrinksMenu /> }
  ];

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-5xl text-black font-bold text-center mb-8">Menu</h2>
        <div className="flex flex-wrap justify-center mb-8">
          <button onClick={() => handleFilter('all')} className="mr-4 mb-4 bg-gray-800 text-white px-4 py-2 rounded-md">All</button>
          {categories.map((category, index) => (
            <button key={index} onClick={() => handleFilter(category.name)} className="mr-4 mb-4 bg-gray-800 text-white px-4 py-2 sm:text-center rounded-md">{category.name}</button>
          ))}
        </div>
        {selectedCategory === 'all' && (
          <>
            {categories.map((category, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-black text-xl font-bold mb-4">{category.name}</h3>
                {category.component}
              </div>
            ))}
          </>
        )}
        {categories.map((category, index) => (
          selectedCategory === category.name && (
            <div key={index} className="mb-8">
              <h3 className="text-black text-xl font-bold mb-4">{category.name}</h3>
              {category.component}
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default Menu;
