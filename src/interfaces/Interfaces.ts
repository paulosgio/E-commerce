export interface ILoginForm {
    user: string,
    password: string
}

export interface IAuth {
    isAuthenticated: boolean,
    token: string | null,
    isAdmin: boolean 
}