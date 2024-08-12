import React, { useState } from 'react';

function LicenseStatus() {
  const [licenseNumber, setLicenseNumber] = useState('');
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setLicenseNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Checking status for:', licenseNumber);
    // Fetch status from backend here
  };

  return (
    <div className="container">
      <h2>Check License Status</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">License Number</label>
          <input type="text" className="form-control" value={licenseNumber} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Check Status</button>
      </form>
      {status && (
        <div className="mt-3">
          <p>Status: {status}</p>
        </div>
      )}
    </div>
  );
}

export default LicenseStatus;
