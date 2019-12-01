import React, {Component} from 'react';
import YoutubeComponent from '../../components/YoutubeComponent/YoutubeComponent';

class Home extends React.Component {
    render() {
        return(
            <div>
                <p>Youtube Component</p>
                <hr/>
                <YoutubeComponent 
                    time="12.30" 
                    title="lorem" 
                    desc="LOREM" />
                <YoutubeComponent 
                    time="13.30" 
                    title="ipsum"
                    desc="IPSUM" />
                <YoutubeComponent 
                    time="14.30" 
                    title="dolor"
                    desc="DOLOR" />
                <YoutubeComponent />
            </div>
        )
    }
}

export default Home;