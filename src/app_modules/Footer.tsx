import githubLogo from './assets/github-142-svgrepo-com.svg';

const Footer = () =>{
    
    return(
        <div id="footer">
            <p>Tambien puedes seguir mis proyectos en mi GitHub 
            </p>
            <a href="https://github.com/DaSanLi">
                <img src={githubLogo} alt="Imagen representativa de GitHub" />
            </a>
        </div>
    )
} 

export default Footer