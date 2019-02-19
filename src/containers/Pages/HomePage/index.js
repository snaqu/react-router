import React from 'react';
import Article from '../../../components/Article/index';
const articles = [
    {
        id: 1, title: "Asian Stocks Mixed; Treasury Yields Edge Higher: Markets Wrap", author: "Thomas Nicholson", text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Officia non nemo tempora nam dicta molestias atque praesentium doloribus? Consectetur iusto rem cum voluptas amet voluptatum deleniti animi excepturi! Sunt soluta provident doloremque ab fuga, cupiditate sit.Obcaecati possimus incidunt labore, vero praesentium enim.Corrupti quos veniam dignissimos facilis quas quisquam.'
    }, {
        id: 2, title: "Norwegian Air Shares Plunge During Bid to Raise Cash", author: "Thomas Nicholson", text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Officia non nemo tempora nam dicta molestias atque praesentium doloribus? Consectetur iusto rem cum voluptas amet voluptatum deleniti animi excepturi! Sunt soluta provident doloremque ab fuga, cupiditate sit.Obcaecati possimus incidunt labore, vero praesentium enim.Corrupti quos veniam dignissimos facilis quas quisquam.'
    }, {
        id: 3, title: "Honda Shutting U.K. Plant in Latest Blow to British Autos", author: "Thomas Nicholson", text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Officia non nemo tempora nam dicta molestias atque praesentium doloribus? Consectetur iusto rem cum voluptas amet voluptatum deleniti animi excepturi! Sunt soluta provident doloremque ab fuga, cupiditate sit.Obcaecati possimus incidunt labore, vero praesentium enim.Corrupti quos veniam dignissimos facilis quas quisquam.'
    }, {
        id: 4, title: "Crispin Odey Is Shorting the Pound Again", author: "Thomas Nicholson", text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Officia non nemo tempora nam dicta molestias atque praesentium doloribus? Consectetur iusto rem cum voluptas amet voluptatum deleniti animi excepturi! Sunt soluta provident doloremque ab fuga, cupiditate sit.Obcaecati possimus incidunt labore, vero praesentium enim.Corrupti quos veniam dignissimos facilis quas quisquam.'
    }, {
        id: 5, title: "A Split and a Death That Could Shift Labour's Approach to Brexit", author: "Thomas Nicholson", text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Officia non nemo tempora nam dicta molestias atque praesentium doloribus? Consectetur iusto rem cum voluptas amet voluptatum deleniti animi excepturi! Sunt soluta provident doloremque ab fuga, cupiditate sit.Obcaecati possimus incidunt labore, vero praesentium enim.Corrupti quos veniam dignissimos facilis quas quisquam.'
    },];

const HomePage = () => {
    const generateArticles = articles.map((item) => {
        return (
            <Article key={item.id} {...item} />
        )
    });
    return (
        <div>
            {generateArticles}
        </div>
    );
}

export default HomePage;