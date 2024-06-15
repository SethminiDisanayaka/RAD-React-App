import {Component} from "react";
import axios from "axios";
import {privateDecrypt} from "crypto";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

interface ContactState {
    email: String;
    subject: String;
    message: String
}
export class Contact extends Component {

    private  api :any;

    constructor(props :any) {
        super(props);
        this.api= axios.create({
            baseURL: 'http://localhost:4000'
        });
    }

    private onSendBtnClick = () => {
        try {
            this.api.post('/contact/submit',{
                "email":"someone@gmail.com",
                "subject":"Contact Subject",
                "message":"Something Went Wrong"
            }).then((res: {data: any}) => {
                const response = res.data;
                alert(response);
            }).catch((error: any) => {
                console.error("Axios Error : ", error);
            });
        }catch (error){
            console.error('Error:', error);
        }
    }

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

                        <div className="mt-2">
                            <button className="mt-5 p-[5px]
                                               bg-green-400
                                               text-[7px]"
                                    onClick={this.onSendBtnClick}>
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}