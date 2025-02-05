import MovieCard from "../../MovieCard/MovieCard";

const ExtraPublicRouteOne = () => {

    const movies = [
        {
            _id: 1,
            title: "Pushpa 2: The Rule",
            poster: "https://i.ibb.co.com/Dgq6TSs/official-poster-of-pushpa-2-the-rule-v0-3v9i0uxybisa1.webp",
            genre: "Action, Drama",
            duration: 180,
            releaseYear: 2024,
            summary: "Pushpa rises to power in the red sandalwood smuggling empire while battling enemies within and outside. His ultimate showdown with Bhanwar Singh will determine his fate.",
            rating: 4.8,
        },
        {
            _id: 2,
            title: "Moana 2",
            poster: "https://i.ibb.co.com/26GGTy1/multiple-theatrical-formats-of-moana-2-mean-new-an.jpg",
            genre: "Animation, Adventure",
            duration: 105,
            releaseYear: 2025,
            summary: "Moana must set sail again, this time to uncover ancient secrets of her ancestors and protect her island from a mysterious force threatening its existence.",
            rating: 4.6,
        },
        {
            _id: 3,
            title: "Venom: The Last Dance",
            poster: "https://i.ibb.co.com/kxwMbBx/MV5-BZDMy-YWU4-Nz-It-ZDY0-MC00-ODE2-LTky-YTMt-Mz-Nk-NDdm-Ym-Fh-ZDg0-Xk-Ey-Xk-Fqc-Gc-V1-FMjpg-UX1000.jpg",
            genre: "Action, Sci-Fi",
            duration: 140,
            releaseYear: 2025,
            summary: "Eddie Brock and Venom face their ultimate enemy, an ancient symbiote that threatens to end humanity. The battle between good and evil takes an unexpected twist.",
            rating: 4.5,
        },
        {
            _id: 4,
            title: "Red One",
            poster: "https://i.ibb.co.com/YbTXRtb/MV5-BZm-Fk-Mj-E4-Nj-Qt-ZTVm-ZS00-MDZj-LWE2-Zm-Et-ZTkz-ODlj-Njhl-NWUx-Xk-Ey-Xk-Fqc-Gc-V1.jpg",
            genre: "Action, Comedy",
            duration: 120,
            releaseYear: 2024,
            summary: "A team of unlikely heroes sets out on a globetrotting adventure to recover stolen artifacts that could change the spirit of Christmas forever.",
            rating: 4.2,
        },
        {
            _id: 5,
            title: "Wicked",
            poster: "https://i.ibb.co.com/4YntFMM/wicked-elphaba-glinda-i247584.jpg",
            genre: "Musical, Fantasy",
            duration: 135,
            releaseYear: 2024,
            summary: "The untold story of Elphaba, the Wicked Witch of the West, and her journey from a misunderstood girl to one of the most powerful witches of Oz.",
            rating: 4.7,
        },
        {
            _id: 6,
            title: "Stree 2",
            poster: "https://i.ibb.co.com/TYsz3Sp/MV5-BNWIz-Zj-Vm-N2-Et-NGEy-My00-Mz-Vl-LWIx-Mm-It-Zj-Yz-ZGVj-Mz-Q3-N2-Vk-Xk-Ey-Xk-Fqc-Gc-V1.jpg",
            genre: "Horror, Comedy",
            duration: 130,
            releaseYear: 2024,
            summary: "The vengeful spirit of Stree returns to haunt the village, but this time, the villagers must uncover her true story to stop her once and for all.",
            rating: 4.3,
        },
        {
            _id: 7,
            title: "Dorod",
            poster: "https://i.ibb.co.com/8sZ4rCv/5424.jpg",
            genre: "Action, Romance",
            duration: 150,
            releaseYear: 2024,
            summary: "Dorod is an emotional rollercoaster where a man, fueled by love and revenge, takes on a corrupt system to protect the ones he loves.",
            rating: 4.6,
        },
    ];



    return (
        <section className="bg-gray-100 p-6">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-left border-l-4 border-red-500 pl-2">
                    Now Showing
                </h1>
                <div className="flex flex-col items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {movies.map((movie) => (
                            <MovieCard key={movie._id} movie={movie}></MovieCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExtraPublicRouteOne;