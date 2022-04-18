import picture from "../../Picture/avatar.png"
function Header() {
    return (
        <>
            <div class="header">
                <div class="header_ava">
                    <img class="avatar" src={picture} alt="Svetlana Klopot"/>
                </div>
                <div class="header_info">
                    <div class="header_info_bio">
                        <h1 class="header_info_bio__name">svetlana</h1>
                        <h2 class="header_info_bio__surname">klopot</h2>
                        <h3 class="header_info_bio__post">QA engineer</h3>
                    </div>
                    <div class="header_info_socialNetwork"></div>
                    <div class="header_info_contact">
                        <div class="header_info_contact_location">
                            <h1 class="header_info_contact_location__title">Location</h1>
                            <p class="header_info_contact_location__data">Taganrog, Russia</p>
                        </div>
                        <div class="header_info_contact_phone">
                            <h1 class="header_info_contact_phone__title">Phone</h1>
                            <p class="header_info_contact_phone__data">8-908-503-51-38</p>
                        </div>
                        <div class="header_info_contact_web">
                            <h1 class="header_info_contact_web__title">Web</h1>
                            <p class="header_info_contact_web__data">fusion-tech.pro</p>
                        </div>
                        <div class="header_info_contact_email">
                            <h1 class="header_info_contact_email__title">Email</h1>
                            <p class="header_info_contact_web__data">svetlana.klopot@fusion-tech.pro</p>
                        </div>
                    </div>
                </div>
                
                    <div class="body_section">
                        <h1 class="body_section_title">expertise</h1>
                        <h2 class="body_section_title__subtitle">Batman would be jealous.</h2>
                    </div>
                    <div class="expertise_articles">
                        
                    </div>
                </div>
        </>
    )
};

export default Header;