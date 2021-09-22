import { withRouter } from 'react-router-dom';
import Card from './Card';
import '../styles/list.css';
function List(props) {
    const { data, history, setSelectedData } = props;
    function handleOnClick(item) {
        setSelectedData(item);
        history.push('/Details');
    }
    return (
        <div className="listContainer">
            {
                Array.isArray(data) && data.map(item =>
                    <Card
                        name={item.name}
                        username={item.username}
                        website={item.website}
                        handleOnClick={() => handleOnClick(item)}
                    />
                )
            }
        </div>
    )
}
export default withRouter(List);