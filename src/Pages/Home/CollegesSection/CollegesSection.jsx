// import colleges from '../../../../public/college_details.json'
import { useState } from 'react';
import useColleges from '../../../Hooks/useColleges/useColleges';
import CollegeCard from '../../../components/CollegeCard/CollegeCard';
import { Link } from 'react-router-dom';

const CollegesSection = () => {

    // -----------------------TODO: set search properly----------------------------------
    const [name, setName] = useState('');
    const [colleges, refetch] = useColleges(name);
    // const onChange = ({ target }) => console.log(target.value);
    const onChange = ({ target }) => {
        target.value ? setName(target.value) : setName('')
        refetch();
    };

    const onSubmit = event => {
        event.preventDefault()
        console.log(event.target.name.value);
        event.target.name.value ? setName(event.target.name.value) : setName('');
    }
    // console.log(colleges.length)
    const displayColleges = colleges.length > 3 ? colleges.slice(0, 3) : colleges;
    return (
        <div>
            <div className="py-16">
                <p className="text-center text-2xl font-bold text-[#101030] mb-5">Top Colleges</p>
                <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                    <div className="md:flex">
                        <div className="w-full p-3">
                            <form className="relative" onSubmit={onSubmit}>
                                <i className="absolute fa fa-search text-gray-400 top-5 left-4" />
                                <input
                                    type="text"
                                    className="bg-white h-14 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
                                    onChange={onChange}
                                    name='name'
                                />
                                <span className="absolute top-4 right-5 border-l pl-4">
                                    <i className="fa-solid fa-xmark text-gray-500 hover:text-red-500 hover:cursor-pointer"></i>
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    {
                        // TODO: change the key
                        displayColleges.map(college => <CollegeCard
                            key={college._id}
                            college={college}
                        ></CollegeCard>)
                    }
                </div>
                <div className='text-center'>
                    <Link to='/colleges' onClick={refetch}>
                        <button className="btn hover:btn-success hover:text-white">
                            View All
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CollegesSection;