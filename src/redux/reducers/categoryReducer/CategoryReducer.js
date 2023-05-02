const initialState = {
    category: [
        {
            id: 0,
            title: "Mobile",
            image: require('../../../assets/images/mobile.png') ,
            item: [
                {
                    id: 0,
                    itemName: "React Native",
                    image: require('../../../assets/images/react_native.png') ,
                }
            ]
        },
        {
            id: 1,
            title: "Web",
            image: require('../../../assets/images/web.png') ,
            item: [
                {
                    id: 1,
                    itemName: "CSS",
                    image: require('../../../assets/images/css.png') ,
                }
            ]
        }
    ]
}

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}


export const selectCategory = (s) => s.category.category
