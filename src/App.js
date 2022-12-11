import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello world!</h1>
//         <input></input>
//
//     </div>
//   );
// }

class BuyList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for{this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}

export default BuyList;