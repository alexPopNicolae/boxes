import React from 'react';
import GrowingBox from './../../common/GrowingBox.js';

class ExperimentPage extends React.Component {
    render() {
        return(
            <div className="experiment_page">
                <h1>Experiment page with React Componets</h1>
                <div className='component_item'>
                    <h3>Growing containers</h3>
                    <GrowingBox />

                      <GrowingBox />
                        <GrowingBox />
                          <GrowingBox />
                </div>
                <button>Toggle Animations</button>
            </div>
        );
    }
}
export default ExperimentPage;