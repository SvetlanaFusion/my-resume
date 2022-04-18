import picture1 from "../../Picture/leaf.jpg"
import picture2 from "../../Picture/github.jpg"
import picture3 from "../../Picture/medium.png"
import picture4 from "../../Picture/Dribbble2.png"
import picture5 from "../../Picture/flickr.png"
import picture6 from "../../Picture/deviantart.png"
function Profiles() {
    return (
        <>
            <div class="body">
                    <div class="body_section">
                        <h1 class="body_section_title">profiles</h1>
                        <h2 class="body_section_title__subtitle">Busy as usual.</h2>
                    </div>
                    <div class="expertise_articles">
                        <div class="expertise_articles_chapters">
                            <div class="profiles_articles_icon">
                                <img class="leaf" src={picture1} alt="leaf"/>
                            </div>
                            <article class="expertise_articles_title+text">
                                <h2 class="expertise_articles_title">
                                    themeforest
                                </h2>
                                <p class="expertise_articles_text">
                                    An overview of the themes and templates that I sell.
                                </p>
                            </article>
                        </div>
                        <div class="expertise_articles_chapters">
                            <div class="profiles_articles_icon">
                                <img class="github" src={picture2} alt="github"/>
                            </div>
                            <article class="expertise_articles_title+text">
                                <h2 class="expertise_articles_title">
                                    github
                                </h2>
                                <p class="expertise_articles_text">
                                    All my open source projects for you analyze.
                                </p>
                            </article>
                        </div>
                        <div class="expertise_articles_chapters">
                            <div class="profiles_articles_icon">
                                <img class="medium" src={picture3} alt="medium"/>
                            </div>
                            <article class="expertise_articles_title+text">
                                <h2 class="expertise_articles_title">
                                    medium
                                </h2>
                                <p class="expertise_articles_text">
                                    Yes. I'm also a blogger and here you find my writings.
                                </p>
                            </article>
                        </div>
                        <div class="expertise_articles_chapters">
                            <div class="profiles_articles_icon">
                                <img class="dribbble" src={picture4} alt="dribbble"/>
                            </div>
                            <article class="expertise_articles_title+text">
                                <h2 class="expertise_articles_title">
                                    dribbble
                                </h2>
                                <p class="expertise_articles_text">
                                    Whenever a design is finalized, it lands right here.
                                </p>
                            </article>
                        </div>
                        <div class="expertise_articles_chapters">
                            <div class="profiles_articles_icon">
                                <img class="flickr" src={picture5} alt="flickr"/>
                            </div>
                            <article class="expertise_articles_title+text">
                                <h2 class="expertise_articles_title">
                                    flickr
                                </h2>
                                <p class="expertise_articles_text">
                                    A selection of photos I shot throughout the years.
                                </p>
                            </article>
                        </div>
                        <div class="expertise_articles_chapters">
                            <div class="profiles_articles_icon">
                                <img class="deviantart" src={picture6} alt="deviantart"/>
                            </div>
                            <article class="expertise_articles_title+text">
                                <h2 class="expertise_articles_title">
                                    deviantart
                                </h2>
                                <p class="expertise_articles_text">
                                    A place for my sketches and drawings.
                                </p>
                            </article>
                        <div/>
                    </div>
                </div>
            </div>
        </>
          )
        };
        
        export default Profiles;