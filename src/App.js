import Avatar from "./components/client/avatar/Avatar";
import MyStorage from "./utils/mystorage";

function App() {
  const user = MyStorage.session.get('_mychat-usr');

  return (
    <div className="App">
      Ide jon a Chat kliens
      <Avatar color={user.color} show avatar={user.username[0]} />
    </div>
  );
}

export default App;
