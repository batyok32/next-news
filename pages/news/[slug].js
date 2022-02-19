import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import Image from "next/image";

export default function NewsDetail({ data }) {
    return (
        <>
            <Head>
                <title>{data?.title} | Medium Blog</title>
                <link rel="shortcut icon" href="/512.png" type="image/x-icon" />
            </Head>
            <div className="card_container p-3 w-75 mx-auto">
                <div className="card my-2 border-0">
                    <div
                        className="position-relative"
                        style={{ height: "25rem", width: "100%" }}
                    >
                        <Image
                            src={data?.image ? data?.image : "/512.png"}
                            layout="fill"
                            objectFit="cover"
                            className="card-img-top"
                            alt="..."
                        />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-center">
                            {data?.title}
                        </h5>
                        <p className="card-text">{data?.fullBody}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

// LOGIC:
// Try to find this page in cache
// If found shows cache if not send req and get cache forever
export async function getStaticProps(context) {
    // console.log("In static props");
    const client = await MongoClient.connect(
        "mongodb+srv://batyr:batyrbet@cluster0.f67kr.mongodb.net/newsDB?retryWrites=true&w=majority"
    );
    const db = client.db();

    const postsCollection = db.collection("posts");

    const selectedPost = await postsCollection.findOne({
        _id: ObjectId(context.params.slug),
    });
    // console.log("Got post", selectedPost);
    client.close();
    return {
        props: {
            data: {
                id: selectedPost?._id.toString(),
                title: selectedPost?.title,
                description: selectedPost?.description,
                image: selectedPost?.image,
                fullBody: selectedPost?.fullBody,
            },
        },
    };
}

// LOGIC:
// Try to get this post from db using id in url
export async function getStaticPaths() {
    // console.log("In static paths");
    const client = await MongoClient.connect(
        "mongodb+srv://batyr:batyrbet@cluster0.f67kr.mongodb.net/newsDB?retryWrites=true&w=majority"
    );
    const db = client.db();

    const postsCollection = db.collection("posts");

    // First one is filter
    // Second one is values
    const posts = await postsCollection.find({}, { _id: 1 }).toArray();
    // console.log("Posts in static paths", posts);
    client.close();
    return {
        paths: posts.map((post) => ({
            params: {
                slug: post._id.toString(),
            },
        })),
        fallback: "blocking",
    };
}
