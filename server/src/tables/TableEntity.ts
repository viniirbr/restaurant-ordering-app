import { Order } from "src/orders/OrdersEntity"
import { User } from "src/users/UserEntity"

interface TableProps {
    tableNumber: number,
    status: 'open' | 'closed' | 'inactive',
    attendant: User
    createdAt: Date,
    updatedAt: Date,
    orders: Order[]
}

export class Table {
    constructor(private props: TableProps) { }

    public get tableNumber() {
        return this.props.tableNumber
    }

    public set tableNumber(number: number) {
        this.props.tableNumber = number
    }

    public get status() {
        return this.props.status
    }

    public get attendant() {
        return this.props.attendant
    }

    public set attendant(attendant: User) {
        this.props.attendant = attendant
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

    public closeTable() {
        this.props.status = 'closed'
    }

    public openTable() {
        this.props.status = 'open'
    }

    public inactivateTable() {
        this.props.status = 'closed'
    }
}