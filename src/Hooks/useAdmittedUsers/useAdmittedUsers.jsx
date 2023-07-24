import { useQuery } from "@tanstack/react-query";

const useAdmittedUsers = () => {

    const { data: admitted_users = [], refetch } = useQuery(['admitted_users'], async () => {
        const res = await fetch(`https://eduvenueserver.vercel.app/admitted_users`)
        return res.json();
    })

    return [admitted_users, refetch]
};

export default useAdmittedUsers;
