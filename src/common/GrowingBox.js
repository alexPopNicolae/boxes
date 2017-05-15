import React from 'react';

class GrowingBox extends React.Component {
     constructor() {
        super();
        this.state = {
            opened: false,
            top: 0,
            bottom:0,
            left:0,
            right:0
        }

        this.openArticle = this.openArticle.bind(this);
        this.closeArticle = this.closeArticle.bind(this);
    }

    openArticle (e) {
        let outerParent = e.target.parentNode.parentNode;
        let topPosition = outerParent.offsetTop;
        let leftPosition = outerParent.offsetLeft;
        let initialWidth = outerParent.offsetWidth;
        let initialHeight = outerParent.offsetHeight;
        

        console.log(`Pozitille noastre sunt \n 
                    topPosition: ${topPosition}\n
                     leftPosition: ${leftPosition}\n
                     initialHeight: ${initialHeight}\n
                     initialWidth: ${initialWidth}`);

        this.setState({
            opened:true,
            top: topPosition,
            left: leftPosition,
            right: 'calc(100% - '+ initialWidth +'px)',
            bottom: 'calc(100% - '+ initialHeight +'px)',
         
        })
    }

    closeArticle (e) {
        this.setState({
            opened:false,
            top: 0,
            left:0,
            bottom: 0,
            right:0
        })
    }

    render() {
        let className = this.state.opened ? 'growing_box opened' : 'growing_box';
        console.log(this.state.bottom)
        let style = {
            top: this.state.top,
            left: this.state.left,
            right: this.state.right,
            bottom: this.state.bottom
        };
        return(
           <div className={className}>
               <div style={style} className='inner_container'>
                   <p onClick={this.openArticle} className='title'>Title of the article</p>
                   <button onClick={this.closeArticle}>Close article</button>
               </div>
           </div>
        );
    }
}
export default GrowingBox;

//1. iau positia curenta a elementului groving_box relativ fata de parinte - done
//2. positionez absolut elementul inner la pozitia lui growing_box container care are dimensiunile lui growing box la 
// acum la pasul 2:
// ** 1. asta trebui sa aiba 
//3. fac animatia sa aiba loc