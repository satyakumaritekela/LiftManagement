import { mount } from 'enzyme';
import { InternalButtonGroup } from '../../components/InternalButtonGroup';
import { MockliftStatus } from '../App.spec';

describe('ButtonGroup', () => {

    const buttonComponent = mount(<InternalButtonGroup lift={MockliftStatus}/>);

    it('render list of buttons', () => {  
        expect(buttonComponent.find('#test_internal_button_group').length).toEqual(1);
        expect(buttonComponent.find('#test_internal_button_group').children().length).toEqual(10);
    });

});