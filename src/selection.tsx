import {
  useDefaultView, useRecords, useActiveCell, useRecord, useFields, useSelection,
} from '@vika/widget-sdk';
import React from 'react';

export const Selection: React.FC = () => {
  const view = useDefaultView();
  const activeCell = useActiveCell();
  const activeRecord = useRecord(activeCell?.recordId);
  const selection = useSelection();
  const fields = useFields(view.id, {ids: selection?.fieldIds});
  const records = useRecords(view.id, {ids: selection?.recordIds});

  return (
    <div>
      <h3>选区信息</h3>
      <p>激活的单元格: {activeCell?.fieldId && activeRecord?.getCellValueString(activeCell?.fieldId) || '_'}</p>
      <p>选区内容</p>
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
