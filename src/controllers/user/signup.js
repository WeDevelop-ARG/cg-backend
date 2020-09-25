export default async ({ email, password, name }, { cognitoService, userModel }) => {
  await cognitoService.addUser(email, password)
  const auth = await cognitoService.authenticate(email, password)

  const user = await userModel.create({ email, password, name })

  return { id: user.id, name: user.name, email: user.email, token: auth.idToken.jwtToken }
}
