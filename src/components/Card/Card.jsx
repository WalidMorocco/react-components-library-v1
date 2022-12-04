import ContainerImage from '../../assets/test-component.png'
import './styles.css'

export const Card = () => {
    return (
        <div className='card'>
            <div className="image-container">
                <img src={ContainerImage} className="component-image" />
            </div>
            <div className='description-container'>
                <h1>PsiDev Navbar Component</h1>
            </div>
        </div>
    )
}