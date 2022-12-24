export default function Register() {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <form>
                <input type="text" placeholder="username" />
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button>Sign Up</button>
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
  );
}
