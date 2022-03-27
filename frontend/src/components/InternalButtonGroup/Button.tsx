type Props = {
    level: number,
    goToLevel: (e:any, level: number) => void,
    selected: boolean,
}

const styles = {
  button: {
    fontSize: 12,
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: '#e2f9fe',
    border: '1px solid #ccc',
    cursor: 'pointer',
  },
}

export const Button = ({level, goToLevel, selected}: Props) => {
    return <button onClick={(e) => goToLevel(e, level)} style={{...styles.button, backgroundColor: selected ? '#009cc3': ''}} id="test_internal_level_button">{level}</button>;
};