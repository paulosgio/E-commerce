export interface ILoginForm {
    username: string,
    password: string
}

export interface IAuth {
    token: string | null,
    username: string,
}

export interface IAuthInitialState {
    loading: boolean,
    error: string | null
    data: IAuth | null
}

export interface IProfile {
    name: string | null,
    role: "Admin" | "User"
}

export interface IProducts {
    title: string,
    price: number,
    description: string,
    image: string,
    id: string,
    category?: string
}

export interface IInitialStateProducts {
    loading: boolean,
    error: null | string
    data: null | IProducts[]
}

export interface ICart extends IProducts {
    quantity: number
}