import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";
import useUser from "../../Hooks/useUsers/useUsers";

const Profile = () => {

    const { user, logOut } = useContext(AuthContext)

    const [currentUser, refetch] = useUser(user?.email)
    refetch()
    // console.log(currentUser)

    const handleLogout = () => {
        logOut()
        .then()
    }

    return (
        <div>
            <div className="my-5 w-full">
                <div className=" w-full">
                    <div className="card flex-shrink-0 shadow-2xl bg-base-100 mx-10">
                        <div className="card-body">
                            <h2 className="text-center font-semibold text-2xl">Profile</h2>
                            <table className="">
                                <tr className="leading-[90px]">
                                    <td className="ps-20 w-1/3 font-bold text-xl">Name</td>
                                    :
                                    <td className="font-semibold text-xl">{currentUser?.name}</td>
                                </tr>
                                <tr className="leading-[90px]">
                                    <td className="ps-20 w-1/3 font-bold text-xl">Email</td>
                                    :
                                    <td className="font-semibold text-xl">{currentUser?.email}</td>
                                </tr>
                                <tr className="leading-[90px]">
                                    <td className="ps-20 w-1/3 font-bold text-xl">University</td>
                                    :
                                    <td className="font-semibold text-xl">{currentUser?.university ? currentUser?.university : "Not set yet"}</td>
                                </tr>
                                <tr className="leading-[90px]">
                                    <td className="ps-20 w-1/3 font-bold text-xl">Address</td>
                                    :
                                    <td className="font-semibold text-xl">{currentUser?.address ? currentUser?.address : "Not set yet"}</td>
                                </tr>
                            </table>
                            <div className="flex justify-center gap-5">
                                <Link to={`/edit_profile`}>
                                    <button className="btn bg-[#455dca] text-white hover:bg-[#293b8a]">
                                        Edit Profile
                                        <i className="fa-solid fa-pen"></i>
                                    </button>
                                </Link>
                                <div>
                                    <button onClick={handleLogout} className="btn btn-error text-white hover:bg-[#b9301e]">
                                        Log Out
                                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;