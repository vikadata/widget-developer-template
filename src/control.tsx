import { Button } from '@vika/components';
import {
  useConfig, useDefaultView, usePrimaryField, useRecords, useExpandRecord
} from '@vika/widget-sdk';
import React from 'react';

export const Control: React.FC = () => {
  // 新建图表需要的上下文
  const config = useConfig();
  const expandRecord = useExpandRecord();
  const view = useDefaultView();
  const primaryField = usePrimaryField();
  const allRecords = useRecords(view.id);

  return (
    <div>
        <h3>组件自身 config 控制与读取</h3>
        <p>第一个 record: {allRecords[0].getCellValueString(primaryField!.id)} <Button size="small" onClick={() => expandRecord({viewId: view.id, recordId: allRecords[0].id})}>Expand</Button></p>
        <p>WidgetExpanded: {config.isExpanded + ''} <Button size="small" onClick={() => config.toggleExpand()}>Toggle</Button></p>
        <p>
          WidgetSettingOpened（只允许在展开模式下打开）: {config.isSettingOpened + ''}
          <Button size="small" onClick={() => config.toggleSetting()}>Toggle</Button>
        </p>
    </div>
  );
};
