import {Component} from "react";
import { CartItem } from "../../../Model/CartItem";
import { Product } from "../product/product";

interface ModifyCartProps{
    data : any
}

interface ModifyCartState{
    itemCount : number
}

export class ModifyCart extends Component <ModifyCartProps ,ModifyCartState>{

    public static itemsList: CartItem[] =[]

    constructor (props :ModifyCartProps){
        super(props);

        this.state ={
            itemCount:1
        }
    }

    componentDidMount() {
        const {itemCount}
            = this.state;

        if (this.props.data.isAdded) {
            if (!ModifyCart.itemsList
                .find(item=>
                    item.product.id ===
                    this.props.data.product.id)) {
                ModifyCart.itemsList.push(
                    {
                        product: this.props.data.product,
                        itemCount: itemCount
                    }
                );
                console.log(ModifyCart.itemsList);
            }
        }
    }

    componentDidUpdate(prevProps: Readonly<ModifyCartProps>, prevState: Readonly<ModifyCartState>, snapshot?: any): void {
        let {itemCount} = this.state;
        let item =ModifyCart.itemsList.find(item => item.product.id === this.props.data.product.id)

        if(item){
            let index = ModifyCart.itemsList.indexOf(item);
            ModifyCart.itemsList.splice(index ,1);
            ModifyCart.itemsList.push({
                product: this.props.data.product,
                itemCount:itemCount
            })
        }

    }

    render() {

    let {itemCount} =this.state;

    const increaseItemCount =
    () => {
    this.setState({
          itemCount: ++itemCount
          })
    }

    const decreaseItemCount =
        () => {
      this.setState({
      itemCount: --itemCount
      })
    }


            return (
               <div className=" w-full mt-1 p-[2.4px] text-[8px] text-center">
                                               <button className="float-left text-[8px] bg-yellow-300 rounded-lg h-3 w-4" onClick={decreaseItemCount}> - </button>
                                               <small className="text-[8px]"> {itemCount} </small>
                                               <button className="float-right text-[8px] bg-yellow-300 rounded-lg h-3 w-4" onClick={increaseItemCount}> + </button>
                                           </div>
            );
}
}