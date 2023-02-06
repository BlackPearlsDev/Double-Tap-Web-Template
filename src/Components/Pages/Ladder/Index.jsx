import { useEffect, useState } from 'react';
import { Container } from 'rsuite';
import { Table } from 'rsuite';
import ImgTopHome from '../../../assets/img/img_top_home.png';
import PieChartIcon from '@rsuite/icons/PieChart';

function Ladder({ladderInfos, fetchError}) {

    const [widthScreen, setWidthScreen] = useState(window.innerWidth);

    const { Column, HeaderCell, Cell } = Table;

    const [sortColumn, setSortColumn] = useState('level');
    const [sortType, setSortType] = useState('desc');
    const [loading, setLoading] = useState(false);

    const data = [...ladderInfos];

    const ChartIcon = ({ color }) => (
        <PieChartIcon style={{ color, marginRight: 0, fontSize: '4em' }} />
    );
    
    useEffect(() => {
        const handleResize = () => setWidthScreen(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    const getData = () => {

        if (sortColumn && sortType) {
            return data.sort((a, b) => {
                let x = a[sortColumn];
                let y = b[sortColumn];

                if (typeof x === 'string') {
                    x = x.charCodeAt();
                }
                if (typeof y === 'string') {
                    y = y.charCodeAt();
                }

                if (sortType === 'asc') {
                    return x - y;
                } else {
                    return y - x;
                }
            });
        }
        return data;
    };

    const formatXp = (xp) => {
        return xp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    const handleSortColumn = (sortColumn, sortType) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSortColumn(sortColumn);
            setSortType(sortType);
        }, 500);
    };

    return (
        <main>
            <Container className='ladder-container'>
                {widthScreen > 768 ? (
                <Table height={400} data={getData()} sortColumn={sortColumn} sortType={sortType} onSortColumn={handleSortColumn} loading={loading}>
                    <Column width={widthScreen < 1024 ? 150 : widthScreen > 1300 ? 250 : 200} align="center" fixed sortable>
                        <HeaderCell>Nom</HeaderCell>
                        <Cell dataKey="name">
                            {(rowData) => {
                                return rowData.groupe === 7 ? (<p>{rowData.name} (<strong className='txt-admin'>Admin</strong>)</p>) : (<p>{rowData.name}</p>);
                            }}
                        </Cell>
                    </Column>

                    <Column width={widthScreen < 1024 ? 100 : widthScreen > 1300 ? 215 : 100} fixed sortable>
                        <HeaderCell>Niveau</HeaderCell>
                        <Cell dataKey="level" />
                    </Column>

                    <Column width={widthScreen < 1024 ? 150 : widthScreen > 1300 ? 250 : 150} sortable>
                        <HeaderCell>Expérience</HeaderCell>
                        <Cell dataKey="xp">
                            {(rowData) => {
                                return formatXp(rowData.xp);
                            }}
                        </Cell>
                    </Column>

                    <Column width={widthScreen < 1024 ? 150 : widthScreen > 1300 ? 215 : 150} sortable>
                        <HeaderCell>Omega</HeaderCell>
                        <Cell dataKey="omega" />
                    </Column>
                </Table>
                ) : (
                    <div className='para-pos'>
                        <ChartIcon color="red" />
                        <p>Vous êtes actuellement sur un appareil mobile, si vous souhaitez consulter le classement, faites le depuis un ordinateur.</p>
                    </div>
                )}
            </Container>

            <Container className='ladder-deco'>
                <div className='image-bg'></div>
                <img src={ImgTopHome} alt="L'éniripsa le soigneur de dofus, en version fan art. (fanart dofus)" className='img-top-home'/>     
            </Container>
        </main>
    )
}

export default Ladder;