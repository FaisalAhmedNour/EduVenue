import { useQuery } from "@tanstack/react-query";

const useColleges = (name) => {

    const { data: colleges = [], refetch } = useQuery(['colleges'], async () => {
        const res = await fetch(`https://eduvenueserver.vercel.app/colleges?name=${name}`)
        return res.json();
    })

    return [colleges, refetch]
};

export default useColleges;
