/* FxSearch.jsx | Sree | 2 Apr 2024 */

// import React, { useEffect } from 'react';
// import '../Utils/FxSearch.css';
// import * as FxProps from '../Feed/FxProps';

// const FxSearch = () => {
//     useEffect(() => {
//         const handleKeyPress = (event) => {
//             event.key === 'Escape' && (document.getElementById('idSrch').value = ''); // Clear the input value if Escape key is pressed
//         };

//         const inputElement = document.getElementById('idSrch');
//         inputElement.addEventListener('keydown', handleKeyPress);

//         return () => { inputElement.removeEventListener('keydown', handleKeyPress);  };
//     }, []);

//     return (
//         <form action="" className="srchWrap">
//             <div className="iconBoxL FlxCenter">
//                 <div className="MaterialIcon f20">search</div>
//             </div>
//             <input
//                 type="text"
//                 id="idSrch"
//                 required
//                 tabIndex="1"
//                 className="srchInput"
//                 placeholder={FxProps.srchPlchldr}
//             />

//             <button id="clrSrch" type="reset" className='MaterialIcon f20'>
//                 close
//             </button>
//         </form>
//     );
// };

// export default FxSearch;

// /* FxSearch.jsx */
// import React, { useEffect } from 'react';
// import '../Utils/FxSearch.css';
// import * as FxProps from '../Feed/FxProps';

// const FxSearch = ({ onSearchInput }) => {
//     useEffect(() => {
//         const handleKeyPress = (event) => {
//             event.key === 'Escape' && (document.getElementById('idSrch').value = ''); // Clear the input value if Escape key is pressed
//         };

//         const inputElement = document.getElementById('idSrch');
//         inputElement.addEventListener('keydown', handleKeyPress);

//         return () => { inputElement.removeEventListener('keydown', handleKeyPress);  };
//     }, []);

//     const handleInputChange = (event) => {
//         const inputValue = event.target.value;
//         onSearchInput(inputValue);
//     };

//     return (
//         <form action="" className="srchWrap">
//             <div className="iconBoxL FlxCenter">
//                 <div className="MaterialIcon f20">search</div>
//             </div>
//             <input
//                 type="text"
//                 id="idSrch"
//                 required
//                 tabIndex="1"
//                 className="srchInput"
//                 placeholder={FxProps.srchPlchldr}
//                 onChange={handleInputChange}
//             />

//             <button id="clrSrch" type="reset" className='MaterialIcon f20'>
//                 close
//             </button>
//         </form>
//     );
// };

// export default FxSearch;

/* FxSearch.jsx */
import React, { useEffect } from 'react';
import '../Utils/FxSearch.css';
import * as FxProps from '../Feed/FxProps';

const FxSearch = ({ onSearchInput }) => {
    useEffect(() => {
      const handleKeyPress = (event) => {
        if (event.key === 'Escape') {
          document.getElementById('idSrch').value = '';
          onSearchInput(''); // Trigger search function to display all data
        }
      };
  
      const inputElement = document.getElementById('idSrch');
      inputElement.addEventListener('keydown', handleKeyPress);
  
      return () => {
        inputElement.removeEventListener('keydown', handleKeyPress);
      };
    }, [onSearchInput]);
  
    const handleInputChange = (event) => {
      const inputValue = event.target.value;
      onSearchInput(inputValue);
    };
  
    return (
      <form action="" className="srchWrap">
        <div className="iconBoxL FlxCenter">
          <div className="MaterialIcon f20">search</div>
        </div>
        <input
          type="text"
          id="idSrch"
          required
          tabIndex="1"
          className="srchInput"
          placeholder={FxProps.srchPlchldr}
          onChange={handleInputChange}
        />
  
        <button
          id="clrSrch"
          type="reset"
          className="MaterialIcon f20"
          onClick={() => onSearchInput('')} // Clear search input on button click
        >
          close
        </button>
      </form>
    );
  };
  
  export default FxSearch;
  