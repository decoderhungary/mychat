import LoginForm from "./components/client/account/LoginForm";

function App() {
  return (
    <div className="App">
      <LoginForm
        onSubmit={() => { }}
        onChange={() => { }}
        errors={{}}
        user={{
          email: "",
          password: "",
        }}
        type="password"
      />
    </div>
  );
}

export default App;
