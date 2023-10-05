const expenseTimes = (
  req: any,
  res: {
    send: (arg0: {
      success: boolean;
      data: { expenseTimes: number[] };
    }) => void;
  },
) => {
  res.send({
    success: true,
    data: {
      expenseTimes: [
        2, 1, 1, 8, 1, 1, 2, 2, 1, 1, 1, 2, 5, 1, 1, 1, 2, 0, 3, 2, 3, 1, 2, 1,
        3, 4, 4, 5, 1, 3, 4, 3, 4, 5, 6,
      ],
    },
  });
};

const historyToday = (
  req: any,
  res: {
    send: (arg0: {
      success: boolean;
      data: {
        records: {
          year: number;
          items: {
            type: string;
            note: string;
            category: string;
            subcategory: string;
            amount: string;
            time: string;
          }[];
        }[];
      };
    }) => void;
  },
) => {
  res.send({
    success: true,
    data: {
      records: [
        {
          year: 2021,
          items: [
            {
              type: '支出',
              note: '商品1',
              category: '类别类别类别',
              subcategory: '子类别',
              amount: '100.23',
              time: '19:30',
            },
            {
              type: '支出',
              note: '商品2',
              category: '类别',
              subcategory: '子类别',
              amount: '100.23',
              time: '19:30',
            },
            {
              type: '支出',
              note: '商品3',
              category: '类别',
              subcategory: '子类别',
              amount: '100.23',
              time: '19:30',
            },
            {
              type: '支出',
              note: '商品4',
              category: '类别',
              subcategory: '子类别',
              amount: '100.23',
              time: '19:30',
            },
          ],
        },
        {
          year: 2019,
          items: [
            {
              type: '支出',
              note: '商品1',
              category: '类别',
              subcategory: '子类别',
              amount: '100.23',
              time: '19:30',
            },
            {
              type: '支出',
              note: '商品2',
              category: '类别',
              subcategory: '子类别',
              amount: '100.23',
              time: '19:30',
            },
            {
              type: '支出',
              note: '商品3',
              category: '类别',
              subcategory: '子类别',
              amount: '100.23',
              time: '19:30',
            },
            {
              type: '支出',
              note: '商品4',
              category: '类别',
              subcategory: '子类别',
              amount: '100.23',
              time: '19:30',
            },
            {
              type: '支出',
              note: '商品4',
              category: '类别',
              subcategory: '子类别',
              amount: '100.23',
              time: '19:30',
            },
            {
              type: '支出',
              note: '商品4',
              category: '类别',
              subcategory: '子类别',
              amount: '100.23',
              time: '19:30',
            },
            {
              type: '支出',
              note: '商品4',
              category: '类别',
              subcategory: '子类别',
              amount: '100.23',
              time: '19:30',
            },
            {
              type: '支出',
              note: '商品4',
              category: '类别',
              subcategory: '子类别',
              amount: '100.23',
              time: '19:30',
            },
          ],
        },
        {
          year: 2018,
          items: [
            {
              type: '支出',
              note: '商品1',
              category: '类别',
              subcategory: '子类别',
              amount: '100.23',
              time: '19:30',
            },
            {
              type: '支出',
              note: '商品2',
              category: '类别',
              subcategory: '子类别',
              amount: '100.23',
              time: '19:30',
            },
            {
              type: '支出',
              note: '商品3',
              category: '类别',
              subcategory: '子类别',
              amount: '100.23',
              time: '19:30',
            },
            {
              type: '支出',
              note: '商品4',
              category: '类别',
              subcategory: '子类别',
              amount: '100.23',
              time: '19:30',
            },
          ],
        },
      ],
    },
  });
};

const methodReminder = (
  req: any,
  res: {
    send: (arg0: {
      success: boolean;
      data: {
        installmentItems: {
          note: string;
          remain: string;
          finish: string;
          amount: string;
        }[];
        autoRecordItems: {
          date: string;
          note: string;
          remain: string;
          amount: string;
          id: number;
        }[];
        reimbursementItems: {
          note: string;
          date: string;
          state: string;
          id: number;
        }[];
      };
    }) => void;
  },
) => {
  res.send({
    success: true,
    data: {
      installmentItems: [
        {
          note: '商品1',
          remain: '10',
          finish: '14',
          amount: '100.23',
        },
        {
          note: '商品1',
          remain: '10',
          finish: '14',
          amount: '100.23',
        },
        {
          note: '商品1',
          remain: '10',
          finish: '14',
          amount: '100.23',
        },
        {
          note: '商品1',
          remain: '10',
          finish: '14',
          amount: '100.23',
        },
        {
          note: '商品1',
          remain: '10',
          finish: '14',
          amount: '100.23',
        },
        {
          note: '商品1',
          remain: '10',
          finish: '14',
          amount: '100.23',
        },
        {
          note: '商品1',
          remain: '10',
          finish: '14',
          amount: '100.23',
        },
        {
          note: '商品1',
          remain: '10',
          finish: '14',
          amount: '100.23',
        },
        {
          note: '商品1',
          remain: '10',
          finish: '14',
          amount: '100.23',
        },
      ],
      autoRecordItems: [
        {
          date: '30号/月',
          note: '商品1',
          remain: '10',
          amount: '100.23',
          id: 1,
        },
      ],
      reimbursementItems: [
        {
          note: '商品1',
          date: '2022-02-02',
          state: '报销中',
          id: 1,
        },
      ],
    },
  });
};

const classification = (
  req: any,
  res: {
    send: (arg0: {
      success: boolean;
      data: {
        headList: { itemName: string; amount: number; percentage: number }[];
        itemList: { itemName: string; amount: number; percentage: number }[];
      };
    }) => void;
  },
) => {
  res.send({
    success: true,
    data: {
      headList: [
        {
          itemName: '本月收入',
          amount: 3333.33,
          percentage: 84.3,
        },
        {
          itemName: '本月支出',
          amount: 88888.88,
          percentage: 84.3,
        },
      ],
      itemList: [
        {
          itemName: '日常开销',
          amount: 3213.23,
          percentage: 84.3,
        },
        {
          itemName: '住房开销',
          amount: 3133.23,
          percentage: 84.3,
        },
        {
          itemName: '意外开销',
          amount: 2133.23,
          percentage: 84.3,
        },
        {
          itemName: '设备引进',
          amount: 133.23,
          percentage: 84.3,
        },
        {
          itemName: '人物培养',
          amount: 133.23,
          percentage: 84.3,
        },
        {
          itemName: '生活开销',
          amount: 133.23,
          percentage: 84.3,
        },
        {
          itemName: '虚拟商品',
          amount: 33.23,
          percentage: 84.3,
        },
        {
          itemName: '败家消费',
          amount: 133.23,
          percentage: 84.3,
        },
        {
          itemName: '出行开销',
          amount: 333.23,
          percentage: 84.3,
        },
      ],
    },
  });
};

export { expenseTimes, historyToday, methodReminder, classification };
