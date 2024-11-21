"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

interface FurnitureCategory {
  name: string;
  subcategories: string[];
}

const MainMenu: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  const furnitureCategories: FurnitureCategory[] = [
    {
      name: 'Living Room',
      subcategories: ['Sofas', 'Armchairs', 'Coffee Tables', 'TV Units']
    },
    {
      name: 'Bedroom',
      subcategories: ['Beds', 'Wardrobes', 'Nightstands', 'Dressers']
    },
    {
      name: 'Dining Room',
      subcategories: ['Dining Tables', 'Dining Chairs', 'Sideboards']
    },
    {
      name: 'Home Office',
      subcategories: ['Desks', 'Office Chairs', 'Bookcases']
    },
    {
      name: 'Outdoor',
      subcategories: ['Patio Furniture', 'Garden Sets', 'Outdoor Loungers']
    }
  ]

  return (
    <div className="flex items-center space-x-6">
      <Link 
        href="/" 
        className="hover:text-purple-600 transition-colors duration-200"
      >
        Home
      </Link>

      <Link 
        href="/about" 
        className="hover:text-purple-600 transition-colors duration-200"
      >
        About
      </Link>

      <div 
        className="relative group"
      >
        <div 
          onMouseEnter={() => setIsDropdownOpen(true)}
          className="flex items-center group-hover:text-purple-600 transition-colors duration-200 cursor-pointer"
        >
          Furniture
          <ChevronDown className="ml-1 h-4 w-4" />
        </div>

        {isDropdownOpen && (
          <div 
            className="absolute top-full left-0 mt-2 w-[800px] bg-white shadow-lg rounded-lg flex z-50"
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            {/* Categories Column */}
            <div className="w-1/3 p-4 border-r">
              {furnitureCategories.map((category) => (
                <div 
                  key={category.name}
                  className={`
                    py-2 px-3 rounded-md cursor-pointer transition-all duration-300
                    ${hoveredCategory === category.name 
                      ? 'bg-purple-50 scale-105 shadow-md' 
                      : 'hover:bg-gray-50'}
                  `}
                  onMouseEnter={() => setHoveredCategory(category.name)}
                >
                  {category.name}
                </div>
              ))}
            </div>

            {/* Subcategories Column */}
            <div className="w-2/3 p-4">
              {hoveredCategory ? (
                <div className="grid grid-cols-2 gap-4">
                  {furnitureCategories
                    .find(cat => cat.name === hoveredCategory)
                    ?.subcategories.map((subcat) => (
                      <Link 
                        key={subcat} 
                        href={`/furniture/${subcat.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-purple hover:text-purple-600 transition-colors duration-200 py-1"
                      >
                        {subcat}
                      </Link>
                  ))}
                </div>
              ) : (
                <div className="text-gray-500 text-center">
                  Hover over a category to see subcategories
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <Link 
        href="/faq" 
        className="hover:text-purple-600 transition-colors duration-200"
      >
        FAQ
      </Link>
    </div>
  )
}

export default MainMenu