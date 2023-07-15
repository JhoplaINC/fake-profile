export const Explanation = () => {
    return (
        <>
            <div className="explanation-container">
                <h1 className="site-title">Fake profile</h1>
                <div className="explanation-info">
                    <p className="site-subtitle">What Fake Profile is?</p>
                    <p className="site-description">
                        Fake Profile is an app where you can see, like its name says,
                        a Fake Profile. <br />
                        This was developed just for showing you the useState, and useContext React hooks common usage. 
                        Adding to this, you can see how Formik Component works, the form flow and how to manage the data.
                    </p>
                    <p className="site-aclaration">
                        Once you refresh this page, all profile data setted will be deleted. <br />
                        Also, we don't recolect any kind of information. Everything in this web is reactive, 
                        once you refresh or close this page, <b>everything</b> will be deleted.
                    </p>
                </div>
            </div>
        </>
    )
}
