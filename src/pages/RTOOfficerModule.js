import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RTOOfficerModule() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Fetch applications from backend
    axios.get('/api/applications')
      .then(response => {
        setApplications(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the applications!', error);
      });
  }, []);

  return (
    <div className="container">
      <h2>RTO Officer Module</h2>
      <ul className="list-group">
        {applications.map(app => (
          <li key={app.id} className="list-group-item">
            {app.name} - {app.licenseType} - {app.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RTOOfficerModule;
