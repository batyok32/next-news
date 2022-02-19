import { useRouter } from "next/router";
import { useState } from "react";
// import ImageInput from "./ImageInput";

export default function NewsForm({ addStory }) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: "/test.jpeg",
        // image: { preview: "", raw: "" },
        fullBody: "",
    });
    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const submitHandler = (e) => {
        e.preventDefault();
        addStory(formData);
        router.push("/");
    };
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label ">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="nameInput"
                        name="title"
                        value={formData.title}
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="descInput" className="form-label">
                        Description
                    </label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={(e) => onChange(e)}
                        className="form-control"
                        id="descInput"
                        cols="10"
                        rows="5"
                        required
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="bodyInput" className="form-label">
                        Body
                    </label>
                    <textarea
                        name="fullBody"
                        value={formData.fullBody}
                        onChange={(e) => onChange(e)}
                        className="form-control"
                        id="bodyInput"
                        cols="50"
                        rows="5"
                        required
                    ></textarea>
                </div>

                <div className="d-flex justify-content-center">
                    <button
                        type="submit"
                        className="btn btn-primary w-75"
                        style={{ borderRadius: "30px" }}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

// const handleChangeImage = (e) => {
//     if (e.target.files.length) {
//         setFormData({
//             ...formData,
//             image: {
//                 preview: URL.createObjectURL(e.target.files[0]),
//                 raw: e.target.files[0],
//             },
//         });
//     }
// };
{
    /* <ImageInput
                    name="upload-logo"
                    full_name="Загрузить изображение"
                    icon="bi-image"
                    image={formData.image}
                    handleChangeImage={handleChangeImage}
                /> */
}
