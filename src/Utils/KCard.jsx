/* KCard.jsx | Sree | 28 Mar 2024 */

import React, { useState } from 'react';
import './KCard.css'; // Import the CSS file

function KCard({ kID, kKagga, eKagga }) {
    const [showEVerse, setShowEVerse] = useState(false);

    const toggleEVerse = () => {
        setShowEVerse(!showEVerse);
    };

    return (
        <div id={`kagga${kID}`} className="kCardWrap" onClick={toggleEVerse}> {/* Assign card id */}
            <div className="kVerse">{kKagga}</div>
            <div className={showEVerse ? 'eVerse show' : 'eVerse'}>{eKagga}</div>
            <div className="actRow">
                <div className="MaterialIcon aStart" >favorite_border</div> {/* favorite */}
                <div className="MaterialIcon aEnd">content_copy</div>
            </div>
        </div>
    );
}

export default KCard;