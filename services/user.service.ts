/** File imports */
const models = require("../models");

export namespace UserService {
  export async function getUserById(userId: number): Promise<any> {
    try {
      const user = await models.User.findOne({
        where: {
          userId: userId
        }
      });
      if (!user) {
        throw new Error(`User with ${userId} not found.`);
      }
      return user;
    } catch (e) {
      console.error("Error on getUserById()", e);
    }
  }
}
