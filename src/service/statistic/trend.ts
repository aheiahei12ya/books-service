const expenseTrend = (
  req: any,
  res: {
    send: (arg0: {
      success: boolean
      data: { trend: number[]; month: string[] }
    }) => void
  }
) => {
  res.send({
    success: true,
    data: {
      trend: [
        18767.98, 15102.37, 6495.19, 36532.22, 3422.41, 4305.09, 19535.71,
        5418.95, 24092.87, 18596.1, 5204.55, 3341.49
      ],
      month: [
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月'
      ]
    }
  })
}

const balanceTrend = (
  req: any,
  res: {
    send: (arg0: {
      success: boolean
      data: { trend: number[]; month: string[] }
    }) => void
  }
) => {
  res.send({
    success: true,
    data: {
      trend: [
        100, 560, 740, 130740, 240400, 354340, 406100, 597200, 608210, 779230,
        890200, 999990
      ],
      month: [
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月'
      ]
    }
  })
}

const expenseHistogram = (
  req: any,
  res: {
    send: (arg0: { success: boolean; data: { expense: number[] } }) => void
  }
) => {
  res.send({
    success: true,
    data: {
      expense: [
        29.9, 4, 42.45, 656.58, 0, 10.11, 34.8, 227, 6.04, 99.37, 14.48, 150.92,
        10.11, 1.6, 4, 6, 83.32, 748.89, 44.68, 43.19, 0, 69.48, 0, 0, 114, 0,
        0, 26.2, 460.51, 65.42, 388.44
      ]
    }
  })
}

export { balanceTrend, expenseHistogram, expenseTrend }
