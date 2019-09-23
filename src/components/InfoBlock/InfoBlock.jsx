import React from 'react';
import axios from 'axios';
import './InfoBlock.scss';
class InfoBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usd: '',
            eur: '',
        };
    }

    componentDidMount() {
        axios.get(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)
            .then(currenciesData => {
                const usd = currenciesData.data.find(curr => curr['ccy'] === 'USD');
                const eur = currenciesData.data.find(curr => curr['ccy'] === 'EUR');
                this.setState({usd: usd.buy, eur: eur.buy});
        });
    }

    render() {
        return (
            <div className="info-block">
                {this.state.usd &&
                    <div className='currencies'>
                        <span>USD: {this.state.usd}</span>
                        <span>EUR: {this.state.eur}</span>
                    </div>
                }
            </div>
        );
    }
}

export default InfoBlock;
