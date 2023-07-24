import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {
    const { picture, name, research_history, events, sports, admission_date, _id } = college
    return (
        <div className="card card-side bg-base-100 shadow-xl mb-5 flex flex-col lg:flex-row">
            <figure className=" lg:w-1/2"><img src={picture} className="w-full h-full" alt="Album" /></figure>
            <div className="card-body lg:w-1/2">
                <h2 className="card-title text-2xl">{name}</h2>
                <p><span className="font-semibold">Research History: </span>{research_history}</p>
                <p><span className="font-semibold">Events: </span><br />
                {
                        // events.map(event => console.log(event.event_name))
                        events.map(event => <button key={_id} className="btn btn-xs btn-primary mr-1 mb-1 no-animation">{event.event_name}</button>)
                }
                </p>
                <p><span className="font-semibold">Sports: </span><br />
                    {
                        // events.map(event => console.log(event.event_name))
                        sports.map(sport => <button key={_id} className="btn btn-xs btn-primary mr-1 mb-1 no-animation">{sport.sports_category}</button>)
                    }</p>
                <p span className="font-semibold">Admission date: <span className="text-error">{admission_date}</span></p>
                <div className="card-actions">
                    <Link to={`/details/${_id}`} className="w-full"><button className="btn btn-sm btn-success btn-block text-white">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CollegeCard;