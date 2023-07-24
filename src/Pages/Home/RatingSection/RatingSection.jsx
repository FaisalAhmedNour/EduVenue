import useRatings from "../../../Hooks/useRatings/useRatings";

const RatingSection = () => {
    const [ratings] = useRatings();
    console.log(ratings)
    return (
        <div className="mb-20">
            <h2 className="text-center font-bold text-2xl">People Says</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                {
                    ratings.map(rating => <div key={rating._id} className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{rating?.college_name}</h2>
                            <p></p>
                            <p className="flex justify-between">
                                <p><span>Name: </span>{rating?.name}</p>
                                <div className="rating rating-sm">
                                    <input disabled type="radio" name="rating-2" className={`mask mask-star-2 ${parseInt(rating?.rating) >= 1 ? "bg-orange-400" : "bg-[#c2a8a8]"} `} />
                                    <input disabled type="radio" name="rating-2" className={`mask mask-star-2 ${parseInt(rating?.rating) >= 2 ? "bg-orange-400" : "bg-[#c2a8a8]"} `} />
                                    <input disabled type="radio" name="rating-2" className={`mask mask-star-2 ${parseInt(rating?.rating) >= 3 ? "bg-orange-400" : "bg-[#c2a8a8]"} `} />
                                    <input disabled type="radio" name="rating-2" className={`mask mask-star-2 ${parseInt(rating?.rating) >= 4 ? "bg-orange-400" : "bg-[#c2a8a8]"} `} />
                                    <input disabled type="radio" name="rating-2" className={`mask mask-star-2 ${parseInt(rating?.rating) >= 5 ? "bg-orange-400" : "bg-[#c2a8a8]"} `} />
                                </div>
                            </p>
                            <div className="card-actions justify-end">
                                <p>{rating?.saying}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default RatingSection;