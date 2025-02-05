import NewsCard from "./NewsCard";

const ExtraSecondSection = () => {
    const newsSection = [
        {
            id: 1,
            title: "Top 50 Action Movies",
            date: "01/02/2018",
            description:
                "Dive into our curated list of the top 50 action movies that will keep you on the edge of your seat with stunning stunts.",
            image: "https://i.ibb.co.com/nn5y4jn/john-wick-2017-image-3840x2400.jpg",
            url: "https://m.imdb.com/search/title/?genres=action&explore=genres&title_type=feature"
        },
        {
            id: 2,
            title: "Oscar Awards",
            date: "01/02/2018",
            description:
                "Discover the latest updates and winners of the Oscars, celebrating the finest achievements in cinema.",
            image: "https://i.ibb.co.com/ysTBs1Q/hollywood-golden-oscar-academy-award-600nw-2420431817.webp",
            url: "https://www.imdb.com/event/ev0000003/2024/1/"
        },
        {
            id: 3,
            title: "Top Upcoming Movies",
            date: "01/02/2018",
            description:
                "Get a sneak peek at the top upcoming movies that are set to make waves in theaters worldwide.",
            image: "https://i.ibb.co.com/kMcJzYf/2025.webp",
            url: "https://www.imdb.com/search/title/?title_type=feature&release_date=2025-01-01,2025-12-31"
        },
    ];

    return (
        <section className="dark:bg-forDark2 py-28">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <h1 className="text-white font-montserrat font-bold text-2xl lg:text-5xl mb-5">Latest News</h1>
                    <p className="text-textSecondary font-roboto lg:w-1/2 text-center font-light mb-10">Stay updated with the latest happenings in the world of cinema, from blockbuster releases to award highlights and exclusive previews of upcoming movies.</p>
                </div>
                <div className="flex items-center justify-center flex-col lg:flex-row gap-10 bg-offWhite dark:bg-background py-10 xl:rounded-3xl px-3 xl:px-0">
                    {
                        newsSection.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ExtraSecondSection;