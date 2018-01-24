import Product from "../Product";
import {OrderStatus, OrderType} from "../../enums";

class Order {
    public product: Product;
    public amount: number;
    public type: OrderType;
    public status: OrderStatus;
}

export default Order;