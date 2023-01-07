import './styles.css'

const d = new Date();
let year = d.getFullYear();

export const Footer = () => {
    
    return (
        <div class="footer">
            <p>PsiDev | {year}</p>
        </div>
    )
}