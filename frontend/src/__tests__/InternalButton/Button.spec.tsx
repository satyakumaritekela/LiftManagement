import { mount } from 'enzyme';
import { Button } from '../../components/InternalButtonGroup/Button';

describe('Button', () => {

    const clickMock = jest.fn();
    const buttonComponent = mount(<Button level={9} goToLevel={clickMock} selected={false}/>);
    const selectedButtonComponent = mount(<Button level={9} goToLevel={clickMock} selected={true}/>);
    const buttonComponentStyle = selectedButtonComponent.find('#test_internal_level_button').get(0).props.style;

    it('check button with level', () => {  
        expect(buttonComponent.find('#test_internal_level_button').length).toEqual(1);
        expect(buttonComponent.find('#test_internal_level_button').text()).toEqual('9');
        if (buttonComponent) buttonComponent.simulate("click");
        expect(clickMock.mock.calls.length).toBe(1);
    });

    it('check button if selected', () => {  
        expect(buttonComponentStyle.backgroundColor).toBe('#4fdbff');
    });

    it('check button if clicked', () => {
        if (buttonComponent) buttonComponent.simulate("click");
        expect(clickMock.mock.calls.length).toBe(1);
    });

});