export default function (product = [], action) {

    let productsCopy = [...product];

    switch (action.type) {
        case 'addProducts':
            return action.product;

        default:
            return product;
    };
};