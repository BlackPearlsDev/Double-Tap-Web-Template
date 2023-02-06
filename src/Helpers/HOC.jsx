import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Error from "../Components/Error";

/********** USERS **********/
import { checkToken } from "../services/API/user";
import { login, logout } from '../store/slices/user.slice';
import { loadUsers } from "../store/slices/user.slice";
import { getAll } from "../services/API/user";

/********** LADDER **********/
import { loadLadder } from "../store/slices/ladder.slice";
import { getAllLadder } from "../services/API/ladder";

function HOC({ child, isAuthRequired, isAdminRequired }) {
    const navigate = useNavigate();

    const [fetchError, setFetchError] = useState(false);
    
    const dispatch = useDispatch();
    const { listUsers, userInfos, isLogged, listLadder } = useSelector((state) => ({...state.user, ...state.users, ...state.ladder}));

    useEffect(()=>{
        async function checkAuth(){
            const TOKEN = localStorage.getItem("auth_token");
            if(isLogged && !TOKEN) {
                dispatch(logout());
                navigate("/");
            }

            if(!isLogged) {
                if(isAuthRequired && !TOKEN) {
                    dispatch(logout());
                    navigate("/");
                }
                
                if(TOKEN !== null) {
                    const res = await checkToken(TOKEN);
                    if(res.status === 200){
                        dispatch(login(res.data.result));
                    }
                }
            }
        }
        checkAuth();
        // eslint-disable-next-line
    }, [child]);

    // block access to admin page if user is not admin
    useEffect(() => {
        if(isAdminRequired && userInfos?.role_id !== 2) {
            navigate("/");
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (!listUsers.length) {
            async function fetchData() {
                const res = await getAll();
                if (res.status !== 200) {
                    setFetchError(true);
                    return;
                }
                dispatch(loadUsers(res.data.result));
            }
            fetchData();
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (!listLadder.length) {
            async function fetchData() {
                const res = await getAllLadder();
                if (res.status !== 200) {
                    setFetchError(true);
                    return;
                }
                dispatch(loadLadder(res.data));
            }
            fetchData();
        }
        // eslint-disable-next-line
    }, []);

    const Child = child;

    if (fetchError) {
        return <Error />;
    }

    return (
        <>
            {!listUsers.length ? (
                 <p className="loadingData">Chargement des données ...</p>
             ) : (
                    <Child userInfos={userInfos} listUsers={listUsers} ladderInfos={listLadder} />
            )}
        </>
    );
}

export default HOC;