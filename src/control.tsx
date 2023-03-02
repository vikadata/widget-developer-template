import { Button } from '@apitable/components';
import {
  usePrimaryField, useRecords, useExpandRecord, useActiveViewId, useViewport, useSettingsButton
} from '@apitable/widget-sdk';
import React from 'react';

export const Control: React.FC = () => {
  const {isFullscreen, toggleFullscreen} = useViewport();
  const [isShowingSettings, toggleSettings] = useSettingsButton();
  const expandRecord = useExpandRecord();
  const viewId = useActiveViewId();
  const primaryField = usePrimaryField();
  const allRecords = useRecords(viewId);

  return (
    <div>
        <h3>The widget's own config control and reading</h3>
        <p>First record: {allRecords.length && allRecords[0].getCellValueString(primaryField!.id)} <Button size="small" onClick={() => expandRecord({viewId, recordIds: [allRecords.length && allRecords[0].id]})}>Expand</Button></p>
        <p>WidgetFullscreen: {isFullscreen+ ''} <Button size="small" onClick={() => toggleFullscreen()}>Toggle</Button></p>
        <p>
          WidgetSettingOpened(only allowed to open in expanded mode): {isShowingSettings + ''}
          <Button size="small" onClick={() => toggleSettings()}>Toggle</Button>
        </p>
    </div>
  );
};
