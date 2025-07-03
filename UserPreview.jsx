function UserPreview({ data }) {
  const {
    companyName,
    slogan,
    name,
    jobTitle,
    email,
    phone,
    mobile,
    website,
    address,
  } = data;

  return (
    <div style={{
      marginTop: '30px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      width: '300px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h3 style={{ textAlign: 'center' }}>User Preview</h3>
      <p><strong>Company:</strong> {companyName || '—'}</p>
      <p><strong>Slogan:</strong> {slogan || '—'}</p>
      <p><strong>Name:</strong> {name || '—'}</p>
      <p><strong>Job Title:</strong> {jobTitle || '—'}</p>
      <p><strong>Email:</strong> {email || '—'}</p>
      <p><strong>Phone:</strong> {phone || '—'}</p>
      <p><strong>Mobile:</strong> {mobile || '—'}</p>
      <p><strong>Website:</strong> {website || '—'}</p>
      <p><strong>Address:</strong> {address || '—'}</p>
    </div>
  );
}

export default UserPreview;
