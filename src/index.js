import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import YouTube from 'react-youtube';
import Slick from 'react-slick';
import ReactAudioPlayer from 'react-audio-player';
import Cookies from 'js-cookie';

import '../node_modules/normalize.css/normalize.css';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';
import '../css/styles.styl';

class Layout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showGreeting: false
        };
    }

    onClickHandler = (e) => {
        e.preventDefault;

        e.currentTarget.classList.add('disable');
        setTimeout(() => {
            this.setState({showGreeting: false})
        }, 1000);
    };

    render() {

        if (!Cookies.get('showedGreeting')) {
            const inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
            Cookies.set('showedGreeting', 'true', {
                expires: inFifteenMinutes
            });
            this.setState({showGreeting: true});
        }

        if (this.state.showGreeting) {
            return <div className="greeting" onClick={ this.onClickHandler }></div>;
        }

        return (
            <div>
                <nav>
                    <ul className="navigation">
                        <li><Link to="/" activeClassName="active" onlyActiveOnIndex={ true }>about</Link></li>
                        <li><Link to="/photo" activeClassName="active">photo</Link></li>
                        <li><Link to="/video" activeClassName="active">video</Link></li>
                        <li><Link to="/download" activeClassName="active">download</Link></li>
                    </ul>
                </nav>
                <div>
                    { this.props.children }
                </div>
                <div>
                    <ul className="social-list">
                        <li><a target="_blank" className="social social-fb" href="https://www.facebook.com/Ti-Monkeys-1120062951344640/"></a></li>
                        <li><a target="_blank" className="social social-vk" href="https://vk.com/ti_monkeys"></a></li>
                        <li><a target="_blank" className="social social-inst" href="http://www.imgrum.net/user/timonkeys_official/2298968104"></a></li>
                        <li><a target="_blank" className="social social-yt" href="https://www.youtube.com/channel/UCcmr07eHyujTQ7RYd1mYzSg"></a></li>
                    </ul>
                </div>
            </div>
        ); 
    }
}

const NotFound = () => {
    return <div>404</div>;
}

const App = () => {
    return (
        <div>
            <p>Urban primates and rock. The band "Ti Monkeys" or "Titanium Monkeys" was founded in Moscow in the autumn of 2007. Prior to this, the future monkeys were parts of other rock bands, but they teamed up in their titanium alloy with the arrival of bass player in the band - Danila Yakimov (Black Jack). The cristallization center of their music style was a common passion for the team members to the modern western rock music, and briefly about the sound can be said that it is a mixture of styles such bands like RATM-SOAD-KORN-RHCP-FNM-etc.</p>
            <div className="pride">
                <div>
                    <img src="/img/main.jpg" />
                </div>
                <div>
                    <p>Band members:</p>
                    <p>Kirill Korolev |Kirr| - vocal</p>
                    <p>Danika Yakimov |Black Jack|- bass</p>
                    <p>Anton Ribalko |Konditer| - drums</p>
                    <p>Sergey Sorokin |Astroman| - guitar</p>
                </div>
            </div>
            <p>The music of Ti Monkeys is hard-rock-rap-core, so there is a lot of mighty guitar riffs, crazy grooving drums and bass, wild catchy explosive sounds joining with heavy lyrics and expressive aggressive vocal. Subjects of songs is usually about the nowadays social tendencies and problems, about the wars that is inside and outside ourselves, about the things that they hate and love.  All that wild energy and all that musical napalm splashes out from the stage into the crowd behind, so it makes it burn with dancing, rocking, screaming and slamming.</p>
            <p>In the December 2015, musicians released their first EP – “Zolotoy mir” (“Golden world”). Right now the band is working on new recordings and keeps actively playing the concerts.</p>
        </div>
    );
}

const Photo = () => {

    const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

    return (
        <div className="photo">
            <div className="photo__slider">
                <Slick { ...settings }>
                    <div><img src="/img/5hh3KpTJKUA.jpg" /></div>
                    <div><img src="/img/8AwrN_MeS60.jpg" /></div>
                    <div><img src="/img/TtDKwGSOJE4.jpg" /></div>
                    <div><img src="/img/_hZLZ9byqNI.jpg" /></div>
                    <div><img src="/img/a7seqY7h-zw.jpg" /></div>
                    <div><img src="/img/bH16vFkbl4g.jpg" /></div>
                    <div><img src="/img/fTPDsuxbsaY.jpg" /></div>
                    <div><img src="/img/hh0_lK_Ufnw.jpg" /></div>
                    <div><img src="/img/jvlICbXxcFk.jpg" /></div>
                    <div><img src="/img/n5GrCm_bXCU.jpg" /></div>
                    <div><img src="/img/uPP1EY95ps8.jpg" /></div>
                </Slick>
            </div>
        </div>
    );
}

const Video = () => {

    const options = {
            //height: '422',
            width: '100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
                controls: 0,
                disablekb: 0,
                fs: 0,
                iv_load_policy: 3,
                loop: 1,
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
                showsearch: 0,
                theme: "light",
                color: "white"
            }
        };

    return (
        <div>
            <div className="video">
                <YouTube
                    videoId="2Ms4WGLJuqg"
                    opts={ options }
                />
            </div>
            <div className="video">
                <YouTube
                    videoId="ZeUziO73xOs"
                    opts={ options }
                />
            </div>
        </div>
    );
}

const Download = () => {
    return (
        <div>
            <table className="download">
                <tbody>
                    <tr>
                        <td>Voyna.mp3</td>
                        <td><ReactAudioPlayer src="/audio/VoynaMP3.mp3" /></td>
                    </tr>
                    <tr>
                        <td>Zasekay.mp3</td>
                        <td><ReactAudioPlayer src="/audio/ZasekayMP3.mp3" /></td>
                    </tr>
                    <tr>
                        <td>V boy.mp3</td>
                        <td><ReactAudioPlayer src="/audio/Go.mp3" /></td>
                    </tr>
                    <tr>
                        <td>Zolotoy mir.mp3</td>
                        <td><ReactAudioPlayer src="/audio/GoldWorld.mp3" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

render((
    <Router history={ browserHistory }>
        <Route path="/" component={ Layout }>
            <IndexRoute component = { App } />
            <Route path="photo" component={ Photo }/>
            <Route path="video" component={ Video }/>
            <Route path="download" component={ Download }/>
        </Route>
        <Route path="*" component={ NotFound }/>
    </Router>
), document.querySelector('.container'));