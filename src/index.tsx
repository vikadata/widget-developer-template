import React from 'react';
import { initializeWidget } from '@apitable/widget-sdk';
import { Information } from './information';
import { Selection } from './selection';
import { Setting } from './setting';
import { Control } from './control';
import { Storage } from './storage';

const WidgetDeveloperTemplate: React.FC = () => {
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ flexGrow: 1, overflow: 'auto', padding: '0 8px'}}>
        <Information />
        <hr />
        <Selection />
        <hr />
        <Control />
        <hr />
        <Storage />
        <br /><br /><br /><br />
      </div>
      <Setting />
    </div>
  );
};


initializeWidget(WidgetDeveloperTemplate, process.env.WIDGET_PACKAGE_ID!);
