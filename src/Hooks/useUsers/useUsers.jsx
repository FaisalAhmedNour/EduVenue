
import { useQuery } from "@tanstack/react-query";

const useUsers = (email) => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch(`https://eduvenueserver.vercel.app/users/${email}`)
        return res.json();
    })

    return [users, refetch]
};

export default useUsers;
