import React from 'react';
import axios from 'axios';
import moment from "moment";
import 'moment/locale/uk'
import NewsFeedRow from "./NewsFeedRow/NewsFeedRow";
import './NewsFeed.scss';
class NewsFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            articles: []
        };
    }

    componentDidMount() {
        axios.get(`https://newsapi.org/v2/top-headlines?country=ua&apiKey=1157af2693564348b9bc3e19d3218f49`)
            .then(res => {
                const articles = res.data.articles;
                this.setState({ articles });
            });
    }

    formatDate(date) {
        return moment(date).locale('ru').fromNow();
    }

    render() {
        return (
            <div className="body-main container">
                <section className="news-row-wrapper row">
                    {this.state.articles.map((article, i) => {
                        return <NewsFeedRow key={article.publishedAt}
                                            title={article.title}
                                            img={article.urlToImage}
                                            url={article.url}
                                            date={this.formatDate(article.publishedAt)}
                        />
                    })}
                </section>
            </div>
        );
    }
}

export default NewsFeed;
