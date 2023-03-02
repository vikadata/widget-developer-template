import {
  useRecords, useActiveCell, useRecord, useFields, useSelection, useActiveViewId,
} from '@apitable/widget-sdk';
import React from 'react';

export const Selection: React.FC = () => {
  const viewId = useActiveViewId();
  const activeCell = useActiveCell();
  const activeRecord = useRecord(activeCell?.recordId);
  const selection = useSelection();
  const fields = useFields(viewId, {ids: selection?.fieldIds});
  const records = useRecords(viewId, {ids: selection?.recordIds});

  return (
    <div>
      <h3>Selection information: </h3>
      <p>Activated Cells: {activeCell?.fieldId && activeRecord?.getCellValueString(activeCell?.fieldId) || '_'}</p>
      <p>Selection Content</p>
      <table>
        <thead>
          <tr>
            {fields.map(field => <th key={field.id} style={{border: 'solid 1px gray'}}>{field.name || '_'}</th>)}
          </tr>
        </thead>
        <tbody>
          {records.map(record =>
            <tr key={record.id}>
              {fields.map(field =>
                <td key={field.id} style={{border: 'solid 1px gray'}}>{record.getCellValueString(field.id)?.slice(0, 8) || '_'}</td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
