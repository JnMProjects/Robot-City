import { GET } from './route';

describe('Github Profile API Tests', () => {
    it('should return a 300 status and "No Input Given" message if no username is provided', async () => {
        const req = {
            headers: new Headers(),
        };

        const response = await GET(new Request("", req));

        expect(response.status).toBe(300);
        expect(await response.json()).toEqual({
            status: 300,
            message: 'No Input Given',
        });
    });

    it('should return a 200 status and the avatar URL if a valid username is provided', async () => {
        const req = {
            headers: new Headers({
                username: 'jackatdjl',
            }),
        };

        const response = await GET(new Request("", req));

        expect(response.status).toBe(200);
        expect(await response.json()).toEqual({
            status: 200,
            message: 'Success',
            data: 'https://example.com/avatar.jpg',
        });

        // Restore the original implementation of parseGitAvatar
        jest.restoreAllMocks();
    });

    it('should return a 500 status and an error message if an error occurs during avatar parsing', async () => {
        const req = {
            headers: new Headers({
                username: 'john_doe',
            }),
        };

        const response = await GET(new Request("", req));

        expect(response.status).toBe(500);
        expect(await response.json()).toEqual({
            status: 500,
            message: 'Internal Server Error',
            error: 'Avatar parsing error',
        });

        // Restore the original implementation of parseGitAvatar
        jest.restoreAllMocks();
    });
});