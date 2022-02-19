import Head from "next/head";
import NewsForm from "../../components/Add_News/NewsForm";

export default function NewsPage() {
    const addStory = async (data) => {
        const response = await fetch("/api/new-post", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const resData = await response.json();
    };
    return (
        <>
            <Head>
                <title>Add a post | Medium</title>
                <link rel="shortcut icon" href="/512.png" type="image/x-icon" />
            </Head>
            <div className="container py-5">
                <h1 className="text-center">
                    Do you really want to create story
                </h1>
                <div className="row justify-content-center my-5">
                    <div className="col-10 col-md-7 col-lg-5">
                        <NewsForm addStory={addStory} />
                    </div>
                </div>
            </div>
        </>
    );
}
