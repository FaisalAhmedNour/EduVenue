import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const CollegeDetails = () => {

    const { id } = useParams();

    const { data: colleges } = useQuery(['colleges', id], async () => {
        const res = await fetch(`http://localhost:5000/colleges/${id}`)
        return res.json();
    })

    // const { name, picture, admission_process, admission_date, events } = colleges;
    console.log(colleges);

    return (
        <div className="mb-5">
            <div className="flex gap-5 py-5">
                <div className="rounded-md overflow-hidden w-2/3">
                    <img src={colleges?.picture} className="w-full" alt="" />
                </div>
                <div className="p-5 bg-white w-1/3 rounded-md">
                    <p className="font-bold text-xl text-[#1e2434] mb-4"> {colleges?.name}</p>
                    <p>
                        <span className="font-semibold">Admission process: </span>
                        <span>{colleges?.admission_process}</span>
                    </p>
                    <p className="mt-4"><span className="font-semibold">Admission date: </span><span className="text-error">{colleges?.admission_date}</span></p>
                </div>
            </div>
            <div className="bg-white p-5 rounded-lg">
                <h2 className="text-center text-2xl font-semibold my-5">Events</h2>
                <table className="">
                    {
                        colleges?.events?.map((event, index) => <tr key={index} className="">
                            <td className="font-semibold border border-1 p-2 align-top w-">{event.event_name}</td><td className="border border-1 p-2 align-top">{event.event_details}</td>
                        </tr>)
                    }
                </table>
            </div>
            <div className="bg-white p-5 rounded-lg mt-5">
                <h2 className="text-center text-2xl font-semibold my-5">Researches</h2>
                <table className="">
                    {
                        colleges?.research_works?.map((research_work, index) => <tr key={index} className="">
                            <td className="font-semibold border border-1 p-2 align-top w-">{research_work?.research_name}</td><td className="border border-1 p-2 align-top">{research_work?.research_details}</td>
                        </tr>)
                    }
                </table>
            </div>
            <div className="bg-white p-5 rounded-lg mt-5">
                <h2 className="text-center text-2xl font-semibold my-5">Sports</h2>
                <table className="">
                    {
                        colleges?.sports?.map((sport, index) => <tr key={index} className="">
                            <td className="font-semibold border border-1 p-2 align-top w-">{sport?.sports_category}</td><td className="border border-1 p-2 align-top">{sport?.sports_details}</td>
                        </tr>)
                    }
                </table>
            </div>
        </div>
    );
};

export default CollegeDetails;