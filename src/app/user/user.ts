import { Role } from '../auth/auth.enum'

export interface IName {
  firstName: string
  middleName?: string
  lastName: string
}

export class User implements IUser {
  constructor(
    public _id = '',
    public email = '',
    public name = { firstName: '', lastName: '' } as IName,
    public role = Role.None,
    public picture?: string
  ) {}

  static Build(user: IUser) {
    if (!user) {
      return new User()
    }

    return new User(
      user._id,
      user.email,
      user.name,
      user.role as Role,
      user.picture
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
  name: IName
  role: Role | string
  picture?: string
}
