export default function Avatar({ user }) {
    return (
        <img
            className="Avatar"
            src={"https://placecats.com/g/64/64"}
            alt={user.name}
            />
    )
}