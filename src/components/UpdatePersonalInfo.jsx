import { Form, Formik } from 'formik';
import { useFakeProfileContext } from '../context/FakeProfileContext';

export const UpdatePersonalInfo = () => {

    const { personalData, updateProfileData } = useFakeProfileContext();

    return (
        <div className="form-container">
                <Formik
                    initialValues={personalData}
                    enableReinitialize={true}
                    onSubmit={async (values, actions) => {
                        updateProfileData(values);
                    }}
                >
                    {({ handleChange, handleSubmit, values, isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>
                            <div className="input-container">
                                <input
                                    type="text"
                                    name="id"
                                    hidden
                                    onChange={handleChange}
                                    value={values.id}
                                />
                            </div>
                            <div className="input-container">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="What's your name"
                                    onChange={handleChange}
                                    value={values.name}
                                />
                            </div>
                            <div className="input-container">
                                <label>Lastname</label>
                                <input
                                    name="lastname"
                                    placeholder="Tell us how are you feeling today"
                                    onChange={handleChange}
                                    value={values.lastname}
                                />
                            </div>
                            <div className="input-container">
                                <label>About me</label>
                                <input
                                    name="aboutMe"
                                    placeholder="Tell us how are you feeling today"
                                    onChange={handleChange}
                                    value={values.aboutMe}
                                />
                            </div>
                            <div className="input-container">
                                <label>Email</label>
                                <input
                                    name="email"
                                    placeholder="Tell us how are you feeling today"
                                    onChange={handleChange}
                                    value={values.email}
                                />
                            </div>
                            <div className="input-container">
                                <label>Phone number</label>
                                <input
                                    name="phone"
                                    placeholder="Tell us how are you feeling today"
                                    onChange={handleChange}
                                    value={values.phone}
                                />
                            </div>
                            <div className="input-container">
                                <label>Education</label>
                                <input
                                    name="education"
                                    placeholder="Tell us how are you feeling today"
                                    onChange={handleChange}
                                    value={values.education}
                                />
                            </div>
                            <div className="input-container">
                                <label>Age</label>
                                <input
                                    name="age"
                                    placeholder="Tell us how are you feeling today"
                                    onChange={handleChange}
                                    value={values.age}
                                />
                            </div>
                            <div className="input-container">
                                <label>Location</label>
                                <input
                                    name="location"
                                    placeholder="Tell us how are you feeling today"
                                    onChange={handleChange}
                                    value={values.location}
                                />
                            </div>
                            <div className="input-container">
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
