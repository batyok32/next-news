function ImageInput({ name, full_name, icon, image, handleChangeImage }) {
    return (
        <div style={{ marginBottom: "2rem" }}>
            <label
                htmlFor={name}
                role="button"
                className="form-label text-gray w-100 py-0 fw-bold fs-6 d-inline-flex flex-column "
                style={{ fontSize: "14px" }}
            >
                <div
                    className="btn btn-outline-primary  w-75 mx-auto"
                    style={{ borderRadius: "30px" }}
                >
                    {full_name}
                </div>
                {image?.preview && (
                    <div className="d-flex align-items-center justify-content-center">
                        <img
                            src={image?.preview}
                            alt="dummy"
                            width="300"
                            className="my-2"
                            style={{ borderRadius: "10px" }}
                            height="300"
                        />
                    </div>
                )}
            </label>
            <input
                type="file"
                className="d-none"
                id={name}
                accept="image/png, image/jpeg, image/webp"
                onChange={handleChangeImage}
                required
            />
        </div>
    );
}

export default ImageInput;
