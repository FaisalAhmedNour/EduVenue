import { Link } from "react-router-dom";

const Research = () => {
    return (
        <div className="my-20">
            <h2 className="text-center text-2xl font-bold text-[#101030] mb-5">Researches</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="p-3 rounded-md bg-white flex flex-col justify-between">
                    <div className="space-y-3">
                        <img className="rounded-md  w-full" src="https://www.mit.edu/files/images/201807/MIT-Brain-Drug-Delivery-03.jpg" alt="" />
                        <h2 className="font-semibold text-xl uppercase">Centers, Labs & Programs</h2>
                        <p>MIT continually develops organizations and partnerships that foster interdisciplinary work. Listed here are just some of the MIT labs, centers, and programs where groundbreaking research is happening every day.</p>
                    </div>
                    <div className="mt-5">
                        <Link to='https://home.liebertpub.com/publications/676/pdf' target="block" className="w-full">
                            <button className="btn btn-success w-full btn-sm">Download</button>
                        </Link>
                    </div>
                </div>
                <div className="p-3 rounded-md space-y-3 bg-white flex flex-col justify-between">
                    <div>
                        <img className="rounded-md  w-full" src="https://www.mit.edu/files/images/201807/MIT-Sole-Vibes_0.jpg" alt="" />
                        <h2 className="font-semibold text-xl uppercase">Collaborating Institutions</h2>
                        <p>MIT researchers collaborate with many leading local, national, and international organizations to further drive exploration.</p>
                    </div>
                    <div className="mt-5">
                        <Link to='https://home.liebertpub.com/publications/676/pdf' target="block" className="w-full">
                            <button className="btn btn-success w-full btn-sm">Download</button>
                        </Link>
                    </div>
                </div>
                <div className="p-3 rounded-md space-y-3 bg-white flex flex-col justify-between">
                    <div>
                        <img className="rounded-md  w-full" src="https://www.ornl.gov/sites/default/files/styles/large/public/2019-06/2018-p09444.jpg?itok=Gn_T-LLG" alt="" />
                        <h2 className="font-semibold text-xl uppercase">Fueling America’s R&D Engine</h2>
                        <p>The results of Rutgers research impact our quality of life, promote prosperity, and enrich humanity in so many ways—from detecting nuclear threats and crime to creating the world’s biggest network of ocean data to exploring the central nervous system.</p>
                    </div>
                    <div className="mt-5">
                        <Link to='https://home.liebertpub.com/publications/676/pdf' target="block" className="w-full">
                            <button className="btn btn-success w-full btn-sm">Download</button>
                        </Link>
                    </div>
                </div>
                <div className="p-3 rounded-md space-y-3 bg-white flex flex-col justify-between">
                    <div>
                        <img className="rounded-md  w-full" src="https://www.stanford.edu/wp-content/uploads/2017/03/neuroscience-highlight-1499x938.jpg" alt="" />
                        <h2 className="font-semibold text-xl uppercase">Stanford Bio-X</h2>
                        <p>Biomedical and life science researchers, clinicians, engineers, physicists and computational scientists come together to unlock the secrets of the human body.</p>
                    </div>
                    <div className="mt-5">
                        <Link to='https://home.liebertpub.com/publications/676/pdf' target="block" className="w-full">
                            <button className="btn btn-success w-full btn-sm">Download</button>
                        </Link>
                    </div>
                </div>
                <div className="p-3 rounded-md space-y-3 bg-white flex flex-col justify-between">
                    <div>
                        <img className="rounded-md  w-full" src="https://caltech-prod.s3.amazonaws.com/main/images/White-Dwarf-20230505-Magnetic-400p12c64.width-450.gif" alt="" />
                        <h2 className="font-semibold text-xl uppercase">Two-Faced Star Exposed</h2>
                        <p>In a first for white dwarfs, the burnt-out cores of dead stars, astronomers have discovered that at least one member of this cosmic family is two faced. One side of the white dwarf is composed of hydrogen, while the other is made up of helium.</p>
                    </div>
                    <div className="mt-5">
                        <Link to='https://home.liebertpub.com/publications/676/pdf' target="block" className="w-full">
                            <button className="btn btn-success w-full btn-sm">Download</button>
                        </Link>
                    </div>
                </div> 
                <div className="p-3 rounded-md space-y-3 bg-white flex flex-col justify-between">
                    <div>
                        <img className="rounded-md w-full" src="https://www.jhu.edu/assets/uploads/2016/05/neural-progenitor-cells-360x240.jpg" alt="" />
                        <h2 className="font-semibold text-xl uppercase">Zika&apos;s impact on early brain development</h2>
                        <p>A team of researchers have discovered what appears to be a significant biological link between Zika virus and microcephaly, a birth defect linked to abnormally small head size and stunted brain development in newborns.</p>
                    </div>
                    <div className="mt-5">
                        <Link to='https://home.liebertpub.com/publications/676/pdf' target="block" className="w-full">
                            <button className="btn btn-success w-full btn-sm">Download</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Research;