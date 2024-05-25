import {Component} from "react";

export class Contact extends Component {

    render() {
        return (
            <div className="flex">
                <div className="h-auto pt-5 pl-10 mx-auto ">
                    <div className="p-2">
                        <h2 className="text-3xl text-[#339e5d] text-center underline decoration-2">Contact Us</h2>

                        <p className="text-center mr-[200px] ml-[200px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                             id odio omnis ab natus eius, tempore voluptatum veritatis
                              fugiat iste pariatur! Quae, numquam possimus modi quam recusandae
                               fugit ducimus molestiae!</p>

                            
                    </div>

                    <form className="h-auto p-2 justify-center">
                        <div className="pb-2 ml-[300px]">
                            <label className="text-[15px]">Your Email:</label>
                            <input type="email"  className="float-right border-[1px] border-[#70ff73] mr-[1000px]"/>
                        </div>
                        <div className="pb-2 ml-[300px]">
                            <label className="text-[15px]">Your Subject:</label>
                            <input type="text"  className="float-right border-[1px] border-[#70ff73] mr-[1000px]"/>
                        </div>
                        <div className="pb-2 ml-[300px]">
                            <label className="text-[15px]">Your massege:</label>
                            <input type="text"  className="float-right border-[1px] border-[#70ff73] mr-[1000px]"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}