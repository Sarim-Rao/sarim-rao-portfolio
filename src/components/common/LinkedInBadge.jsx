import React, { useEffect, useState } from 'react';

const LinkedInBadge = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    script.onload = () => setScriptLoaded(true); 
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {scriptLoaded && (
        <div 
          className="badge-base LI-profile-badge" 
          data-locale="en_US" 
          data-size="medium" 
          data-theme="light" 
          data-type="VERTICAL" 
          data-vanity="rao-sarim-ali" 
          data-version="v1"
        >
          <a 
            className="badge-base__link LI-simple-link" 
            href="https://pk.linkedin.com/in/rao-sarim-ali?trk=profile-badge"
          >
          </a>
        </div>
      )}
    </div>
  );
};

export default LinkedInBadge;

// In your Contact component
// <LinkedInBadge />