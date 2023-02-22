import React from 'react';
import { useSettingsButton } from '@apitable/widget-sdk';

export const Setting: React.FC = () => {
  const [isShowingSettings] = useSettingsButton();

  return isShowingSettings ? (
    <div style={{ flexShrink: 0, width: '300px', borderLeft: 'solid 1px gainsboro', paddingLeft: '16px' }}>
      this is settings <br />
      You can see my changes by clicking the gear button in the upper right corner, or the toggle button in the setting property on the left.
    </div>
  ) : null;
};
