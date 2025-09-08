type ConditionProps = {
  name: string;
  logOut: () => void;
};

function Condition({ name, logOut }: ConditionProps) {
  if (!name) {
    return <h3>Please log in.</h3>;
  } else {
    return (
      <div>
        <h3 className="mt-3">Welcome, {name}!</h3>
        <button className="btn btn-info" onClick={logOut}>
          Logout
        </button>
      </div>
    );
  }
}

export default Condition;
