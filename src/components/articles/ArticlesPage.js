import React from 'react';
import Article from './../../common/Article.js';

class ArticlesPage extends React.Component {
    render() {
        return(
            <div>
            <h1>This is the articles page</h1>
            <div className='container'>
                <div className='row'>
                     <Article />
                      <Article />
                       <Article />
                </div>
                 <div className='row'>
                      <Article />
                     <Article />
                     <Article />
                </div>
                 <div className='row'>
                     <Article />
                     <Article />
                     <Article />
                </div>
            </div>
            </div>
        );
    }
}
export default ArticlesPage;