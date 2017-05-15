import React from 'react';

class ExpandableBox extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
        <div onClick={this.handleClick} className='expandable-box'>
            <h1>This is the title</h1>
            <p>This is the content</p>
            <div className='inner_component animate'>Alta componenta</div>
        </div>
        );
    }
}
export default ExpandableBox;