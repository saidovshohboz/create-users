import "./UserList.css";

function UserList({ users, deleteUser }) {
  return (
    <div className="userList">
      <h1 className="userList-container container">
        {users.map((user) => {
          return (
            <div key={user.id} className="card">
              <div className="card-inner">
                <img
                  src={user.image}
                  alt={user.name}
                  width={150}
                  height={150}
                />
                <h3>
                  {user.firstName} {user.lastName}, {user.age} age
                </h3>
                <p>From: {user.from} </p>
                <p>Job: {user.job} </p>
                <p>Gender: {user.gender}</p>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </h1>
    </div>
  );
}

export default UserList;
