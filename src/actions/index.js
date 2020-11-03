const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
};

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    };
};

const menuError = () => {
    return {
        type: 'MENU_ERROR'
    };
};

const addedToCard = (id) => {
    return {
        type: 'ITEM_ADD_TO_CARD',
        payload: id
    };
};

const deleteFromCart = (id) => {
    return {
        type: 'ITEM_REMOVE_FROM_CART',
        payload: id
    };
};

const incCount = (id) => {
    return {
        type: 'INC_COUNT',
        payload: id
    }
}

export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCard,
    deleteFromCart,
    incCount
};