import React from 'react';
import { Tabs, Tab, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { InfoCircle } from 'react-bootstrap-icons';

/**
 * DynamicTabs
 * Renders a dynamic list of tabs with customizable content, icons, and tooltips.
 * 
 * Props:
 * - tabs: array of tab objects {
 *     eventKey: string (unique),
 *     title: string (required),
 *     icon?: JSX (optional),
 *     tooltip?: string (optional),
 *     content: JSX (required),
 *     disabled?: boolean
 *   }
 * - defaultKey: default selected tab key (optional)
 * - onSelect: callback when a tab is selected (optional)
 */
const DynamicTabs = ({ tabs = [], defaultKey = '', onSelect = () => {} }) => {
  return (
    <Tabs
      defaultActiveKey={defaultKey || (tabs.length > 0 ? tabs[0].eventKey : '')}
      onSelect={onSelect}
      className="mb-3"
      fill
    >
      {tabs.map((tab, idx) => {
        const tabTitle = (
          <>
            {tab.icon && <span className="me-1">{tab.icon}</span>}
            {tab.title}
            {tab.tooltip && (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id={`tooltip-${tab.eventKey}`}>{tab.tooltip}</Tooltip>}
              >
                <InfoCircle className="ms-2 text-muted" />
              </OverlayTrigger>
            )}
          </>
        );

        return (
          <Tab
            key={tab.eventKey}
            eventKey={tab.eventKey}
            title={tabTitle}
            disabled={tab.disabled || false}
          >
            {tab.content}
          </Tab>
        );
      })}
    </Tabs>
  );
};

export default DynamicTabs;



//  Simple Example Usage
//  export const DemoTabs = () => {
//   const tabs = [
//     {
//       eventKey: 'profile',
//       title: 'Profile',
//       icon: <Person />,
//       tooltip: 'Edit your basic profile information',
//       content: (
//         <Form>
//           <Form.Group className="mb-3">
//             <Form.Label>Full Name</Form.Label>
//             <Form.Control type="text" placeholder="Enter name" />
//           </Form.Group>
//           <Button variant="primary">Save</Button>
//         </Form>
//       )
//     },
//     {
//       eventKey: 'documents',
//       title: 'Documents',
//       icon: <FileText />,
//       tooltip: 'Upload and manage your documents',
//       content: <div>File upload section here...</div>,
//       disabled: false
//     },
//     {
//       eventKey: 'settings',
//       title: 'Settings',
//       content: <div>Some settings form here...</div>
//     }
//   ];

//   return (
//     <div className="container mt-4">
//       <h4 className="mb-3">Dynamic Tabs Example</h4>
//       <DynamicTabs tabs={tabs} />
//     </div>
//   );
// }