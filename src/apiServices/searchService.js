//Axious
import * as request from '~/utils/request';

export const search = async (q, type = 'less') => {
    try {
        //The encodeURIComponent() function encodes a URI by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character
        const res = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.lof(error);
    }
};
