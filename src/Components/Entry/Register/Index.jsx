import { useState } from 'react';
import { Container } from 'rsuite';
import { useNavigate } from 'react-router-dom';
import { validate } from "../../../Helpers/sanitize";
import { register } from "../../../services/API/user";

function Register() {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({ username: "", secretKey : "", password: "", passwordConfirm: ""});
    const [empty, setEmpty] = useState(false);
    const [userExist, setUserExist] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        const inputsValidation = validate(inputs);
        if (inputs.username === "" || inputs.secretKey === "" || inputs.password === "" || inputs.passwordConfirm === "") {
            setEmpty(true);
            return;
        }
        if(inputsValidation === true) {
            if (inputs.password === inputs.passwordConfirm) {
                const res = await register(inputs);
                if (res.status === 409) {
                    setUserExist(true);
                    return;
                } else {
                    navigate("/success");
                }
            } else {
                setEmpty(true);
            }
        }
    }

    return (
        <main>
            <Container className='register-container'>
                <article className='register-infos'>
                    <h1>L'inscription</h1>
                    <p>Pour rejoindre l'aventure c'est une étape obligatoire !</p>
                </article>

                <aside className='register-note'>
                        <h1>NOTE</h1>
                        <p>Toutes vos données sont hashées et sécurisées, ne les communiquez à personnes sous aucun prétexte.</p>
                        <p>Si vous perdez votre mot de passe, il vous sera demandé via le support votre clé secrète pour vérifier vos données pour la récupération de compte.</p>
                </aside>

                <form onSubmit={handleRegister}  className='form-register'>
                    <input type="text" id="username" name="username" placeholder="Nom de compte" onChange={(e) => setInputs({...inputs, username: e.target.value})}/>

                    <input type="text" id="secretKey" name="secretKey" placeholder="Clé secrète (8 caractères minimums)" onChange={(e) => setInputs({...inputs, secretKey: e.target.value})}/>

                    <input type="password" id="password" name="password" placeholder="Mot de passe (8 caractères minimums)" onChange={(e) => setInputs({...inputs, password: e.target.value})}/>

                    <input type="password" id="passwordConfirm" name="passwordConfirm" placeholder="Confirmer le mot de passe" onChange={(e) => setInputs({...inputs, passwordConfirm: e.target.value})}/>

                    <input type="submit" value="S'inscrire" />
                </form>
                {empty && <p className='txtErrorEntry'>Veuillez remplir tous les champs</p>}
                {userExist && <p className='txtErrorEntry'>Ce nom de compte existe déjà</p>}
            </Container>
        </main>
    )
}

export default Register;