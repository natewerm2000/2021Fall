const session = {
    user: null,
    messages: []
}

export default session;

export function Login() {
    session.user = {
        FirstName: "Nathaniel",
        LastName:  "Alexander",
    }
}