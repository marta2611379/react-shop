import "./UserCard.css";

type UserCardProps = {
  name: string;
  email: string;
  age: number;
  onDelete: () => void;
};

function UserCard({ name, email, age, onDelete }: UserCardProps) {
  return (
    <div className="card">
      <div
        className={`card-header d-flex justify-content-between align-items-center text-white ${
          age >= 18 ? "bg-success" : "bg-warning"
        }`}
      >
        <div>User Card</div>
        <button className="btn btn-danger" onClick={onDelete}>
          Delete
        </button>
      </div>
      <div className="card-body">
        <div className="card-title">{name}</div>
        <div className="card-text">{email}</div>
        <div className="card-text">{age}</div>
      </div>
    </div>
  );
}

export default UserCard;
