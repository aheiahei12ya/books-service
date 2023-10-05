const platformList = (
  req: any,
  res: { send: (arg0: { success: boolean; data: string }) => void },
) => {
  res.send({
    success: true,
    data: '平台列表',
  });
};

export { platformList };
