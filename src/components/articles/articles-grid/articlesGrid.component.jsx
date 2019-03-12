import React from 'react';
import RegularTile from "../articles-tile/regular/regular.component.jsx";
import FeatureTile from "../articles-tile/feature/feature.component.jsx";

// TODO: Move all data src references to parent App.js 
import Data from '../../../data/api.json';
const ArticleData = Data.articles;


class ArticlesGrid extends React.Component {

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

    // Remove event listener for handleScreensize()
    // componentWillMount() {
    //     window.removeEventListener("resize", this.handleScreensizeChange);
    // }


    render() {

        // To use as an iterator for the start of the <RegularTile /> component cell positioning
        let cellPosition = 0;



        // Desktop & Mobile display different amounts of Articles

        // Show all for desktop
        const desktopArticles = ArticleData;
        
        // Show 1-6 for mobile
        const mobileArticles = ArticleData.slice(0,5);



        // Here we set a condition to swap between amount of articles displayed depending on screensize
        const data = this.state.mobileView ? (mobileArticles) : (desktopArticles);


        // Map over articles
        const articles = data.map(article => {
            // If article is marked 'feature', return it here
            if (article.feature) {
                return (
                    <FeatureTile 
                        authorAvatar={ article.authorAvatar }
                        authorDescription={ article.authorDescription }
                        authorName={ article.authorName }
                        backgroundImg={ article.image }
                        cellPosition='feature'
                        mobile={ this.state.mobileView }
                        title={ article.title }
                        key={article.title}>
                        <div>{ article.title }</div>
                    </FeatureTile>
                )
            }

            // If article is not marked 'feature', return them here
            else {
                return (
                    <RegularTile 
                        authorAvatar={ article.authorAvatar }
                        authorDescription={ article.authorDescription }
                        authorName={ article.authorName }
                        backgroundImg={ article.image }
                        cellPosition={`${cellPosition += 1}`} 
                        key={article.title} 
                        mobile={ this.state.mobileView }
                        title={ article.title }/>
                );
            }
        });
    
        return (
            <div className="articles__grid">
                { articles }
            </div>
        )
    }
};

export default ArticlesGrid;
