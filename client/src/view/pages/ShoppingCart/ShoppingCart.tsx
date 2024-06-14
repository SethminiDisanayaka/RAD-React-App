import {Component} from "react";
import { CartItem } from "../../../Model/CartItem";


interface shoppingCartProps {
    itemsList: CartItem[];

}
export class ShoppingCart extends Component<shoppingCartProps> {

    render() {
        return (
           <div className="flex justify-center items-center min-h-screen">
            <table  className="w-full mx-6">
                <tr className="bg-gray-400">
                    <th className="text-[9px] font-nomal border-black border-[0.5px] px-1">Id</th>
                    <th className="text-[9px] font-nomal border-black border-[0.5px] px-1">Name</th>
                    <th className="text-[9px] font-nomal border-black border-[0.5px] px-1">Unit Price</th>
                    <th className="text-[9px] font-nomal border-black border-[0.5px] px-1">Quantity</th>  
                    <th className="text-[9px] font-nomal border-black border-[0.5px] px-1">Total Price</th>                  
                     </tr>
            </table>
           </div>
        );
    }
}