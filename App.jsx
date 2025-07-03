import { useState } from 'react';
import './App.css';
import photo from './assets/photo.png';
import UserPreview from './UserPreview';

function App() {
  const [formData, setFormData] = useState({
    companyName: '',
    slogan: '',
    name: '',
    jobTitle: '',
    email: '',
    phone: '',
    mobile: '',
    website: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="app-container">
      <div className="input-fields">
        <input name="companyName" placeholder="Company Name" onChange={handleChange} value={formData.companyName} />
        <input name="slogan" placeholder="Company Slogan" onChange={handleChange} value={formData.slogan} />
        <input name="name" placeholder="Full Name" onChange={handleChange} value={formData.name} />
        <input name="jobTitle" placeholder="Job Title" onChange={handleChange} value={formData.jobTitle} />
        <input name="email" placeholder="Email" onChange={handleChange} value={formData.email} />
        <input name="phone" placeholder="Phone" onChange={handleChange} value={formData.phone} />
        <input name="mobile" placeholder="Mobile" onChange={handleChange} value={formData.mobile} />
        <input name="website" placeholder="Website" onChange={handleChange} value={formData.website} />
        <input name="address" placeholder="Company Address" onChange={handleChange} value={formData.address} />
      </div>

      <div className="id-card">
        <div className="header">
          <h1>{formData.companyName || 'Company Name'}</h1>
          <p>{formData.slogan || 'Company Slogan'}</p>
        </div>

        <div className="middle-section">
          <div className="profile-pic">
            <img src={photo} alt="Profile" />
          </div>

          <div className="name-title">
            <h2>{formData.name || 'Your Name'}</h2>
            <p>{formData.jobTitle || 'Your Role'}</p>
          </div>

          <div className="contact-info">
            <p>📞 {formData.phone || 'Phone Number'}</p>
            <p>📱 {formData.mobile || 'Mobile Number'}</p>
            <p>📧 {formData.email || 'Email Address'}</p>
            <p>🌐 {formData.website || 'www.company.com'}</p>
            <p>📍 {formData.address || 'Company Address'}</p>
          </div>
        </div>

        <div className="footer">
          <p>{formData.website || 'www.companyname.com'}</p>
        </div>
      </div>

      <UserPreview data={formData} />
    </div>
  );
}

export default App;
