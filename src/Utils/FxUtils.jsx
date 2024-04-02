/* FxUtils.jsx | Sree | 28 Mar 2024 */

export const fetchData = (setSheetData) => {
  const sheetId = '1ddvedUQbjtR6LweeWa_Kt7k0iSyC7GvDr0-ajxnueBU';
  const apiKey = 'AIzaSyBfQlhQjGkkHtdSRWyl_MPtCbSMMza3Kx0';
  const sheetName = 'All_945_Kaggas';

  fnFetchGSheet(sheetId, apiKey, sheetName, setSheetData);
}

const fnFetchGSheet = (spreadsheetId, apiKey, sheetName, setSheetData) => {
  const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.ok ? response.json() : Promise.reject('Network response was not ok'))
    .then(data => {
      data.values.shift();
      const processedRows = data.values.map(row => ({
        kKagga: row[1].replace(/§/g, '\n'), // Replace delimiter §
        eKagga: row[2].replace(/§/g, '\n'),
      }));
      setSheetData(processedRows);
    })
    .catch(error => console.error('Error fetching data:', error));
}

export default { fetchData };