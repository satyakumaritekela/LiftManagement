import App from '../App';
import { shallow } from 'enzyme';

export const MockliftStatus = {
    direction: 'UP',
    currentFloor: 1,
}

describe('App', () => {

    it('renders without crashing', () => {
        shallow(<App />);
    });

    it('renders a <div />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('div').length).toEqual(0);
    });

});

