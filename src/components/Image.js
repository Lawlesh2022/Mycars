import React from 'react'
import Cars from "../cars.json";

const Image = () => {
  return (
    <div>
        {        
        Cars.map((d, index) => {
            return (
                <div className="card" key={index}>
                    <div className="card-image">
                        <a href={d.imageUrl} alt = "">                        
                        </a>
                    </div>
                </div>
            )
        })
        }
    </div>
  )
}

export default Image
