import React from 'react';
import ExpandableBox from './../../common/ExpandableBox.js';
import $ from 'jquery';

class BoxesPage extends React.Component {
    constructor(props) {
        super();
        this.state={};
        this.activateBoxes = this.activateBoxes.bind(this);
    }

    componentDidMount() {
        this.activateBoxes();
    }

    activateBoxes() {
       $('.expandable-box').click(function() {
            if($(this).hasClass('open')) {
                $('.expandable-box.out').not($(this)).removeClass('out');
                $(this).removeClass('open');
            }
                else {
                    $('.expandable-box').not($(this)).addClass('out');
                    $(this).addClass('open');
                    $(this).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
                    function(e) {
                        console.log('animation ended');
                        console.log(e.target)
                    })
                }
            });
    }

    render() {
        return(
            <div className='boxes_container'>
                <div className='expandable-boxes'>
                     <ExpandableBox />
                     <ExpandableBox />
                     <ExpandableBox />
                     <ExpandableBox />
                     <ExpandableBox />
                     <ExpandableBox />
                     <ExpandableBox />
                     <ExpandableBox />
                     <ExpandableBox />
                </div>
            </div>
        )
    }
}
export default BoxesPage;