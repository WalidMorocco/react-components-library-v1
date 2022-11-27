import { ComponentSection } from "./ComponentSection";
import { Overview } from "./Overview";

export  const HomePage = () => {
    
    return (
        <div className="home-container">
            <Overview/>
            <ComponentSection />
        </div>
    )
}

export default HomePage;
