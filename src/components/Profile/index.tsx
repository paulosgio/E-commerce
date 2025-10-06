import type { IProfile } from "../../interfaces/Interfaces";


export default function Profile({ name, role }: IProfile) {
    return(
        <div>
            <h2>{name}</h2>
            <h3>{role}</h3>
        </div>
    )
}