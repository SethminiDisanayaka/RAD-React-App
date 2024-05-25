import {Component} from "react";
import icon from '../../images/coca-leaves.png'

export class NavBar extends Component {

    render() {
        return (
           <div className="p-3 bg-[#1f6326] flex">
            <h1 className="text-1x1 text-[#0af712] "> Organic Shop</h1>
            <img className="h-9 w-9 p-1" src={icon} alt="" />

            <ul className="list-none ml-[500px]">
                <li className="inline-block text-[#0af712] mr-4 cursor-pointer hover:text-[#000000]">Home</li>
                <li className="inline-block text-[#0af712] mr-4 cursor-pointer hover:text-[#000000]">About</li>
                <li className="inline-block text-[#0af712] mr-4 cursor-pointer hover:text-[#000000]"> Contact</li>
            </ul>
           </div>
        );
    }
}