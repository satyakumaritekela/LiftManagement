import { mount } from 'enzyme';
import { Status } from '../components/Status';
import { MockliftStatus } from './App.spec';


describe('Status', () => {

    it('check status with direction and current floor', () => {  
        const statusComponent = mount(<Status lift={MockliftStatus} />);
        expect(statusComponent.find('div').length).toEqual(3);
        expect(statusComponent.find('div').at(0).text()).toEqual('1');
        expect(statusComponent.find('#test_current_floor').text()).toEqual('1');
    });

});