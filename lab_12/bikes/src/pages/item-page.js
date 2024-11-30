import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import CarItem from "../Components/CarItem/CarInfo";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchCarById } from "../api/getById";
import Loader from "../Components/Loader/Loader";

const ItemPage = () => {
    const location = useLocation()
    const [isLoading, setIsLoading] = useState(true)
    const [car, setCar] = useState({})
    const carId = location.pathname.replace('/car/', '')
    
    useEffect(() => {
        fetchCarById(carId).then(setCar)
        setIsLoading(false)
    }, [carId])
    

    return (
        <>
            <Header/>
            {isLoading ? <Loader/> : <CarItem car={car}/>}
            <Footer/>
        </>
    )
}

export default ItemPage