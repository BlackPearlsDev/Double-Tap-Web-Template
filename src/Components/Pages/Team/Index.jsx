import React from 'react';
import { Container } from 'rsuite';
import { Avatar } from 'rsuite';
import { Badge } from 'rsuite';

import IconDarkSword from '../../../assets/img/dark-sword.png';


function Team() {
    return (
        <main className='main-dev'>
            <article className='meet-dev-team'>
                <h1>Découvrez notre équipe</h1>
                <p>Le développement de Double Tap est guidé par une équipe de développeurs passionnés qui figure ci-dessous.</p>
            </article>

            <Container className='container-dev'>
                <article className='card-dev'>
                    <Badge style={{ background: '#4caf50' }} className='dev-badge-online'/>
                    <Avatar size="lg" circle src="https://avatars.githubusercontent.com/u/110727073?v=4" alt="@BlackPearlDev"/>
                    <p className='dev-name'>Black Pearl</p>
                    <p className='dev-role'>Créateur @ Double Tap</p>
                    <p className='dev-desc'>Développeur Fullstack JS de métier, développeur Java passioné.</p>

                    <div className='social-media'>
                        <a href="https://github.com/BlackPearlsDev" target={'_blank'} rel="noreferrer">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                        </a>
                    </div>
                </article>

                <article className='card-dev'>
                    <Badge className='dev-badge-offline'/>
                    <Avatar size="lg" circle src="https://avatars.githubusercontent.com" alt="?"/>
                    <p className='dev-name'>?</p>
                    <p className='dev-role'>...</p>
                    <p className='dev-desc'>Une place à prendre peut-être ..</p>

                    <div className='social-media'>
                        <a href="/" rel="noreferrer">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                        </a>
                    </div>
                </article>
            </Container>

            <div className='div-line'></div>
            <h2 className='title-text'>Nos partenaires</h2>


            <Container className='container-partner'>
                <article className='card-partner'>
                    <Badge className='partner-badge-offline'/>
                    <Avatar size="lg" circle src={IconDarkSword} alt="@DarkSword"/>
                    <p className='partner-name'>Dark-Sword</p>
                    <p className='partner-role'>Développeur</p>
                    <p className='partner-desc'>Assistance sur la partie développement client.</p>

                    <div className='social-media'>
                        <a href="/" rel="noreferrer">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                        </a>
                    </div>
                </article>
            </Container>
        </main>
    )
}

export default Team;