import { useActiveViewId, useMeta, usePrimaryField, useViewMeta } from '@vika/widget-sdk';
import React from 'react';

export const Information: React.FC = () => {
  // 新建图表需要的上下文
  const meta = useMeta();
  const activeViewId = useActiveViewId();
  const view = useViewMeta(activeViewId);
  const primaryField = usePrimaryField();
  return (
    <div>
        <h3>组件基本信息</h3>
        <p>组件包名: {meta?.widgetPackageName}</p>
        <p>数表名: {meta?.datasheetName}</p>
        <p>组件实例 ID (widgetId): {meta?.id}</p>
        <p>数据来源表 ID (datasheetId): {meta?.datasheetId}</p>
        <p>当前激活的视图: {view?.name}</p>
        <p>主字段名: {primaryField.name}</p>
    </div>
  );
};
