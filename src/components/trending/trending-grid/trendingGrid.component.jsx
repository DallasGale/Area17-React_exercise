import React from 'react';
import HeroTile from '../trending-tile/hero';
import TrendingHeadline from '../headline/headline.component.jsx';
import TrendingTileRegular from "../trending-tile/regular/regular.component.jsx";

// TODO: Move all data src references to parent App.js 
import Data from '../../../data/api.json';
const TrendingData = Data.trending;


class TrendingGrid extends React.Component {

    constructor() {
        super();
        this.state = {
            mobileView: false 
        }
    }


    handleScreensizeChange = () => {
        if (window.innerWidth < 768) {
            this.setState({
                mobileView: true
            })
        } else {
            this.setState({
                mobileView: false
            })
        }
    }


    // Add event listener for handleScreensize()
    componentDidMount() {
        this.handleScreensizeChange();
        window.addEventListener("resize", this.handleScreensizeChange);
    }

    
    render() {

        const desktopArticles = TrendingData.slice(0,4);
        const mobileArticles = TrendingData;

        // Here we set a condition to swap between amount of articles displayed depending on screensize
        const data = this.state.mobileView ? (mobileArticles) : (desktopArticles);
        return (
            <div className="trending__grid">
                {/* 
                    Import 1 instance of <HeroTile /> component 
                */}
                <HeroTile />

                {/* 
                    Import 1 instance of <Heading /> component 
                */}
                <TrendingHeadline text={` ${this.state.mobileView ? ('TRENDING ON ABOUT.COM') : ('TRENDING') }`} />

                {/* 
                    Map over array of trending article data for these <GenericTile /> 
                    Without knowing the JSON scheme AOT I just put in the props/data I should expect to see coming through an API fetch.
                */}

                
                { 
                    data.map(article => (
                        <TrendingTileRegular 
                            authorAvatar={article.authorAvatar}
                            authorName={article.authorName}
                            authorDescription={article.authorDescription}
                            mobile={ this.state.mobileView }
                            key={article.id}
                            thumbnailImg={ article.image }
                            title={article.title} /> 
                 ))
                }
            </div>
            
        );
    }
};

export default TrendingGrid;


