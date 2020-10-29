import React from 'react';
import Product from "./Product";
import "./Home.css";


function Home() {
    return (
        <div className = "home">
            <img className = "home__image" 
            src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt = ""/>
            <div className = "home__row">
                <Product
                id = "100001"
                title = "Harry Potter and the Philospher's Stone"
                price = {359}
                rating = {4}
                image = "https://m.media-amazon.com/images/I/81YOuOGFCJL._AC_UY218_.jpg"
                />
                <Product
                id = "100002"
                title = "The Alchemist"
                price = {2262.0}
                rating = {5}
                image = "https://5.imimg.com/data5/WA/IN/MY-11183377/the-alchemist-500x500.png"
                />
            </div> 
            <div className = "home__row">
                <Product
                id = "100003"
                title = "OnePlus 7T Glacier Blue (8GB RAM+256GB Storage)"
                price = {37999.0}
                rating = {4}
                image = "https://images-na.ssl-images-amazon.com/images/I/71ncRs6HzyL._SL1500_.jpg"
                />
                <Product
                id = "100004"
                title = "Oneplus 7T PRO Haze Blue (8GB RAM+256GB Storage)"
                price = {43999.0}
                rating = {4}
                image = "https://images-na.ssl-images-amazon.com/images/I/61FRLa8IFTL._SL1500_.jpg"
                />
                <Product
                id = "100005"
                title = "Vivo V17 (Midnight Ocean, 8GB RAM, 128GB Storage)"
                price = {17990.00}
                rating = {3}
                image = "https://images-na.ssl-images-amazon.com/images/I/71NMCqCxj-L._SL1180_.jpg"
                />
            </div>
            <div className = "home__row">
                <Product
                id = "100006"
                title = "Samsung 190.5 cm (75 inches) 8 Series 75NU8000 4K LED Smart TV (Black)"
                price = {352900.0}
                rating = {5}
                image = "https://images-na.ssl-images-amazon.com/images/I/91IttqgqY9L._SL1500_.jpg"
                />
            </div>    
        </div>
    )
}

export default Home;
