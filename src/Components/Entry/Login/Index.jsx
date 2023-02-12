import { useState, useEffect } from 'react';
import { Container } from 'rsuite';
import { Form, ButtonToolbar, Button } from 'rsuite';
import { validate } from "../../../Helpers/sanitize";
import { login } from "../../../services/API/user";
import { useNavigate } from 'react-router-dom';
import ImgTopHome from '../../../assets/img/img_top_home.png';


function Login() {

    const navigate = useNavigate();

    const [errorVisible, setErrorVisible] = useState(false);
    const [errorPlacement] = useState('rightStart');
    const errorMessage = errorVisible ? 'Saisie obligatoire' : null;

    const [inputs, setInputs] = useState({ username: "", password: ""});

    const handleLogin = async (e) => {
        e.preventDefault();
		const inputsSanitized = validate(inputs);
        if (inputs.username === "" || inputs.password === "") {
            setErrorVisible(true);
            return;
        }
        if (inputsSanitized !== false) {
            const res = await login(inputsSanitized);
            if (inputs.username === "" || inputs.password === "") {
                return;
            } else if (res.status === 404) {
                return;
            } else if (res.status === 401) {
                return;
            } else if (res.status === 200) {
                localStorage.setItem("auth_token", res.data.token);
                localStorage.setItem("account", res.data.account);
                localStorage.setItem("id", res.data.id);
                navigate(`/account/${res.data.account}/${res.data.id}`);
            } else {
                return;
            }
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setErrorVisible(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, [errorVisible]);

    return (
        <main>
            <Container>
                <div className='login-infos'>
                    <h1>Se connecter</h1>
                    <p>Connectez-vous pour accéder à votre compte.</p>
                </div>

                <Form layout="horizontal" onChange={(formValue) => setInputs(formValue)} className='form-login'>
                    <Form.Group controlId="username">
                        <Form.Control name="username" placeholder='Nom de compte' errorMessage={errorMessage} errorPlacement={errorPlacement}/>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Control name="password" placeholder='Mot de passe' errorMessage={errorMessage} errorPlacement={errorPlacement} type='password'/>
                    </Form.Group>

                    <ButtonToolbar>
                        <Button appearance="primary" onClick={handleLogin}>Se connecter</Button>
                    </ButtonToolbar>
                </Form>
            </Container>
            
            <Container className='login-deco'>
                <div className='image-bg'></div>
                <img src={ImgTopHome} alt="L'éniripsa le soigneur de dofus, en version fan art. (fanart dofus)" className='img-top-home'/>         
            </Container>
        </main>
  )
}

export default Login;