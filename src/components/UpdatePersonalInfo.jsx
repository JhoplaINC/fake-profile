import { Form, Formik } from 'formik';
import { useFakeProfileContext } from '../context/FakeProfileContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const UpdatePersonalInfo = () => {

    const { personalData, updateProfileData } = useFakeProfileContext();

    return (
        <div className="form-container">
            <div className="form-explanation">
                <h3>
                    <FontAwesomeIcon icon={faUser} />
                </h3>
                <p>
                    In this form, you will be able to change your personal information. 
                </p>
                <p>
                    Remember, whenever you close or reload this page, all information 
                    you set in here, will be <b>deleted</b>.
                </p>
            </div>
            <Formik
                initialValues={personalData}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {
                    updateProfileData(values);
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <div className="input-container small-input">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="What's your name"
                                onChange={handleChange}
                                value={values.name}
                            />
                        </div>
                        <div className="input-container small-input">
                            <label>Lastname</label>
                            <input
                                name="lastname"
                                placeholder="What's your lastname"
                                onChange={handleChange}
                                value={values.lastname}
                            />
                        </div>
                        <div className="input-container small-input">
                            <label>Age</label>
                            <input
                                type="number"
                                name="age"
                                placeholder="How old are you"
                                onChange={handleChange}
                                value={values.age}
                            />
                        </div>
                        <div className="input-container large-input">
                            <label>About me</label>
                            <textarea
                                name="aboutMe"
                                placeholder="Tell us about you"
                                onChange={handleChange}
                                value={values.aboutMe}
                            ></textarea>
                        </div>
                        <div className="input-container large-input">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="What's your email"
                                onChange={handleChange}
                                value={values.email}
                            />
                        </div>
                        <div className="input-container large-input">
                            <label>Phone number</label>
                            <input
                                name="phone"
                                placeholder="What's your phone number"
                                onChange={handleChange}
                                value={values.phone}
                            />
                        </div>
                        <div className="input-container large-input">
                            <label>Education</label>
                            <input
                                name="education"
                                placeholder="Where did you studied at"
                                onChange={handleChange}
                                value={values.education}
                            />
                        </div>
                        <div className="input-container large-input">
                            <label>Location</label>
                            <input
                                name="location"
                                placeholder="Where do you live"
                                onChange={handleChange}
                                value={values.location}
                            />
                        </div>
                        <div className="input-container large-input">
                            <button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Updating" : "Update personal info"}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
