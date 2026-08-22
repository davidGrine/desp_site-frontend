

export default function LoginPage() {
    return <form className="registration-form flex flex-col items-center justify-center">
        <h1>Login</h1>
        <p>Please fill out the form below to register.</p>

        <input type="email" placeholder="Enter your email here..." />
        <input type="password" placeholder="Enter your password here..." />

        <button type="submit">Login</button>
    </form>
}
