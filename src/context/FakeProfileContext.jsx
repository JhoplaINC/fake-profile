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
        instagram: '',
        facebook: '',
        youtube: '',
        github: ''
    });

    const [personalData, setPersonalData] = useState({
        id: 1,
        name: 'Name',
        lastname: 'Lastname',
        email: 'email@example.com',
        phone: '+56 9 1234 5678',
        photo: 'image/' + profilePhotoUrl,
        linkedin: 'https://www.linkedin.com' + socialMediaUrls.linkedin,
        instagram: 'https://www.instagram.com' + socialMediaUrls.instagram,
        facebook: 'https://www.facebook.com' + socialMediaUrls.facebook,
        youtube: 'https://www.youtube.com' + socialMediaUrls.youtube,
        github: 'https://www.github.com' + socialMediaUrls.github,
    });

    const updateProfileData = (data) => {
        setPersonalData({data});
    }

    return (
        <FakeProfileContext.Provider value={{
            personalData,
            updateProfileData,
        }}>
            {children}
        </FakeProfileContext.Provider>
    )
}