
const Banner = () => {
    return (
        <div className="hero min-h-[100vw] md:min-h-[80vh] rounded-md overflow-hidden mt-2" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1533854775446-95c4609da544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-white">Welcome Students</h1>
                    <p className="mb-5 text-white">Embrace the opportunity to be admitted into college, for within its halls lie the keys to unlock your potential and pave the way for a future filled with endless possibilities.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;