export const getUpdatedLiftSystem = (id: string, updatedFloor: number, direction: string, liftSystem: any) => {
    return liftSystem.map((item: any) => {
        if(item.id === id) {
            item.currentFloor = updatedFloor;
            item.direction = direction;
            return item;
        }
        return item;
    }
)};

export const simulateLiftSystem = async (lift: any, level: number, liftSystem: any, dispatch: any) => {
    let updatedFloor = lift.currentFloor;
    let interval = setInterval(() => { 
        if (updatedFloor === level) {
            clearInterval(interval);
            dispatch({
                type: 'update',
                key: 'liftSystem',
                value: getUpdatedLiftSystem(lift.id, level, 'IDLE', liftSystem),
            });
        } else if (updatedFloor > level) {
            updatedFloor--;
            dispatch({
                type: 'update',
                key: 'liftSystem',
                value: getUpdatedLiftSystem(lift.id, updatedFloor, 'DOWN', liftSystem),
            });
        } else {
            updatedFloor++;
            dispatch({
                type: 'update',
                key: 'liftSystem',
                value: getUpdatedLiftSystem(lift.id, updatedFloor, 'UP', liftSystem),
            });
        } 
    }, 1000);
}