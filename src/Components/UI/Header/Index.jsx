import React from 'react';
import { useState, useEffect } from 'react';
import { Navbar, Nav } from 'rsuite';
import DofusIcon from '../../../assets/img/dofus_emeraude.png';
import { Link } from 'react-router-dom';
import MenuIcon from '@rsuite/icons/Menu';
import CloseIcon from '@rsuite/icons/Close';

function Header() {

    const [widthScreen, setWidthScreen] = useState(window.innerWidth);
    const [isToggle, setIsToggle] = useState(false);

    const ChartIconOpen = ({ size }) => <MenuIcon style={{ fontSize: size, marginRight: 0 }} />;
    const ChartIconClose = ({ size }) => <CloseIcon style={{ fontSize: size, marginRight: 0 }} />;

    useEffect(() => {
        const handleResize = () => setWidthScreen(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    const NavLink = React.forwardRef(({ href, children, ...rest }, ref) => (
        <Link ref={ref} to={href} {...rest}>
          {children}
        </Link>
      ));

    return (
        <header>
            <Navbar>
                {widthScreen > 767 ? (
                    <>
                    <img src={DofusIcon} alt="Le logo de Dofus, MMORPG français créer par Ankama" />
                    <Navbar.Brand as={NavLink} href="/">DOUBLE TAP</Navbar.Brand>

                    <Nav pullRight>
                        <Nav.Item as={NavLink} href="/play">Jouer</Nav.Item>
                        <Nav.Item as={NavLink} href="/news">Nouveautés</Nav.Item>
                        <Nav.Item as={NavLink} href="/ladder">Classement</Nav.Item>
                        <Nav.Menu title="Autres">
                            <Nav.Item as={NavLink} href="/">Support</Nav.Item>
                            <Nav.Item as={NavLink} href="/">Discord</Nav.Item>
                            <Nav.Item as={NavLink} href="/team">Équipe</Nav.Item>
                        </Nav.Menu>
                    </Nav>
                    </>
                ) : (
                    <>
                        {isToggle ?
                            <>
                                <img src={DofusIcon} alt="Le logo de Dofus, MMORPG français créer par Ankama" />
                                <Navbar.Brand href="/">DOUBLE TAP</Navbar.Brand>

                                <Nav pullRight>
                                    <div>
                                        <Nav.Item as={NavLink} href="/play">Jouer</Nav.Item>
                                        <Nav.Item as={NavLink} href="/news">Nouveautés</Nav.Item>
                                    </div>
                                    <div>
                                        <Nav.Item as={NavLink} href="/ladder">Classement</Nav.Item>
                                        <Nav.Menu title="Autres">
                                            <Nav.Item as={NavLink} href="/">Support</Nav.Item>
                                            <Nav.Item as={NavLink} href="/">Discord</Nav.Item>
                                            <Nav.Item as={NavLink} href="/team">Équipe</Nav.Item>
                                        </Nav.Menu>
                                    </div>
                                </Nav>
                                <button onClick={() => setIsToggle(!isToggle)} className="btnNav">
                                    <ChartIconClose size={20} />
                                </button>
                            </>
                            : 
                            <>
                                <div className='div-nav-flex-mobile'>
                                    <img src={DofusIcon} alt="Le logo de Dofus, MMORPG français créer par Ankama" />
                                    <Navbar.Brand href="/">DOUBLE TAP</Navbar.Brand>
                                    <button onClick={() => setIsToggle(!isToggle)} className="btnNav">
                                        <ChartIconOpen size={20} />
                                    </button>
                                </div>
                            </>
                            }
                    </>
                )}
            </Navbar>
        </header>
    )
}

export default Header;