import React, { useState } from 'react';
import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const Filter = ({ category, setSelectedCategory, setPriceRange }) => {
const [selectedCategory, setLocalSelectedCategory] = useState('');
const [selectedPriceRange, setSelectedPriceRange] = useState('');
const priceRanges = ['0-50', '50-100', '100-500', '500+'];

return (
<div className="flex space-x-10 justify-end  pl-20 ">

    <Listbox value={selectedCategory} onChange={(value) => {
        setLocalSelectedCategory(value);
        setSelectedCategory(value);
    }}>
    {({ open }) => (
        <div className="relative w-40">
        <Listbox.Button className="relative w-full h-10 cursor-default rounded-md bg-white pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 sm:text-sm sm:leading-6">
            <span className="block truncate">
            {selectedCategory || 'Category'}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
            </span>
        </Listbox.Button>
        <Listbox.Options className={`absolute mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm ${open ? 'block' : 'hidden'} z-10`}>
            {category.map((cat, index) => (
            <Listbox.Option key={index} value={cat} className="cursor-default select-none py-2 pl-3 pr-9">
                {({ selected }) => (
                <>
                    <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                    {cat}
                    </span>
                    {selected ? (
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4"></span>
                    ) : null}
                </>
                )}
            </Listbox.Option>
            ))}
        </Listbox.Options>
        </div>
    )}
    </Listbox>

    <Listbox value={selectedPriceRange} onChange={(value) => {
        setSelectedPriceRange(value);
        setPriceRange(value);
    }}>
    {({ open }) => (
        <div className="relative w-40">
        <Listbox.Button className="relative w-full h-10 cursor-default rounded-md bg-white pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 sm:text-sm sm:leading-6">
            <span className="block truncate">
            {selectedPriceRange || 'Price Range'}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
            </span>
        </Listbox.Button>
        <Listbox.Options className={`absolute mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm ${open ? 'block' : 'hidden'} z-10`}>
            {priceRanges.map((range, index) => (
            <Listbox.Option key={index} value={range} className="cursor-default select-none py-2 pl-3 pr-9">
                {({ selected }) => (
                <>
                    <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                    {range}
                    </span>
                    {selected ? (
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                        <CheckIcon className="h-5 w-5 text-red-600" />
                    </span>
                    ) : null}
                </>
                )}
            </Listbox.Option>
            ))}
        </Listbox.Options>
        </div>
    )}
    </Listbox>
</div>
);
};

export default Filter;
