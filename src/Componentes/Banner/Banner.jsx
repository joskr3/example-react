import React from 'react'
import banner from "../../Assets/Images/Banner/banner.webp"

export default function Banner() {
    return (
        <div className="container is-fluid box">
            <picture>
                <img src={banner} alt="banner" />
            </picture>
        </div>
    )
}
