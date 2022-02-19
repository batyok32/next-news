import Link from "next/link";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light  bg-warning py-3">
            <div className="container ">
                <Link href="/">
                    <a className="navbar-brand">Medium</a>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul
                        className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                        style={{ "--bs-scroll-height": "100px" }}
                    >
                        <li className="nav-item">
                            <Link href="/news/new">
                                <a
                                    className="nav-link active "
                                    aria-current="page"
                                >
                                    Add Post
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                >
                                    All Posts
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex position-relative">
                        <input
                            className="form-control me-2 border-0 px-4"
                            type="search"
                            style={{ borderRadius: "20px", boxShadow: "none" }}
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            className="btn position-absolute"
                            type="button"
                            style={{
                                borderRadius: "30px",
                                right: "10px",
                                border: "1px solid lightgray",
                            }}
                        >
                            S
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
