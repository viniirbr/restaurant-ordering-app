import { Replace } from "src/helpers/Replace";
import { Table } from "src/tables/TableEntity";

interface UserProps {
    id: string
    name: string,
    email: string,
    password: string,
    tables: Table[],
    createdAt: Date,
    updatedAt?: Date
}

export class User {
    constructor(private props: Replace<UserProps, { createdAt?: Date }>) {
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date()
        }
    }

    public get id() {
        return this.props.id
    }

    public get name() {
        return this.props.name
    }

    public set name(name: string) {
        this.props.name = name
    }

    public get email() {
        return this.props.email
    }

    public set email(email: string) {
        this.props.email = email
    }

    public get password() {
        return this.props.password
    }

    public set password(password: string) {

        if (password.length < 4) {
            throw new Error('Password must have more than 4 characters')
        }

        this.props.password = password
    }

    public get createdAt() {
        return this.props.createdAt
    }

    public get updatedAt() {
        return this.props.createdAt
    }

    public set updatedAt(date: Date) {
        this.props.updatedAt = date
    }
}