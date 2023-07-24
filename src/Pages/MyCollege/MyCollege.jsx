import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";
import { Link } from "react-router-dom";
import useAdmittedUsers from "../../Hooks/useAdmittedUsers/useAdmittedUsers";

const MyCollege = () => {

    // const [users, setUsers] = useState([])

    const { user, setLoading } = useContext(AuthContext);
    // useEffect(() => {
    //     setLoading(true)
    //     fetch(`https://eduvenueserver.vercel.app/users`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setUsers(data)
    //             setLoading(false)
    //         })
    // }, [setLoading])

    // // console.log(users);
    // const currentUser = users.filter(usr => usr?.email === user?.email)
    // console.log(currentUser[0]);

    const [admitted_users] = useAdmittedUsers();
    const AdmittedUser = admitted_users.filter(usr => usr?.email === user?.email)
    // console.log(admitted_users,AdmittedUser);
    return (
        <div className="my-5 w-full">
            <div className=" w-full">
                <div className="card flex-shrink-0 shadow-2xl bg-base-100 mx-10">
                    <div className="card-body">
                        <h2 className="text-center font-semibold text-2xl">My College</h2>
                        <table className="">
                            <tr className="leading-[90px]">
                                <td className="md:ps-20 w-1/3 font-bold text-md md:text-xl">Name</td>
                                :
                                <td className="font-semiboldtext-md md:text-xl">{AdmittedUser[0]?.name}</td>
                            </tr>
                            <tr className="leading-[90px]">
                                <td className="md:ps-20 w-1/3 font-bold text-md md:text-xl">Email</td>
                                :
                                <td className="font-semiboldtext-md md:text-xl">{AdmittedUser[0]?.email}</td>
                            </tr>
                            <tr className="leading-[90px]">
                                <td className="md:ps-20 w-1/3 font-bold text-md md:text-xl">Number</td>
                                :
                                <td className="font-semiboldtext-md md:text-xl">{AdmittedUser[0]?.phone}</td>
                            </tr>
                            <tr className="leading-[90px]">
                                <td className="md:ps-20 w-1/3 font-bold text-md md:text-xl">Subject</td>
                                :
                                <td className="font-semiboldtext-md md:text-xl">{AdmittedUser[0]?.subject}</td>
                            </tr>
                            <tr className="leading-[90px]">
                                <td className="md:ps-20 w-1/3 font-bold text-md md:text-xl">Birth date</td>
                                :
                                <td className="font-semiboldtext-md md:text-xl">{AdmittedUser[0]?.birth_date}</td>
                            </tr>
                            <tr className="leading-[90px]">
                                <td className="md:ps-20 w-1/3 font-bold text-md md:text-xl">Address</td>
                                :
                                <td className="font-semiboldtext-md md:text-xl">{AdmittedUser[0]?.address}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCollege;