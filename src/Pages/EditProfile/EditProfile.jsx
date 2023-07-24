import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders/AuthProviders";
import useUser from "../../Hooks/useUsers/useUsers";
import Swal from "sweetalert2";

const EditProfile = () => {

    const { user } = useContext(AuthContext)

    const [currentUser, refetch] = useUser(user?.email)
    refetch()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const updatedUser = {
            name: data.name,
            email: data.email,
            university: data.university,
            address: data.address,
        }
        console.log(updatedUser)
        fetch(`http://localhost:5000/users/${currentUser.email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully Added class...',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };

    return (
        <div>
            <div className="my-5 w-full">
                <div className=" w-full">
                    <div className="card flex-shrink-0 shadow-2xl bg-base-100 mx-10">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h2 className="text-center font-semibold text-2xl">Profile</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Name</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={currentUser?.name}
                                    className="input input-bordered"
                                    {...register("name", { required: false })}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Email</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={currentUser?.email}
                                    placeholder="email"
                                    className="input input-bordered"
                                    {...register("email", { required: false })}
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">University</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={currentUser?.university ? currentUser?.university : ''}
                                    placeholder="Name of your University/College"
                                    className="input input-bordered"
                                    {...register("university", { required: false })}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Address</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={currentUser?.address ? currentUser?.address : ''}
                                    placeholder="address"
                                    className="input input-bordered"
                                    {...register("address", { required: false })}
                                />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;