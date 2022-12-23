import React from "react"
import { Context } from "../Context"

function Image({className, img}) {

    

  const [shownHoverContent,setIsShownHoverContent] = React.useState(false)  

    const {toggleFavorite} = React.useContext(Context)




    const heartIcon = shownHoverContent && <i className="ri-heart-line favorite" onClick={(e)=>toggleFavorite(img.id)}></i> 
    const cartIcon = shownHoverContent && <i className="ri-add-circle-line cart"></i>

    return (
        <div className={`${className} image-container`}
          onMouseEnter={() => setIsShownHoverContent(true)}
          onMouseLeave={() => setIsShownHoverContent(false)}
        >
            <img src={img.url} className="image-grid" />
            {heartIcon}
            {cartIcon}
        </div>
    )
}

export default Image
