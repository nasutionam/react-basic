import React from 'react';
import './YoutubeComponent.css';

const YoutubeComponent = (props) => {
    return (
        <div className="youtube-wrapper">
            <div>
                <img className="img-thumb" src="https://1.bp.blogspot.com/-WdRRMvCMa04/XH_o6fiHM9I/AAAAAAAAADQ/zFeNtUBRIyk4Qokbbk7H3U2LMV7JNvV4ACLcBGAs/s1600/Manfaat%2Bmadu%2BUntuk%2BKucing%2B-%2BPet%2BShop%2BSukabumi.jpg" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YoutubeComponent.defaultProps = {
    time: "00.00",
    title: "Default",
    desc: 'DESC'
}

export default YoutubeComponent;