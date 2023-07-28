import React from 'react'

function InputGeneric({ name, value, onChange }) {
 return (
  <>
   <input
    name={name}
    value={value}
    onChange={onChange}

   />
  </>
 )
}

export default InputGeneric