
// interface for user data
export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    ip: string;
    role: string;
    address: IAddress;
    company: ICompany;
}

// interface for user address data
export interface IAddress {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    country: string;
}

// interface for user company data, which includes address also
export interface ICompany {
    department: string;
    name: string;
    title: string;
    address: IAddress
}

