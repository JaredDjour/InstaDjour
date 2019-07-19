export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

// export const openModal = (modal) =>  { type: OPEN_MODAL, modal };
export const openModal = (modal, item) => {
    return { 
        type: OPEN_MODAL, 
        modal,
        item,
    };
};

// export const closeModal = () => { type: CLOSE_MODAL };
export const closeModal = () => { 
    return {
        type: CLOSE_MODAL 
    };
};