import { Link } from "react-router-dom";
import useColleges from "../../Hooks/useColleges/useColleges";

const Admission = () => {

    const [colleges] = useColleges('');
    console.log(colleges);

    return (
        <div className="grid grid-cols-3 gap-5 py-10">
            {
                colleges.map(college => <Link to={`/admission_form/${college?._id}`} key={college?._id}>
                    <div className="bg-white py-4 px-5 font-semibold flex justify-between align-middle">
                        <p>{college?.name}</p>
                        <i className="fa-solid fa-arrow-right-long mt-1"></i>
                    </div>
                </Link>)
            }
        </div>
    );
};

export default Admission;