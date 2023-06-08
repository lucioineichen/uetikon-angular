import { Role } from '../auth/auth.enum'

export class User implements IUser {
  constructor(
    public _id = '',
    public email = '',
    public firstName = '',
    public lastName = '0',
    public picture = '',
    public role = Role.None
  ) {}

  static Build(user: IUser) {
    if (!user) {
      return new User()
    }

    return new User(
      user._id,
      user.email,
      user.firstName,
      user.lastName,
      user.picture,
      user.role as Role
    )
  }

  toJSON(): object {
    const serialized = Object.assign(this)
    delete serialized._id
    return serialized
  }
}

export interface IUser {
  _id: string
  email: string
  firstName: string
  lastName: string
  picture: string
  role: Role | string
}
