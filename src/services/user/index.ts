const userLogin = (
  req: any,
  res: {
    send: (arg0: { success: boolean; data: { nickName: string; avatar: string; userInfo: { id: string } } }) => void
  }
) => {
  res.send({
    success: true,
    data: {
      nickName: '12ya',
      avatar: 'http://aheiahei.imdo.co:8081/repository/blob/avatar/avatar.png',
      userInfo: {
        id: '1'
      }
    }
  })
}

const userInfo = (
  req: any,
  res: {
    send: (arg0: { success: boolean; data: { nickName: string; userInfo: { id: string } } }) => void
  }
) => {
  res.send({
    success: true,
    data: {
      nickName: '12ya',
      userInfo: {
        id: '1'
      }
    }
  })
}

export { userInfo, userLogin }
