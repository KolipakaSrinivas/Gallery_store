import React from "react"

function Image({className, img}) {

    

  const [shownHoverContent,setIsShownHoverContent] = React.useState(false)

    const heartIcon = shownHoverContent && <i className="ri-heart-line favorite"></i> 
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
