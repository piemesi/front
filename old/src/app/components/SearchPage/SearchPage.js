import React, {Component} from 'react';

import VertStepperVar from '../../containers/Stepper';
import ResultsDiv from '../../containers/ResultsDiv';


export default class SearchPage extends Component {
    render() {
        return (
            <div>
                <ResultsDiv />
                <VertStepperVar />
            </div>
        )
    }

}

