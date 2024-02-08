const yearList = (
  req: any,
  res: {
    send: (arg0: {
      success: boolean
      data: {
        yearList: {
          year: string
          items: {
            year: string
            month: string
            income: string
            expense: string
          }[]
        }[]
      }
    }) => void
  }
) => {
  res.send({
    success: true,
    data: {
      yearList: [
        {
          year: '2023',
          items: [
            {
              year: '2023',
              month: '3',
              income: '0.00',
              expense: '1733.91'
            },
            {
              year: '2023',
              month: '2',
              income: '26580.76',
              expense: '2446.10'
            },
            {
              year: '2023',
              month: '1',
              income: '51865.46',
              expense: '18821.95'
            }
          ]
        },
        {
          year: '2022',
          items: [
            {
              year: '2022',
              month: '12',
              income: '25698.11',
              expense: '3341.49'
            },
            {
              year: '2022',
              month: '11',
              income: '25698.11',
              expense: '5204.55'
            },
            {
              year: '2022',
              month: '10',
              income: '26520.01',
              expense: '18596.10'
            },
            {
              year: '2022',
              month: '9',
              income: '27283.71',
              expense: '24092.87'
            },
            {
              year: '2022',
              month: '8',
              income: '27866.11',
              expense: '5418.95'
            },
            {
              year: '2022',
              month: '7',
              income: '22057.61',
              expense: '19535.71'
            },
            {
              year: '2022',
              month: '6',
              income: '22212.50',
              expense: '4305.09'
            },
            {
              year: '2022',
              month: '5',
              income: '22190.00',
              expense: '3422.41'
            },
            {
              year: '2022',
              month: '4',
              income: '22362.50',
              expense: '36532.22'
            },
            {
              year: '2022',
              month: '3',
              income: '22407.50',
              expense: '6495.19'
            },
            {
              year: '2022',
              month: '2',
              income: '140918.65',
              expense: '15102.37'
            },
            {
              year: '2022',
              month: '1',
              income: '37047.28',
              expense: '18767.98'
            }
          ]
        },
        {
          year: '2021',
          items: [
            {
              year: '2021',
              month: '12',
              income: '17757.50',
              expense: '3419.50'
            },
            {
              year: '2021',
              month: '11',
              income: '17735.00',
              expense: '6965.72'
            },
            {
              year: '2021',
              month: '10',
              income: '17600.00',
              expense: '18466.94'
            },
            {
              year: '2021',
              month: '9',
              income: '17735.00',
              expense: '9097.85'
            },
            {
              year: '2021',
              month: '8',
              income: '17735.00',
              expense: '2610.71'
            },
            {
              year: '2021',
              month: '7',
              income: '17991.03',
              expense: '17034.89'
            },
            {
              year: '2021',
              month: '6',
              income: '18701.25',
              expense: '3619.68'
            },
            {
              year: '2021',
              month: '5',
              income: '26901.87',
              expense: '3845.19'
            },
            {
              year: '2021',
              month: '4',
              income: '81094.74',
              expense: '93488.61'
            },
            {
              year: '2021',
              month: '3',
              income: '17384.90',
              expense: '3848.52'
            },
            {
              year: '2021',
              month: '2',
              income: '53723.23',
              expense: '24688.92'
            },
            {
              year: '2021',
              month: '1',
              income: '8985.23',
              expense: '53521.44'
            }
          ]
        },
        {
          year: '2020',
          items: [
            {
              year: '2020',
              month: '12',
              income: '24366.83',
              expense: '5241.56'
            },
            {
              year: '2020',
              month: '11',
              income: '17846.36',
              expense: '11883.84'
            },
            {
              year: '2020',
              month: '10',
              income: '16573.27',
              expense: '8290.35'
            },
            {
              year: '2020',
              month: '9',
              income: '7839.86',
              expense: '10144.19'
            },
            {
              year: '2020',
              month: '8',
              income: '8299.86',
              expense: '4759.30'
            },
            {
              year: '2020',
              month: '7',
              income: '8281.86',
              expense: '14077.94'
            },
            {
              year: '2020',
              month: '6',
              income: '7748.86',
              expense: '6465.32'
            },
            {
              year: '2020',
              month: '5',
              income: '7548.86',
              expense: '12507.11'
            },
            {
              year: '2020',
              month: '4',
              income: '14128.06',
              expense: '17791.13'
            },
            {
              year: '2020',
              month: '3',
              income: '3646.20',
              expense: '10178.91'
            },
            {
              year: '2020',
              month: '2',
              income: '2960.00',
              expense: '4369.86'
            },
            {
              year: '2020',
              month: '1',
              income: '13810.00',
              expense: '9543.02'
            }
          ]
        }
      ]
    }
  })
}

