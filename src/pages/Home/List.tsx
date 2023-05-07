import TableBase from '@components/TableBase'
import User from '@src/apis/User.api'
import { showLoader } from '@src/features/Loading'
import { showToast } from '@src/hooks'
import { TableBaseHeaderType, UserType } from '@src/types/global.type'
import { useEffect, useMemo, useState } from 'react'
import { useAppDispatch } from '../../app/hook'
import { useTranslation } from 'react-i18next'
function List() {
  const [dataTable, setDataTable] = useState<[]>()

  const { t } = useTranslation()

  const dispatch = useAppDispatch()

  useEffect(() => {
    getList()
  }, [])

  const getList = async () => {
    dispatch(showLoader(true))
    try {
      const { data } = await User.list()

      setDataTable(data)
      showToast('success', 'Get data success!')
    } catch (error) {
      showToast('error', 'Get data failure!')
    } finally {
      dispatch(showLoader(false))
    }
  }

  const header: TableBaseHeaderType[] | undefined = useMemo(() => {
    return [
      {
        title: t('id'),
        rowSpan: null,
        colSPan: null,
        width: null,
        height: null,
        border: null,
      },
      {
        title: t('name'),
        rowSpan: null,
        colSPan: null,
        width: null,
        height: null,
        border: null,
      },
      {
        title: t('email'),
        rowSpan: null,
        colSPan: null,
        width: null,
        height: null,
        border: null,
      },
      {
        title: t('create_at'),
        rowSpan: null,
        colSPan: null,
        width: null,
        height: null,
        border: null,
      },
      {
        title: t('update_at'),
        rowSpan: null,
        colSPan: null,
        width: null,
        height: null,
        border: null,
      },
    ]
  }, [dataTable])

  const dataSource = useMemo(() => {
    return dataTable?.map((item: UserType) => ({
      id: item.id,
      name: item.name,
      email: item.email,
      create_at: item.create_at,
      update_at: item.update_at,
    }))
  }, [dataTable])

  return (
    <>
      {/* <TableBase header={header} dataSource={dataSource} /> */}
    </>
  )
}

export default List
