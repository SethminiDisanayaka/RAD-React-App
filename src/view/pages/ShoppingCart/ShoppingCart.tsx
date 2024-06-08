import {Component} from "react";
import { CartItem } from "../../../Model/CartItem";


interface shoppingCartProps {
    itemsList: CartItem[];
    
}
export class ShoppingCart extends Component {

    render() {
        return (
           <h1>This is shopping cart</h1>
        );
    }
}