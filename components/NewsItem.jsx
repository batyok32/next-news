import Image from "next/image";
import { useRouter } from "next/router";

export default function NewsItem({ id, image, title, description }) {
    const router = useRouter();
    const handleRedirect = () => {
        router.push("/news/" + id);
    };
    return (
        <div className="card_container p-3">
            <div className="card my-2">
                <div
                    className="position-relative"
                    style={{ height: "12rem", width: "100%" }}
                >
                    <Image
                        src={image}
                        layout="fill"
                        objectFit="cover"
                        className="card-img-top"
                        alt="..."
                    />
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div className="d-flex justify-content-center">
                        <div
                            onClick={handleRedirect}
                            className="btn btn-primary w-75"
                            style={{ borderRadius: "30px" }}
                        >
                            Go detail
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
