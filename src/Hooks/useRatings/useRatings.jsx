import { useQuery } from "@tanstack/react-query";

const useRatings = () => {

    const { data: ratings = [], refetch } = useQuery(['ratings'], async () => {
        const res = await fetch(`http://localhost:5000/ratings`)
        return res.json();
    })

    return [ratings, refetch]
};

export default useRatings;
