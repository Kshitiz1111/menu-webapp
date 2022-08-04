import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    dishes : [
        { id: 1, img_src: "", name: "Pasta1", price: "200",
            baseIngredient: ["semolina flour","egg yolk"],
            customIngredient: [
            {
                name: "garlic",
                price: 20
            },
            {
                name: "ground meat",
                price: 20
            },
            {
                name: "cheese",
                price: 20
            }
        ]
        },
        { id: 2, img_src: "", name: "Pasta2", price: "250" ,
            baseIngredient: ["semolina flour","egg yolk"],
            customIngredient: [
            {
                name: "garlic",
                price: 20
            },
            {
                name: "ground meat",
                price: 20
            },
            {
                name: "cheese",
                price: 20
            }
        ]
        },
        { id: 3, img_src: "", name: "Pasta3", price: "300" ,
            baseIngredient: ["semolina flour","egg yolk"],
            customIngredient: [
            {
                name: "garlic",
                price: 20
            },
            {
                name: "ground meat",
                price: 20
            },
            {
                name: "cheese",
                price: 20
            }
        ]
        },
        { id: 4, img_src: "", name: "Pasta4", price: "350" ,
            baseIngredient: ["semolina flour","egg yolk"],
            customIngredient: [
            {
                name: "garlic",
                price: 20
            },
            {
                name: "ground meat",
                price: 20
            },
            {
                name: "cheese",
                price: 20
            }
        ]
        },
        { id: 5, img_src: "", name: "Pasta5", price: "200" ,
            baseIngredient: ["semolina flour","egg yolk"],
            customIngredient: [
            {
                name: "garlic",
                price: 20
            },
            {
                name: "ground meat",
                price: 20
            },
            {
                name: "cheese",
                price: 20
            }
        ]
        },
        { id: 6, img_src: "", name: "Pasta6", price: "200" ,
            baseIngredient: ["semolina flour","egg yolk"],
            customIngredient: [
            {
                name: "garlic",
                price: 20
            },
            {
                name: "ground meat",
                price: 20
            },
            {
                name: "cheese",
                price: 20
            }
        ]
        },
        { id: 7, img_src: "", name: "Pasta3", price: "300" ,
            baseIngredient: ["semolina flour","egg yolk"],
            customIngredient: [
            {
                name: "garlic",
                price: 20
            },
            {
                name: "ground meat",
                price: 20
            },
            {
                name: "cheese",
                price: 20
            }
        ]
        },
        { id: 8, img_src: "", name: "Pasta4", price: "350" ,
            baseIngredient: ["semolina flour","egg yolk"],
            customIngredient: [
            {
                name: "garlic",
                price: 20
            },
            {
                name: "ground meat",
                price: 20
            },
            {
                name: "cheese",
                price: 20
            }
        ]
        },
        { id: 9, img_src: "", name: "Pasta5", price: "200" ,
            baseIngredient: ["semolina flour","egg yolk"],
            customIngredient: [
            {
                name: "garlic",
                price: 20
            },
            {
                name: "ground meat",
                price: 20
            },
            {
                name: "cheese",
                price: 20
            }
        ]
        },
        { id: 10, img_src: "", name: "Pasta6", price: "200" ,
            baseIngredient: ["semolina flour","egg yolk"],
            customIngredient: [
            {
                name: "garlic",
                price: 20
            },
            {
                name: "ground meat",
                price: 20
            },
            {
                name: "cheese",
                price: 20
            }
        ]
        },
    ]
    ,
    userVisited : {
        visited: true,
        recentOrderNo: 6
    }
}

export const initDishes = createSlice({
    name: "DishesDB",
    initialState,
    reducers: {
        
    },
})

export default initDishes.reducer;