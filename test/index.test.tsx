import renderer from 'react-test-renderer';
import IndexPage from '../pages';

describe('Index page', () => {
    it('should match the snapshot', () => {
        const user = {
            name: 'Giggs',
            email: 'giggs@namtech.sg',
            phone: '84973637103',
            address: '165/16c Văn Thân, P8, Q6, TPHCM',
        };
        const tree = renderer.create(<IndexPage user={user} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