const expenseList = (
  req: any,
  res: {
    send: (arg0: {
      success: boolean
      data: {
        recordList: (
          | {
              year: string
              month: string
              day: string
              expense: string
              items: {
                id: string
                type: string
                form_id: number
                category: string
                category_id: number
                subcategory: string
                project_id: number
                platform: string
                platform_id: number
                account: string
                account_id: number
                amount: string
                date: string
                time: string
                method: string
                note: string
                installment_bill_id: null
                installment_phase: number
                installment_current: number
                installment_remain: number
                auto_record_bill_id: number
                auto_record_phase: number
                auto_record_times: number
                auto_record_remain: number
                record_datetime: string
              }[]
            }
          | {
              year: string
              month: string
              day: string
              expense: string
              items: {
                id: string
                type: string
                form_id: number
                category: string
                category_id: number
                subcategory: string
                project_id: number
                platform: string
                platform_id: number
                account: string
                account_id: number
                amount: string
                date: string
                time: string
                method: string
                note: string
                installment_bill_id: number
                installment_phase: number
                installment_current: number
                installment_remain: number
                auto_record_bill_id: null
                auto_record_phase: number
                auto_record_times: number
                auto_record_remain: number
                record_datetime: string
              }[]
            }
        )[]
        expense: string
        income: string
        balance: string
      }
    }) => void
  }
) => {
  res.send({
    success: true,
    data: {
      recordList: [
        {
          year: '2023',
          month: '3',
          day: '28',
          expense: '500000.00',
          items: [
            {
              id: '2553',
              type: '支出',
              form_id: 1,
              category: '虚拟商品',
              category_id: 7,
              subcategory: '年费',
              project_id: 31,
              platform: '应用商店',
              platform_id: 6,
              account: '花呗',
              account_id: 5,
              amount: '5.00',
              date: '2023-03-28',
              time: '14:56',
              method: '自动',
              note: 'Apple Music\n第7次自动记录\n剩余次数：5',
              installment_bill_id: null,
              installment_phase: 0,
              installment_current: 0,
              installment_remain: 0,
              auto_record_bill_id: 11,
              auto_record_phase: 12,
              auto_record_times: 7,
              auto_record_remain: 5,
              record_datetime: '2022-10-01T20: 06: 15.257'
            }
          ]
        },
        {
          year: '2023',
          month: '3',
          day: '25',
          expense: '500.00',
          items: [
            {
              id: '2623',
              type: '支出',
              form_id: 1,
              category: '虚拟商品',
              category_id: 7,
              subcategory: '年费',
              project_id: 31,
              platform: '应用商店',
              platform_id: 6,
              account: '花呗',
              account_id: 5,
              amount: '6.00',
              date: '2023-03-25',
              time: '00:02',
              method: '自动',
              note: 'iCloud\n第6次自动记录\n剩余次数：6',
              installment_bill_id: null,
              installment_phase: 0,
              installment_current: 0,
              installment_remain: 0,
              auto_record_bill_id: 12,
              auto_record_phase: 12,
              auto_record_times: 6,
              auto_record_remain: 6,
              record_datetime: '2022-10-29T19: 03: 32.522'
            }
          ]
        },
        {
          year: '2023',
          month: '3',
          day: '18',
          expense: '500.00',
          items: [
            {
              id: '1806',
              type: '支出',
              form_id: 1,
              category: '设备引进',
              category_id: 10,
              subcategory: '小型',
              project_id: 44,
              platform: '苹果商店',
              platform_id: 8,
              account: '花呗',
              account_id: 5,
              amount: '299999.88',
              date: '2023-03-18',
              time: '20:10',
              method: '分期',
              note: 'iPhone 13第19期\n剩余5期',
              installment_bill_id: 21,
              installment_phase: 24,
              installment_current: 19,
              installment_remain: 5,
              auto_record_bill_id: null,
              auto_record_phase: 0,
              auto_record_times: 0,
              auto_record_remain: 0,
              record_datetime: '2021-09-19T10: 03: 04.459'
            },
            {
              id: '1830',
              type: '收入',
              form_id: 1,
              category: '设备引进',
              category_id: 10,
              subcategory: '小型',
              project_id: 44,
              platform: '苹果商店',
              platform_id: 8,
              account: '花呗',
              account_id: 5,
              amount: '429.04',
              date: '2023-03-18',
              time: '20:12',
              method: '分期',
              note: 'iPhone 13 Pro第19期\n剩余5期',
              installment_bill_id: 22,
              installment_phase: 24,
              installment_current: 19,
              installment_remain: 5,
              auto_record_bill_id: null,
              auto_record_phase: 0,
              auto_record_times: 0,
              auto_record_remain: 0,
              record_datetime: '2021-09-19T10:03:46.709'
            }
          ]
        }
      ],
      expense: '500.00',
      income: '80000.00',
      balance: '79500.00'
    }
  })
}

export { expenseList, yearList }
