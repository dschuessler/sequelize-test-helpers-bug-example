import 'mocha';
import * as proxyquire from 'proxyquire';
import { expect } from 'chai';
import { makeMockModels } from 'sequelize-test-helpers';

describe('UserService', () => {
    describe('getUserById()', () => {
        it.only('should return the user with the given userId', async () => {
            const user = {username: 'Test'};
            const mockModels = makeMockModels({
                User: {
                    findOne: () => {
                        return user;
                    },
                },
            });
            const UserService = proxyquire('./user.service', {
                '../models': mockModels,
            });

            const result = await UserService.getUserById(user.username);
            expect(result, 'user object').to.not.be.undefined;
        });
    });
});