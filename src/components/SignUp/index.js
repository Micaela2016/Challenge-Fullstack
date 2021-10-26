import "./styles.scss";
import Button from "../Button/index";

const SignUp = () => {
    return (
        <div className="contSignUp">
            <form className="contSignUp__form">
                <div class="contSignUp__form-title">
                    <h1>$B APP</h1> 
                </div>
                <label>
                    Nombre:
                    <input type="text"/>
                </label>
                <label>
                    Apellido:
                    <input type="text"/>
                </label>
                <label>
                    Email:
                    <input id="inputEmail" type="text"/>
                </label>
                <label>
                    Contraseña:
                    <input id="inputPassword" type="password"/>
                </label>
                <Button variant="primary" text="Registrarme" moreClass="contSignUp__form-button"/>
            </form>
            <a href=" ">¿Ya tiene una cuenta? Ingrese aquí</a>
        </div>
            
    );
};
export default SignUp;