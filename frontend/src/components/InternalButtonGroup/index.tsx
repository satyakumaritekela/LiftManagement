import { useContext } from "react";
import { store } from "../../context/context";
import { simulateLiftSystem } from "../../utils";
import { moveLift } from "../../utils/api";
import { levels } from "../../utils/buttons";
import { Button } from "./Button";

const styles = {
  buttonGroup: {
    width: 60,
    display: 'grid',
    gridTemplateColumns: 'auto auto',
  },
}

export const InternalButtonGroup = ({lift}: any) => {
    const { state: {liftSystem}, dispatch } = useContext(store);    

    const goToLevel = async (e: any, level: number) => {
        e.preventDefault();
        const resp = await moveLift(lift.id, level);
        if(resp !== null) {
            simulateLiftSystem(lift, level, liftSystem, dispatch);
        }
    }

    return (
        <div style={styles.buttonGroup} id="test_internal_button_group">
            {levels.map((l) => {
                return <Button key={l.level} level={l.level} goToLevel={goToLevel} selected={lift?.currentFloor === l.level}/>
            })}
        </div>
    );
};