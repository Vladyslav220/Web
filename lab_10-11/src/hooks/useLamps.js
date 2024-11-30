
import { useState, useEffect } from 'react';
import axios from 'axios';

function useLamps(searchTerm, sort, idOption, price) {
    const [lamps, setLamps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchLamps = async () => {
            setLoading(true);

            try {
                const response = await axios.get('http://localhost:3000/api/lamps', {
                    params: { searchTerm, sort, idOption, price }
                });
                setLamps(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchLamps();
    }, [searchTerm, sort, idOption, price]);

    return { lamps, loading, error };
}

export default useLamps;
