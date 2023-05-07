import { Spin } from 'antd'
import { css } from '@emotion/react'
import { useAppSelector } from '../app/hook'
function Loading() {
  const isLoading = useAppSelector((state) => state.loading.isLoading)

  return isLoading ? (
    <div className="absolute w-full h-full top-0 right-0">
      <div
        css={css`
          background-color: rgba(0, 0, 0, 0.3);
        `}
        className="w-full h-full flex items-center justify-center"
      >
        <Spin size="large" />
      </div>
    </div>
  ) : null
}

export default Loading
