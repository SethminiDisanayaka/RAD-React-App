import {Component} from "react";
export class login extends Component {

    render() {
        return (
          <div className="flex h-screen bg-[#1f6326]">
              <div className="h-auto mt-4 mb-4 pl-9 pr-9 mx-auto border-gray-400 border-[0.5px]">
                    <h2 className="pt-2 pb-3 text-3xl text-[#FFFFFF] underline decoration-2"> Sign In</h2>

                  <form className="h-auto p-2 justify-center">
                      <div className="p-2">
                          <label className="text-[15px] text-[#0af712]"  > Email:</label>
                          <input className="float-right border-[1px] border-[#70ff73] w-3/4" type="text"/>
                      </div>
                      <div className="p-2">
                          <label className="text-[15px] text-[#0af712]"  > Password</label>
                          <input className="float-right border-[1px] border-[#70ff73] " type="text"/>
                      </div>

                      <div className="mt-2">
                          <button className="mt-5 w-full p-[6px] bg-[#0af712] text-[12px]">Sign In</button>
                      </div>
                  </form>
              </div>
          </div>
        );
    }
}