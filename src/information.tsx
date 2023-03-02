import { useActiveViewId, useMeta, usePrimaryField, useViewMeta } from '@apitable/widget-sdk';
import React from 'react';

export const Information: React.FC = () => {
  const meta = useMeta();
  const activeViewId = useActiveViewId();
  const view = useViewMeta(activeViewId);
  const primaryField = usePrimaryField();
  return (
    <div>
        <h3>Widget info: </h3>
        <p>Widget package name: {meta?.widgetPackageName}</p>
        <p>Datasheet name: {meta?.datasheetName}</p>
        <p>Widget ID (widgetId): {meta?.id}</p>
        <p>Bind datasheet ID (datasheetId): {meta?.datasheetId}</p>
        <p>Active view name: {view?.name}</p>
        <p>Primary field name: {primaryField?.name}</p>
    </div>
  );
};
