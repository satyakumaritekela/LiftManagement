import { ExternalButtonGroup } from "../ExternalButtonGroup";
import { InternalButtonGroup } from "../InternalButtonGroup";
import { Status } from "../Status";

const styles = {
  system: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    width: 140,
  },
  lift: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00acff',
    border: '1px solid black',
  },
}

export const Lift = ({lift}: any) => {
    if(!lift) {
        return null;
    }
  
    return (
        <div style={styles.system}>
            <div style={styles.lift}>
                <Status lift={lift}/>
                <InternalButtonGroup lift={lift} />
            </div>
            <div><ExternalButtonGroup lift={lift} /></div>
        </div>
    );
};