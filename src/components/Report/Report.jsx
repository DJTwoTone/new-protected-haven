import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import './Report.css';

function Report({displayLang, changeDisplayLang}) {
  
  
  const [report, setReport] = useState({
    name: '',
    phone: '',
    email: '',
    details: '',
    
  });
  
  const detailBoxes = [
    {category: 'child abuse', value: displayLang.formChildAbuse}, 
    {category: 'violence', value: displayLang.formViolence}, 
    {category: 'harassment', value: displayLang.formViolence}, 
    {category: 'rape', value: displayLang.formRape}, 
    {category: 'stalking', value: displayLang.formStalking}, 
    {category: 'other', value: displayLang.formOtherIncident}];
    
    const [checkedDetails, setCheckedDetails] = useState(
      new Array(detailBoxes.length).fill(false)
    );
  const selectedLanguge = useParams().lang;

  if (selectedLanguge !== displayLang.code) {
    changeDisplayLang(selectedLanguge);
  }

  function handleChange(e) {
    setReport({
      ...report,
      [e.target.name]: e.target.value
    })
  }
  const handleDetailCheck = (position) => {
    const updatedDetailCheck = checkedDetails.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedDetails(updatedDetailCheck);
  }

  return (
    <div className='report-container'>
      <div className="report-heading">
        <h2>{displayLang.formPersonalInfo}</h2>
        <p>{displayLang.formCallNotice}</p>
      </div>
      <form>
        <div className='info-fields'>

          <label htmlFor="name">{displayLang.formName}</label>    
          <input type="text" name="name" placeholder={displayLang.formName} value={report.name} onChange={handleChange} />
          <label htmlFor="email">{displayLang.formEmail}</label>
          <input type="email" name="email" placeholder={displayLang.formEmail} value={report.email} onChange={handleChange} />
          <label htmlFor="phone">{displayLang.formPhone}</label>
          <input type="tel" name="phone" placeholder={displayLang.formPhone} value={report.phone} onChange={handleChange} />
        </div>
        {/* <h3>{displayLang.formDetails}</h3> */}
        <div className='details-info'>

          <label  className='details-heading'>{displayLang.formDetails}</label>
          <div className='details-boxes-container'>

            {detailBoxes.map(({category, value}, index) => (
              <div className="detail-box-group">
                <input 
                  type="checkbox" 
                  id={category} 
                  name={category} 
                  value={checkedDetails[index]} 
                  onChange={() => handleDetailCheck(index)} />
                <label htmlFor={category}>{value}</label>
              </div>
            ))}
          </div>
          <textarea name="details"  value={report.details} onChange={handleChange} ></textarea>
        </div>
        <div className='agreements'>

          <div className="send-location">
            <input type="checkbox" name="send-location" id='send-location' checked/>
            <label htmlFor="send-location">{displayLang.formGeoloc}</label>

          </div>
          <div className='data-sharing'>
            <input type="checkbox" name="share-data" id='share-data' checked/>
            <label htmlFor="share-data">{displayLang.formShareData}</label>

          </div>
        </div>
        <button type="submit" className='submit-btn'>{displayLang.formSubmit}</button>
      </form>
      <hr />
      <button type="button" className='cancel-btn'>{displayLang.formCancel}</button>
    </div>
  )
}

export default Report