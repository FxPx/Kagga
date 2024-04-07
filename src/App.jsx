/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
App.jsx | Main App | 28/03/2024 | Sree
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { useState, useEffect } from 'react';
import './App.css';
import FxNavbar from './Nav/FxNavbar';
import KCard from './Utils/KCard';
import { fetchData } from './Utils/FxUtils.jsx';
import FxSearch from './Utils/FxSearch.jsx';

function App() {
  const [sheetData, setSheetData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchCount, setSearchCount] = useState(0);
  const [loadedFromLocalStorage, setLoadedFromLocalStorage] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const storedData = localStorage.getItem('sheetData');
      console.log('Stored data:', storedData);
  
      try {
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          if (Array.isArray(parsedData) && parsedData.length > 0) {
            console.log('Data loaded from localStorage:', parsedData);
            setSheetData(parsedData);
            setOriginalData(parsedData);
            setLoadedFromLocalStorage(true);
            return;
          }
        }
        console.log('No valid data found in localStorage, fetching from server...');
        await fetchData(setSheetData);
        setLoadedFromLocalStorage(false);
      } catch (error) {
        console.error('Error parsing data from localStorage:', error);
        console.log('Fetching from server due to parsing error...');
        await fetchData(setSheetData);
        setLoadedFromLocalStorage(false);
      }
    };
  
    loadData();
  }, []);
  
  
  useEffect(() => {
    if (!loadedFromLocalStorage) {
      console.log('Setting data to localStorage:', sheetData);
      localStorage.setItem('sheetData', JSON.stringify(sheetData));
      setOriginalData(sheetData);
    }
  }, [sheetData, loadedFromLocalStorage]);
  

  const divCardWrap = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(368px, 1fr))',
    gap: '24px',
    padding: '32px',
  };

  const handleSearchInput = (input) => {
    setSearchInput(input);
  };

  useEffect(() => {
    let count = 0;
    originalData.forEach((rowData) => {
      const cardText = `${rowData.kKagga} ${rowData.eKagga}`.toLowerCase();
      if (cardText.includes(searchInput.toLowerCase())) {
        count++;
      }
    });
    setSearchCount(count);
  }, [searchInput, originalData]);

  const filteredData = originalData.filter((rowData) => {
    const cardText = `${rowData.kKagga} ${rowData.eKagga}`.toLowerCase();
    return cardText.includes(searchInput.toLowerCase());
  });

  return (
    <>
      <FxNavbar />
      <div className='FlxCenter pT16 pB16' style={{ backgroundColor: 'transparent' }}>
        <FxSearch onSearchInput={handleSearchInput} />
        <p>{searchCount} cards found</p>
      </div>
      <div style={divCardWrap}>
        {filteredData.map((rowData, index) => {
          const id = index + 1;
          const idAdd = id + '॥';
          return (
            <KCard
              kID={`${id}`}
              key={index}
              kKagga={rowData.kKagga + idAdd}
              eKagga={rowData.eKagga + idAdd}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
/* - - - - - - - - - - - - - - - -  */