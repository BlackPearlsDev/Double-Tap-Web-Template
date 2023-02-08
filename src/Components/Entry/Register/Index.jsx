import React, { useState, useEffect } from 'react';
import { Container } from 'rsuite';
import { useNavigate } from 'react-router-dom';
import { validate } from "../../../Helpers/sanitize";
import { register } from "../../../services/API/user";
import { Form, ButtonToolbar, Button, Input, InputGroup, Whisper, Tooltip } from 'rsuite';
import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';

function Register() {

    const styles = {
        width: 300
    };
    const [visible, setVisible] = useState(false);

    const handleChange = () => {
        setVisible(!visible);
    };

    const [errorVisible, setErrorVisible] = useState(false);
    const [userExist, setUserExist] = useState(false);
    const [toShort, setToShort] = useState(false);
    const [errorPlacement] = useState('rightStart');
    const errorMessage = errorVisible ? 'Saisie obligatoire' : userExist ? "Utilisateur éxistant" : toShort ? "Mot de passe trop court" : null;

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({ username: "", secretKey : "", password: "", passwordConfirm: ""});

    const handleRegister = async (e) => {
        e.preventDefault();
        const inputsValidation = validate(inputs);
        if (inputs.username === "" || inputs.secretKey === "" || inputs.password === "" || inputs.passwordConfirm === "") {
            setErrorVisible(true);
        }
        if(inputsValidation === true) {
            if (inputs.password === inputs.passwordConfirm) {
                const res = await register(inputs);
                if (res.status === 409) {
                    setUserExist(true);
                    return;
                } else {
                    navigate("/success");
                    const checkInscription = localStorage.getItem("checkInscription");
                    if (checkInscription === null) {
                        localStorage.setItem("checkInscription", true);
                    }
                }
            }
        } else if (inputsValidation === "toShort") {
            setToShort(true);
        } else {
            setErrorVisible(true);
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setErrorVisible(false);
            setUserExist(false);
            setToShort(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, [errorVisible, userExist, toShort]);

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

                <Form layout="horizontal" onChange={(formValue) => setInputs(formValue)} className='form-register'>
                    <Form.Group controlId="username">
                        <Form.Control name="username" placeholder='Nom de compte' errorMessage={errorMessage} errorPlacement={errorPlacement}/>
                    </Form.Group>

                    <Form.Group controlId="secretKey">
                        <Form.Control name="secretKey" placeholder='Clé secrète (8 caractères minimum)' errorMessage={errorMessage} errorPlacement={errorPlacement}/>
                        <Form.HelpText tooltip>Vous pouvez mettre ce que vous voulez. Gardez là bien elle vous sera demandée en cas de récupération de mot de passe.</Form.HelpText>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <InputGroup inside style={styles}>
                            <Whisper trigger="focus" speaker={<Tooltip>Saisie obligatoire</Tooltip>}>
                                <Input type={visible ? 'text' : 'password'} placeholder='Mot de passe (8 caractères minimum)'/>
                            </Whisper>
                            <InputGroup.Button onClick={handleChange}>
                                {visible ? <EyeSlashIcon /> : <EyeIcon />}
                            </InputGroup.Button>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group controlId="passwordConfirm">
                        <InputGroup inside style={styles}>
                            <Whisper trigger="focus" speaker={<Tooltip>Saisie obligatoire</Tooltip>}>
                                <Input type={visible ? 'text' : 'password'} placeholder='Confirmation mot de passe'/>
                            </Whisper>
                            <InputGroup.Button onClick={handleChange}>
                                {visible ? <EyeSlashIcon /> : <EyeIcon />}
                            </InputGroup.Button>
                        </InputGroup>
                    </Form.Group>

                    <ButtonToolbar>
                        <Button appearance="primary" onClick={handleRegister}>S'inscrire</Button>
                    </ButtonToolbar>
                </Form>
            </Container>
        </main>
    )
}

export default Register;