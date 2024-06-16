// * 登录模块
declare namespace Login {
  interface LoginParam {
    UserName: string
    Password: string
    VerifyCode: string
    CaptchaId: string
  }
  interface LoginResult {
    token: string
  }
  interface UserInfo {
    NickName: string
    UserName: string
    Avatar: string
  }
  interface UserPermission {
    Menus: Menu[]
    Perms: string[]
  }
}
