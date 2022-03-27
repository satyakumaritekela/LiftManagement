import { mount } from 'enzyme';
import { ExternalButtonGroup } from '../../components/ExternalButtonGroup';
import { MockliftStatus } from '../App.spec';

describe('DropdownGroup', () => {

    const dropdownComponent = mount(<ExternalButtonGroup lift={MockliftStatus}/>);

    it('render list of options', () => {  
        expect(dropdownComponent.find('#test_external_dropdown_group').length).toEqual(1);
        expect(dropdownComponent.find('#test_external_dropdown_group').children().length).toEqual(1);
    });

});