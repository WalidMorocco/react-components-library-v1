import { ComponentSection } from "./ComponentSection";
import { Overview } from "./Overview";

export  const HomePage = () => {
    
    return (
        <div class="wrapper">
            <div class="box header">
                <Overview/>
            </div>
            <div class="box sidebar">Sidebar</div>
            <div class="box sidebar2">Sidebar 2</div>
            <div class="box content">
                <ComponentSection/>
            </div>
        </div>
    )
}

export default HomePage;
