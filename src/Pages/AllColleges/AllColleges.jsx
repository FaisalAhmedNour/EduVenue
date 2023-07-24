import { Link } from "react-router-dom";
import useColleges from "../../Hooks/useColleges/useColleges";

const AllColleges = () => {

    const [colleges] = useColleges('');

    return (
        <div className="my-10">
            <p className="text-center text-2xl font-bold text-[#101030] mb-5">All Colleges</p>
            <div className="grid grid-cols-3 gap-5">
                {
                    colleges.map(college => <div key={college._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure className="w-full h-[200px]"><img src={college?.picture} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{college?.name}</h2>
                            <div className="rating rating-sm">
                                <input disabled type="radio" name="rating-2" className={`mask mask-star-2 ${parseInt(college?.Rating) >= 1 ? "bg-orange-400" : "bg-[#c2a8a8]"} `} />
                                <input disabled type="radio" name="rating-2" className={`mask mask-star-2 ${parseInt(college?.Rating) >= 2 ? "bg-orange-400" : "bg-[#c2a8a8]"} `} />
                                <input disabled type="radio" name="rating-2" className={`mask mask-star-2 ${parseInt(college?.Rating) >= 3 ? "bg-orange-400" : "bg-[#c2a8a8]"} `} />
                                <input disabled type="radio" name="rating-2" className={`mask mask-star-2 ${parseInt(college?.Rating) >= 4 ? "bg-orange-400" : "bg-[#c2a8a8]"} `} />
                                <input disabled type="radio" name="rating-2" className={`mask mask-star-2 ${parseInt(college?.Rating) >= 5 ? "bg-orange-400" : "bg-[#c2a8a8]"} `} />
                            </div>
                            <p className="font-medium">Admission date: {college?.admission_date}</p>
                            <p className="font-medium">Number of the research: {college?.research_works?.length}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/details/${college?._id}`} className="w-full">
                                    <button className="btn btn-success w-full btn-sm">Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllColleges;