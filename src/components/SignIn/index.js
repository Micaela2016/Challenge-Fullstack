import "./styles.scss";
import Button from "../Button/index";

const SignIn = () => {
    return (
        <div className="contSignIn">
            <form className="contSignIn__form">
                <div class="contSignIn__form-title">
                    <h1>$B APP</h1> 
                </div>
                <p>Ingresar</p>
                <label>
                    Email:
                    <input id="inputEmail" type="text"/>
                </label>
                <label>
                    Contraseña:
                    <input id="inputPassword" type="password"/>
                </label>
                <Button variant="primary" text="Iniciar sesión"/>
            </form>
            <a href="signup.html">¿No tiene una cuenta? Regístrese aquí</a>
        </div>
            
    );
};
export default SignIn;