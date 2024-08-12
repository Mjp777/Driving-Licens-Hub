import React, { useState } from 'react';

function LicenseApplication() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    licenseType: 'learning',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Submit form data to backend here
  };

  return (
    <div className="container">
      <h2>Apply for a License</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input type="number" className="form-control" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">License Type</label>
          <select className="form-select" name="licenseType" value={formData.licenseType} onChange={handleChange}>
            <option value="learning">Learning License</option>
            <option value="driving">Driving License</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default LicenseApplication;
