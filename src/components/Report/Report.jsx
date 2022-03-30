import React from 'react'

function Report() {
  return (
    <form>

    <label for="name">Name</label>    
    <input type="text" name="name" placeholder="Name" />
    <label for="phone">Phone</label>
    <input type="tel" name="phone" placeholder="Phone" />
    <label for="details">Details</label>
    <textarea name="details" placeholder="Details"></textarea>
    <label for="email">Email</label>
    <input type="email" name="email" placeholder="Email" />
    
    </form>
  )
}

export default Report