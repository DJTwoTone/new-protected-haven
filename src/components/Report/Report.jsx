import React, { useState } from 'react'

function Report({displayLang}) {
  
  const [report, setReport] = useState({
    name: '',
    phone: '',
    email: '',
    details: '',

  });

  function handleChange(e) {
    setReport({
      ...report,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form>
    <label for="name">{displayLang.formName}</label>    
    <input type="text" name="name" placeholder="Name" value={report.name} onChange={handleChange} />
    <label for="phone">{displayLang.formPhone}</label>
    <input type="tel" name="phone" placeholder="Phone" value={report.phone} onChange={handleChange} />
    <label for="details">{displayLang.formDetails}</label>
    <textarea name="details" placeholder="Details" value={report.details} onChange={handleChange} ></textarea>
    <label for="email">{displayLang.formEmail}</label>
    <input type="email" name="email" placeholder="Email" value={report.email} onChange={handleChange} />
    
    </form>
  )
}

export default Report