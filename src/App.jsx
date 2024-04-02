/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
App.jsx | Main App | 28/03/2024 | Sree
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

import { useState, useEffect } from 'react';
import './App.css';
import FxNavbar from './Nav/FxNavbar';
import KCard from './Utils/KCard';
import { fetchData } from './Utils/FxUtils.jsx'; // Import fetchData function

function App() {
  const [sheetData, setSheetData] = useState([]);

  useEffect(() => {
    fetchData(setSheetData); // Call fetchData function
  }, []);

  const divCardWrap = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(368px, 1fr))',
    gap: '24px',
    padding: '32px',
    // backgroundColor: '#F8F9FA',
  };

  return (
    <>
      <FxNavbar />
      <div className='Grd pT16 pB16' style={{ backgroundColor: 'pink' }}>
        Searchbar
      </div>
      <div style={divCardWrap}>
        {sheetData.map((rowData, index) => {
          const id = index + 1; // Calculate id based on index
          const idAdd = id + '॥'; // Calculate id based on index
          //console.log(index); // Log index here
          return (
            <KCard
              /* kID={`kCard_${id}`} // Assign id to the card */
              kID={`${id}`} // Assign id to the card
              key={index}
              kKagga={rowData.kKagga + idAdd}
              eKagga={rowData.eKagga + idAdd}
            // ॥
            />
          );
        })}
      </div>
    </>
  );
}

export default App;