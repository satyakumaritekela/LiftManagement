import { mount } from 'enzyme';
import { LiftSystem } from '../../components/LiftSystem';

describe('Lift system', () => {

    const liftSystemComponent = mount(<LiftSystem />);

    it('render list of lifts', () => {  
        expect(liftSystemComponent.find('#test_lift_system').length).toEqual(1);
        expect(liftSystemComponent.find('#test_lift_system').children().length).toEqual(1);
    });

});