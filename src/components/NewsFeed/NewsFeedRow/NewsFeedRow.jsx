import React from 'react';
import './NewsFeedRow.scss';

function NewsFeedRow({title, img, url, date}) {
    return (

        <div className="news-row col-6">
            <a className="news-image-wrapper" href={url} target="_blank">
                <div className="news-image-blurred" style={{backgroundImage: `url(${img})`}}/>
                <div className="news-image" style={{backgroundImage: `url(${img})`}}/>
            </a>
            <a className="news-title" href={url} target="_blank">{title}</a>
            <span className="news-date">{date}</span>
        </div>
    );
}
export default NewsFeedRow;
