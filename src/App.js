import './App.css'

function App() {
    return (
        <div className="full_site">
            <div class="container dog_site">
                <div class="row navigation">
                    <div class="col-xl-6 col-xxl-6 col-lg-4 col-md-4 col-sm-12 col-xs-12 dogger">
                        Dogger.
                    </div>
                    <div class="col-xl col-xxl col-lg col-md col-sm-4 col-xs-4 home links">
                        Home
                    </div>
                    <div class="col-xl col-xxl col-lg col-md col-sm-4 col-xs-4 links">
                        About
                    </div>
                    <div class="col-xl col-xxl col-lg col-md col-sm-4 col-xs-4 links">
                        Services
                    </div>
                    <div class="col-xl col-xxl col-lg col-md col-sm-6 col-xs-4 links">
                        Trainers
                    </div>
                    <div class="col-xl col-xxl col-lg col-md col-sm-6 col-xs-4 links">
                        Contact
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-6 col-xxl-6 col-lg-6 col-md-6 col-sm-12 first_left_text">
                        <div className="we_care">WE CARE FOR YOUR DOG</div>
                        <div className="best_service">
                            We always try to provide your dog the best services
                        </div>
                    </div>
                    <div class="col-xl-6 col-xxl-6 col-lg-6 col-md-6 col-sm-12 image"></div>
                </div>
                <div class="row ">
                    <div class="col" style={{height: '100px'}}>
                        <div class="paw_image"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col welcome">WELCOME TO DOGGER PET CARE</div>
                </div>
                <div class="row">
                    <div class="col-xl-2 col-xxl-2 col-lg-2 col-md-2 col-sm-1 col-xs-1"></div>
                    <div class="col-xl-8 col-xxl-8 col-lg-8 col-md-8 col-sm-10 col-xs-10 blind_text">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                    </div>
                    <div class="col-xl-2 col-xxl-2 col-lg-2 col-md-2 col-sm-1 col-xs-1"></div>
                </div>
                <div class="row petting">
                    <div class="col-xl-6 col-xxl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 petting_image"></div>
                    <div class="col-xl-6 col-xxl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 secont_text_right">
                        <div className="love_care">LOVE & CARE</div>
                        <div className="language_ocean">
                            Far far away, behind the word mountains, Separated
                            they live in Bookmarksgrove right at the coast of
                            the Semantics, a large language ocean.
                        </div>
                        <button className="read_more">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
