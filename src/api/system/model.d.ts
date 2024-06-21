declare namespace System {
  interface Menu {
    Id: number
    ParentId?: number
    MenuName?: string
    OrderSort: number
    /** 路由地址 */
    Path?: string
    /** 组件路径 */
    Component?: string
    /** 是否内嵌 */
    IsIframe: boolean
    // 是否为外链页面
    IsLink?: boolean
    /** 是否缓存 */
    IsCache: boolean
    /** 是否隐藏 */
    IsHidden: boolean
    /** 类型 '0': 目录 | '1': 菜单 | '2': 权限 */
    MenuType: '0' | '1' | '2'
    /** 状态 '0': 正常 | '1': 停用  */
    Status: '0' | '1'
    Icon?: string
    /** 是否在tag中显示 */
    IsTagsView: boolean
    /** 是否在固定在tag上 */
    IsAffix: boolean
    /** 外链地址 */
    LinkUrl?: string
    Description?: string
    Perms?: string
    CreatedUserId?: number
    ModifiedUserId?: number
    CreatedUserName?: string
    ModifiedUserName?: string
    CreatedTime?: Date
    ModifiedTime?: Date
    Children?: Array<Menu>
  }
}
