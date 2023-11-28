const UserCreateService = require('./UserCreateService')

it("user should be create", async () => {
    const user = {
        name: 'User Test',
        email: "user@example.com",
        password: "2468"
    }

    const userCreateService = new UserCreateService()
    const userCreated = await userCreateService.execute(user)

    expect(userCreated).toHaveproperty("id")
})