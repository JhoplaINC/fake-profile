import { createContext, useContext, useState } from "react";

export const FakeProfileContext = createContext();

export const useFakeProfileContext = () => {
    const context = useContext(FakeProfileContext);
    if(!context) {
        throw new Error('We are sorry but you are not in Fake Post Context :(');
    }
    return context;
}

export const FakeProfileContextProvider = ({children}) => {

    const [profilePhotoUrl, setProfilePhotoUrl] = useState('default_profile_photo.png');
    const [socialMediaUrls, setSocialMediaUrls] = useState({
        linkedin: '',
        github: '',
        twitter: '',
        instagram: '',
        facebook: '',
        youtube: '',
        website: '',
    });

    const [personalData, setPersonalData] = useState({
        id: 1,
        name: 'John',
        lastname: 'Doe',
        aboutMe: `About me`,
        email: 'email@sadf.sdaf',
        phone: '+5655656',
        education: 'University',
        age: 23,
        location: 'País, ciudad',
    });

    const [professionalData, setProfessionalData] = useState({
        profession: 'Frontend Developer',
        company: 'Company Name inc.',
        experience: 2,
    });

    const updateProfileData = (data) => {
        setPersonalData(data);
    }

    const updateSocialMedia = (data) => {
        setSocialMediaUrls(data);
    }

    return (
        <FakeProfileContext.Provider value={{
            personalData,
            updateProfileData,
            updateSocialMedia,
            socialMediaUrls,
            profilePhotoUrl,
            professionalData
        }}>
            {children}
        </FakeProfileContext.Provider>
    )
}