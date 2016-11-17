import React from 'react'

export default () => (
  <div>
    {Array(10).fill()
      .map((_, i) => (
        <a
          href={`/item/${i}`}
          key={i}
          onClick={(e) => console.log(e)}
        >
          Item No. {i}
        </a>
      )
    )}
  </div>
)
