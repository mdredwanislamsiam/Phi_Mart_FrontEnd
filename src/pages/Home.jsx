import HeroCarousel from "../components/home/carousel/HeroCarousel";
import Category from "../components/home/Categories/Category";
import DiscountSection from "../components/home/discount/DiscountSection";
import Features from "../components/home/Features";
import Products from "../components/home/products/Products";


const Home = () => {
    return (
        <div>
            <HeroCarousel /> 
            <Features />
            <Category/> 
            <Products /> 
            <DiscountSection/> 
        </div>
    );
};

export default Home;