import NewsItem from "./NewsItem";

export default function NewsList({ news }) {
    return (
        <div className="container">
            <h1 className="my-4">News</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 my-3 ">
                {news.map((story) => (
                    <NewsItem
                        key={story.id}
                        id={story.id}
                        image={story.image}
                        title={story.title}
                        description={story.description}
                    />
                ))}
            </div>
        </div>
    );
}
