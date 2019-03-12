import React from 'react';
import TrendingGrid from './trending-grid/trendingGrid.component.jsx';
import './styles.scss';


const Trending = () => {
    return (
        <section className="trending">
            <TrendingGrid />
        </section>
    );
}

export default Trending;