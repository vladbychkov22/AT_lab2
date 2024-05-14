const { callFunction1 } = require('./functions');

jest.mock('./functions', () => ({
    __esModule: true,
    callFunction1: jest.fn().mockImplementation(() => {

        return require('./functions').function2({ name: 'John', lastname: 'Doe' });
    }),

    function2: jest.fn()
}));

describe('Test callFunction1 function', () => {

    it('should call function2 with name=John and lastname=Doe', () => {
        callFunction1();

        expect(require('./functions').function2).toHaveBeenCalledWith({ name: 'John', lastname: 'Doe' });
    });
});
