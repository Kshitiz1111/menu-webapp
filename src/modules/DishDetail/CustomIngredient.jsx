import React from "react";  

const CustomIngredient = ()=>{

    return(
        <div className="border-dotted">
            <div>
                <p>remove</p>
                <li>
                    <p className="underline">garlic</p>
                </li>
            </div>
            <div>
                <p>Extra</p>
                <li>
                    <span>x2</span>
                    <p>cheese</p>
                    <span>+ Rs: 20</span>
                </li>
            </div>
        </div>
    )
}

export{CustomIngredient};