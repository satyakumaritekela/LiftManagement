import { useCallback, useContext, useEffect, useState } from "react";
import { store } from "../../context/context";
import { addLiftToSystem, setupElevatorSystem } from "../../utils/api";
import { Lift } from "./Lift";

const styles = {
    liftSystem: {
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap' as 'wrap',
        margin: 40,
    },
    addLift: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        padding: 10,
        backgroundColor: '#00acff',
        border: '1px solid #ccc',
        cursor: 'pointer',
        borderRadius: 20,
        height: 50,
        marginTop: '30px',
    }
}

export const LiftSystem = () => {
    const { state: { liftSystem }, dispatch } = useContext(store);    
    const [loading, setLoading] = useState(false);
  
    useEffect((): any => {
        async function setup() {
            setLoading(true);
            const lifts = await setupElevatorSystem(1);
            if(lifts && lifts.length) {
                dispatchLifts(lifts);
            }
            setLoading(false);
        }
        setup();
    }, []);     

    const addLift = useCallback(async () => {
        setLoading(true);
        const lifts = await addLiftToSystem();
        if(lifts && lifts.length) {
            dispatchLifts(lifts);
        }
        setLoading(false);
    }, []);

    const dispatchLifts = (lifts: any) => {
        dispatch({
            type: 'update',
            key: 'liftSystem',
            value: lifts,
        });
        dispatch({
            type: 'update',
            key: 'count',
            value: lifts.length,
        });
    }
  
    return (
        <div style={styles.liftSystem} id="test_lift_system">
            {!loading && liftSystem && liftSystem.map((lift : any) => <Lift key={lift.id} lift={lift}/>)}
            <button onClick={addLift} style={styles.addLift} id="test_add_lift">Add Lift</button>
        </div>
    );
};