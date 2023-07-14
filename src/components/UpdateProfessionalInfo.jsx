import { Form, Formik } from "formik";
import { useFakeProfileContext } from "../context/FakeProfileContext";

export const UpdateProfessionalInfo = () => {

    const { socialMediaUrls, updateSocialMedia } = useFakeProfileContext();

    return (
        <div className="form-container">
            <Formik
                initialValues={socialMediaUrls}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    updateSocialMedia(values);
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <label>LinkedIn</label>
                            <input
                                type="text"
                                name="linkedin"
                                placeholder="Enter your linkedin url"
                                onChange={handleChange}
                                value={values.linkedin}
                            />
                        </div>
                        <div className="input-container">
                            <label>Github</label>
                            <input
                                name="github"
                                placeholder="Enter your github url"
                                onChange={handleChange}
                                value={values.github}
                            />
                        </div>
                        <div className="input-container">
                            <label>Twitter</label>
                            <input
                                name="twitter"
                                placeholder="Enter your twitter url"
                                onChange={handleChange}
                                value={values.twitter}
                            />
                        </div>
                        <div className="input-container">
                            <label>Instagram</label>
                            <input
                                name="instagram"
                                placeholder="Enter your instagram url"
                                onChange={handleChange}
                                value={values.instagram}
                            />
                        </div>
                        <div className="input-container">
                            <label>Facebook</label>
                            <input
                                name="facebook"
                                placeholder="Enter your facebook url"
                                onChange={handleChange}
                                value={values.facebook}
                            />
                        </div>
                        <div className="input-container">
                            <label>Youtube</label>
                            <input
                                name="youtube"
                                placeholder="Enter your youtube url"
                                onChange={handleChange}
                                value={values.youtube}
                            />
                        </div>
                        <div className="input-container">
                            <label>Website</label>
                            <input
                                name="website"
                                placeholder="Enter your website url"
                                onChange={handleChange}
                                value={values.website}
                            />
                        </div>
                        <div className="input-container">
                            <button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Updating" : "Update Social Media URLS"}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
