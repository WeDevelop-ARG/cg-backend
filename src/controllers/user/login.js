export default async ({ email, password }, { cognitoService, userModel }) => {
  const auth = await cognitoService.authenticate(email, password)

  const [user] = await userModel.findOrCreate({
    where: { email: email },
    defaults: { email, name: 'USUARIO' },
    raw: true
  })

  return { id: user.id, name: user.name, email: user.email, token: auth.idToken.jwtToken }
}
