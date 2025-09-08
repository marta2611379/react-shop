import { useState } from "react";
import Condition from "../Condition/Condition";
import "./UserForm.css";

type FormState = {
  name: string;
};

function UserForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
  });

  const [userName, setUserName] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (!form.name) {
      alert("Name is required");
      return;
    }
    setUserName(form.name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          className="form-control"
          type="text"
          placeholder="Enter name"
          value={form.name}
          name="name"
          id="name"
          onChange={handleChange}
        />
      </div>
      <div className="my-3">
        <span className="fw-bold">Current Name:</span> {form.name}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      <h3 className="text-muted mt-3">5. Condition</h3>
      <Condition name={userName} logOut={() => setUserName("")} />
    </form>
  );
}

export default UserForm;
