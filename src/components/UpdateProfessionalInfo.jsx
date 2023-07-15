import { Form, Formik } from "formik";
import { useFakeProfileContext } from "../context/FakeProfileContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

export const UpdateProfessionalInfo = () => {

    const { professionalData, socialMediaUrls, updateSocialMedia, updateProfessionalData } = useFakeProfileContext();

    return (
        <div className="form-container">
            <div className="form-explanation">
                <h3>
                    <FontAwesomeIcon icon={faUserTie} />
                </h3>
                <p>
                    In this form, you will be able to change your professional information.
                </p>
                <p>
                    Remember, whenever you close or reload this page, all information
                    you set in here, will be <b>deleted</b>.
                </p>
            </div>
            <Formik
                initialValues={{
                    linkedin: socialMediaUrls.linkedin,
                    github: socialMediaUrls.github,
                    twitter: socialMediaUrls.twitter,
                    instagram: socialMediaUrls.instagram,
                    facebook: socialMediaUrls.facebook,
                    youtube: socialMediaUrls.youtube,
                    website: socialMediaUrls.website,
                    profession: professionalData.company,
                    company: professionalData.profession,
                    experience: professionalData.experience,
                }}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    updateSocialMedia({
                        linkedin: values.linkedin,
                        github: values.github,
                        twitter: values.twitter,
                        instagram: values.instagram,
                        facebook: values.facebook,
                        youtube: values.youtube,
                        website: values.website
                    });
                    updateProfessionalData({
                        profession: values.company,
                        company: values.profession,
                        experience: values.experience,
                    })
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="input-container small-input">
                            <label>Company</label>
                            <input
                                type="text"
                                name="company"
                                placeholder="Where do you work at"
                                onChange={handleChange}
                                value={values.company}
                            />
                        </div>
                        <div className="input-container small-input">
                            <label>Profession</label>
                            <input
                                type="text"
                                name="profession"
                                placeholder="What's your profession"
                                onChange={handleChange}
                                value={values.profession}
                            />
                        </div>
                        <div className="input-container small-input">
                            <label>Years of experience</label>
                            <input
                                type="number"
                                name="experience"
                                placeholder="How many years experience do you have"
                                onChange={handleChange}
                                value={values.experience}
                            />
                        </div>
                        <div className="input-container small-input">
                            <label>LinkedIn</label>
                            <input
                                type="url"
                                name="linkedin"
                                placeholder="Enter your linkedin url"
                                onChange={handleChange}
                                value={values.linkedin}
                            />
                        </div>
                        <div className="input-container small-input">
                            <label>Github</label>
                            <input
                                type="url"
                                name="github"
                                placeholder="Enter your github url"
                                onChange={handleChange}
                                value={values.github}
                            />
                        </div>
                        <div className="input-container small-input">
                            <label>Twitter</label>
                            <input
                                type="url"
                                name="twitter"
                                placeholder="Enter your twitter url"
                                onChange={handleChange}
                                value={values.twitter}
                            />
                        </div>
                        <div className="input-container small-input">
                            <label>Instagram</label>
                            <input
                                type="url"
                                name="instagram"
                                placeholder="Enter your instagram url"
                                onChange={handleChange}
                                value={values.instagram}
                            />
                        </div>
                        <div className="input-container small-input">
                            <label>Facebook</label>
                            <input
                                type="url"
                                name="facebook"
                                placeholder="Enter your facebook url"
                                onChange={handleChange}
                                value={values.facebook}
                            />
                        </div>
                        <div className="input-container small-input">
                            <label>Youtube</label>
                            <input
                                type="url"
                                name="youtube"
                                placeholder="Enter your youtube url"
                                onChange={handleChange}
                                value={values.youtube}
                            />
                        </div>
                        <div className="input-container small-input">
                            <label>Website</label>
                            <input
                                type="url"
                                name="website"
                                placeholder="Enter your website url"
                                onChange={handleChange}
                                value={values.website}
                            />
                        </div>
                        <div className="input-container large-input">
                            <button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Updating" : "Update professional info"}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
