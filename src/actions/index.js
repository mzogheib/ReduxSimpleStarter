export function selectBook (book) {
    // selectBook is an action creator and returns an action.
    // This is an object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}