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
        linkedin: 'sda',
        github: 'asd',
        twitter: 'asd',
        instagram: 'asd',
        facebook: 'sad',
        youtube: 'asdsad',
        website: 'asdsad',
    });

    const [personalData, setPersonalData] = useState({
        id: 1,
        name: 'John',
        lastname: 'Doe',
        aboutMe: `About me`,
        email: 'email@sadf.sdaf',
        phone: '+5655656',
        photo: 'image/' + profilePhotoUrl,
        profession: 'Frontend Developer',
        education: 'University',
        company: 'Company Name inc.',
        experience: 2,
        age: 23,
        location: 'País, ciudad',
    });

    const updateProfileData = (data) => {
        setPersonalData({data});
    }

    return (
        <FakeProfileContext.Provider value={{
            personalData,
            updateProfileData,
            socialMediaUrls,
            profilePhotoUrl,
        }}>
            {children}
        </FakeProfileContext.Provider>
    )
}