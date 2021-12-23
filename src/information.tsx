import { useActiveViewId, useMeta, usePrimaryField, useViewMeta } from '@vikadata/widget-sdk';
import React from 'react';

export const Information: React.FC = () => {
  const meta = useMeta();
  const activeViewId = useActiveViewId();
  const view = useViewMeta(activeViewId);
  const primaryField = usePrimaryField();
  return (
    <div>
        <h3>小程序基本信息</h3>
        <p>小程序包名: {meta?.widgetPackageName}</p>
        <p>维格表名: {meta?.datasheetName}</p>
        <p>小程序实例 ID (widgetId): {meta?.id}</p>
        <p>数据来源表 ID (datasheetId): {meta?.datasheetId}</p>
        <p>当前激活的视图: {view?.name}</p>
        <p>主字段名: {primaryField?.name}</p>
    </div>
  );
};
