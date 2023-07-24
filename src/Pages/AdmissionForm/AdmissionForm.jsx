import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const AdmissionForm = () => {
    const id = useParams();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        const submitForm = {
            name: data.name,
            subject: data.subject,
            email: data.email,
            phone: data.phone,
            address: data.address,
            birth_date: data.birth_date
        }
        console.log(submitForm)
        // console.log(submitForm);
        // fetch('https://camp-sportopia-server-faisalahmednour.vercel.app/classes', {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(submitForm)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             reset()
        //             Swal.fire({
        //                 position: 'center',
        //                 icon: 'success',
        //                 title: 'Successfully Added class...',
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             })
        //         }
        //     })
    };

    return (
        <div>
            <div className="my-5 w-full">
                <div className=" w-full">
                    <div className="card flex-shrink-0 shadow-2xl bg-base-100 mx-10">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h2 className="text-center font-semibold text-2xl">Admission Form</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Candidate Name"
                                    className="input input-bordered"
                                    {...register("name", { required: true })}
                                />
                                {errors.name && <span className='text-[red] text-xs ms-1'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Subject</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="input input-bordered"
                                    {...register("subject", { required: true })}
                                />
                                {errors.subject && <span className='text-[red] text-xs ms-1'>This field is required</span>}
                            </div>
                            <div className="grid grid-cols-2 gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">Candidate  Email</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="email"
                                        className="input input-bordered"
                                        {...register("email", { required: true })}
                                    />
                                    {errors.email && <span className='text-[red] text-xs ms-1'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">Candidate Phone number</span>
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Phone number"
                                        className="input input-bordered"
                                        {...register("number", { required: true })}
                                    />
                                    {errors.number && <span className='text-[red] text-xs ms-1'>This field is required</span>}
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Address</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="address"
                                    className="input input-bordered"
                                    {...register("address", { required: true })}
                                />
                                {errors.address && <span className='text-[red] text-xs ms-1'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">date of birth</span>
                                </label>
                                <input
                                    type="date"
                                    className="input input-bordered"
                                    {...register("birth_date", { required: true })}
                                />
                                {errors.birth_date && <span className='text-[red] text-xs ms-1'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Image</span>
                                </label>
                                <input type="file" />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdmissionForm;