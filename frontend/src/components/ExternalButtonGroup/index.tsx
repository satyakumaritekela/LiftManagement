import { useContext } from "react";
import { store } from "../../context/context";
import { callLift } from "../../utils/api";
import { levels } from "../../utils/buttons";
import Dropdown from 'react-dropdown';
import { simulateLiftSystem } from "../../utils";

const styles = {
  dropdownGroup: {
        marginTop: '10px',
        backgroundColor: '#00acff',
        padding: '5px',
        cursor: 'pointer' as 'pointer',
        color: 'white',
        borderRadius: '5px',
    },
}

export const ExternalButtonGroup = ({lift} : any) => {
    const { state: {liftSystem}, dispatch } = useContext(store); 
    const options = levels.map(l => l.level.toString()).reverse();  

    const selectLevel = async (option: any) => {
        option.label = `Level ${option.label}`;
        const resp = await callLift(lift.id, parseInt(option.value));
        if(resp !== null) {
            simulateLiftSystem(lift, parseInt(option.value), liftSystem, dispatch);
        }
    }

    return (
        <div style={styles.dropdownGroup} id="test_external_dropdown_group">
           <Dropdown options={options} onChange={selectLevel} value={`Level ${options[0]}`} placeholder="Pick the floor" />
        </div>
    );
};