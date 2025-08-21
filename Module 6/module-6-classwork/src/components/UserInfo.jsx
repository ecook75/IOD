import Avatar from "./Avatar";

export default function UserInfo({ user }) {
    return (
        <div className="UserInfo">
            <Avatar user={user} />
            <div className= "UserInfo-name">{user.name}</div>
        </div>
    )
}
