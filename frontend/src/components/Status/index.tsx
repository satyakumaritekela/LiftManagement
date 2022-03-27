import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const styles = {
  status: {
    display: "flex",
    width: '100%',
    backgroundColor: "grey",
    color: 'white',
    textAlign: 'center' as 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '10px 0',
  },
  direction: {
    color: 'white',
  },
  level: {
    fontWeight: 'bold',
  },
}

export const Status = ({lift}:any) => {
    return (
        <div style={styles.status}>
            <div style={styles.direction}>
                {lift.direction === 'UP' && <FaArrowUp /> }
                {lift.direction === 'DOWN' && <FaArrowDown />}
            </div>
            <div style={styles.level} id="test_current_floor">{lift.currentFloor}</div>
        </div>
    );
};