import React from 'react'

function Joguinho({j}) {
  return (
    <div className="cont-joguinho">
        {j.time1} x {j.time2}
    </div>
  )
}

export default Joguinho