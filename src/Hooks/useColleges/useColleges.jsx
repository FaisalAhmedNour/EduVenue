import { useQuery } from "@tanstack/react-query";

const useColleges = (name) => {

    const { data: colleges = [], refetch } = useQuery(['colleges'], async () => {
        const res = await fetch(`http://localhost:5000/colleges?name=${name}`)   
        return res.json();
    })

    return [colleges, refetch]
};

export default useColleges;
