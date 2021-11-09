import { Button } from '@vikadata/components';
import {
  usePrimaryField, useRecords, useExpandRecord, useActiveViewId, useViewport, useSettingsButton
} from '@vikadata/widget-sdk';
import React from 'react';

export const Control: React.FC = () => {
  const [isFullscreen, toggleFullscreen] = useViewport();
  const [isShowingSettings, toggleSettings] = useSettingsButton();
  const expandRecord = useExpandRecord();
  const viewId = useActiveViewId();
  const primaryField = usePrimaryField();
  const allRecords = useRecords(viewId);

  return (
    <div>
        <h3>组件自身 config 控制与读取</h3>
        <p>第一个 record: {allRecords[0].getCellValueString(primaryField!.id)} <Button size="small" onClick={() => expandRecord({viewId, recordIds: [allRecords[0].id]})}>Expand</Button></p>
        <p>WidgetFullscreen: {isFullscreen+ ''} <Button size="small" onClick={() => toggleFullscreen()}>Toggle</Button></p>
        <p>
          WidgetSettingOpened（只允许在展开模式下打开）: {isShowingSettings + ''}
          <Button size="small" onClick={() => toggleSettings()}>Toggle</Button>
        </p>
    </div>
  );
};
