export interface ILoginForm {
    user: string,
    password: string
}

export interface IAuth {
    isAuthenticated: boolean,
    token: string | null,
    isAdmin: boolean,
}

export interface IProfile {
    name: string | null,
    role: "Admin" | "User"
}

export interface IProducts {
    name: string,
    price: number,
    description: string,
    image: string,
    id: string
}