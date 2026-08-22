

export default function RegistrationPage() {
    return <form className="registration-form flex flex-col items-center justify-center">
        <h1>Registration</h1>
        <p>Please fill out the form below to register.</p>

        <input type="text" placeholder="Enter your name here..." />
        <input type="email" placeholder="Enter your email here..." />
        <input type="password" placeholder="Enter your password here..." />
        <input type="password" placeholder="Confirm your password here..." />

        <button type="submit">Registration</button>
    </form>
}
