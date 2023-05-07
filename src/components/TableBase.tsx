import { TableBaseBodyType, TableBaseHeaderType } from '@src/types/global.type'
import React, { useTransition } from 'react'
import { useTranslation } from 'react-i18next'

interface TableBaseProps {
  header: TableBaseHeaderType[] | undefined
  dataSource: []
}

const TableBase: React.FC<TableBaseProps> = ({ header, dataSource }) => {
  const { t } = useTranslation()
  console.log(dataSource);
  

  return (
    <table>
      <thead>
        <tr>
          {header?.map((item) => (
            <th key={item.title}>{item.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* {dataSource.map((item, index) => (
          <tr key={item.id}>
            <td>{item[`${`${[header[index].title]}`}`]}</td>
          </tr>
        ))} */}
      </tbody>
    </table>
  )
}

export default TableBase
