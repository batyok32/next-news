import { MongoClient } from "mongodb";
import Head from "next/head";
import NewsList from "../components/NewsList";

export default function HomePage(props) {
    return (
        <>
            <Head>
                <title>Medium Blog</title>
                <link rel="shortcut icon" href="/512.png" type="image/x-icon" />
            </Head>

            <NewsList news={props.news} />
        </>
    );
}

export async function getStaticProps() {
    // console.log("in post lists");
    const client = await MongoClient.connect(
        "mongodb+srv://batyr:batyrbet@cluster0.f67kr.mongodb.net/newsDB?retryWrites=true&w=majority"
    );
    const db = client.db();

    const postsCollection = db.collection("posts");

    const news = await postsCollection.find().toArray();

    client.close();
    return {
        props: {
            news: news.map((post) => ({
                title: post.title,
                description: post.description,
                image: post.image,
                fullBody: post.fullBody,
                id: post._id.toString(),
            })),
        },
        revalidate: 300,
    };
    // revalidate = seconds to refresh db cache at server
}
