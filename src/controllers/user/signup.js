export default async ({ email, password }, { cognitoService, userModel }) => {
  await cognitoService.addUser(email, password)
  const auth = await cognitoService.authenticate(email, password)

  const user = await userModel.create({ email, password })

  return { id: user.id, email: user.email, token: auth.idToken.jwtToken }
}
