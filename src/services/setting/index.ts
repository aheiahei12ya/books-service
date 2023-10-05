const settingList = (
  req: any,
  res: { send: (arg0: { success: boolean; data: string }) => void },
) => {
  res.send({
    success: true,
    data: '设置列表',
  });
};

export { settingList };
