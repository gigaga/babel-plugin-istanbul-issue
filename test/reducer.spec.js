import { expect } from 'chai';
import reducer from '../client/reducer';


describe('Reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {}),
        ).to.deep.equal([]);
    });
});
