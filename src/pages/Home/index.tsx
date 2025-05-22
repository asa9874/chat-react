import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('jwt');
        if (!token) {
            navigate('/login');
        }
        else{
            navigate('/friend');
        }
    }, [navigate]);

    return (
        <>
            <h1>홈 페이지</h1>
        </>
    );
}

export default Home;