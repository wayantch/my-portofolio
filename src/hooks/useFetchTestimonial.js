import { useEffect, useState } from "react";
import api from "../api/api";

const useFetchTestimonial = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/testimonials');
                setTestimonials(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { loading, error, testimonials };
};

export default useFetchTestimonial;
