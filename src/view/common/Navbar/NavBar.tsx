import {Component} from "react";
import icon from '../../../images/coca-leaves.png'
import {Link} from "react-router-dom";

export class NavBar extends Component {
    render() {
        function OnSignInClick(){
            alert("Button Clicked")
        }
        return (
           
            <div className="p-4 bg-[#1f6326] flex">
                <h1 className="text-1x1 text-[#0af712] ">Organic Shop</h1>

                <img className={"h-8 w-8 ml-1"} src={icon} alt={""}></img>

                <ul className="list-none ml-[450px]">
                    <li className="inline-block mr-6 text-[#0af712] cursor-pointer hover:text-green-400"><Link to="/">Home</Link></li>
                    <li className="inline-block mr-6 text-[#0af712] cursor-pointer hover:text-green-400"><Link to="/about">About</Link></li>
                    <li className="inline-block mr-6 text-[#0af712] cursor-pointer hover:text-green-400"><Link to="/contact">Contact</Link></li>
                </ul>

        <button className="text-[12px] text-[#000000] bg-[#3febb5] pl-3 pr-3 rounded hover:text-[#ffffff] ml-[600px]" 
               onClick={OnSignInClick} > Sign In</button>
                </div>
        );
    }
}