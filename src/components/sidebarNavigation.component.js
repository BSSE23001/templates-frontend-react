import React from 'react';
import {
  Nav,
  Navbar,
  OverlayTrigger,
  Tooltip,
  Button,
} from 'react-bootstrap';
import {
  HouseDoor,
  ChevronBarLeft,
  ChevronBarRight,
} from 'react-bootstrap-icons';

/**
 * SidebarNavigation Component
 *
 * Props:
 * - items: array of nav item objects {
 *     key: string,
 *     label: string,
 *     icon: JSX (optional),
 *     tooltip?: string,
 *     onClick: function,
 *     active?: boolean,
 *     section?: string (optional grouping)
 *   }
 * - brand: string or JSX (optional)
 * - collapsible: boolean (default true)
 */
const SidebarNavigation = ({ items = [], brand, collapsible = true }) => {
  const [open, setOpen] = React.useState(true);

  // Group items by section for rendering
  const grouped = items.reduce((acc, item) => {
    const group = item.section || 'main';
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});

  return (
    <div
      className={`bg-light border-end p-2 d-flex flex-column vh-100 ${
        open ? 'sidebar-open' : 'sidebar-collapsed'
      }`}
      style={{ width: open ? '220px' : '60px', transition: 'width 0.3s' }}
    >
      {brand && (
        <Navbar.Brand className="text-center mb-3">
          {open ? brand : brand?.toString().charAt(0)}
        </Navbar.Brand>
      )}

      <Nav className="flex-column">
        {Object.entries(grouped).map(([section, links]) => (
          <div key={section}>
            {section !== 'main' && open && (
              <div className="text-muted small mt-2 mb-1 px-2">{section}</div>
            )}
            {links.map((item) => {
              const icon = item.icon || <HouseDoor />;
              const content = (
                <>
                  {icon}
                  {open && <span className="ms-2">{item.label}</span>}
                </>
              );
              return (
                <OverlayTrigger
                  key={item.key}
                  placement="right"
                  overlay={
                    !open && item.tooltip ? (
                      <Tooltip>{item.tooltip}</Tooltip>
                    ) : <></>
                  }
                >
                  <Nav.Link
                    onClick={item.onClick}
                    active={item.active}
                    className="d-flex align-items-center px-2 py-2"
                  >
                    {content}
                  </Nav.Link>
                </OverlayTrigger>
              );
            })}
          </div>
        ))}
      </Nav>

      {collapsible && (
        <div className="mt-auto text-center">
          <Button
            size="sm"
            variant="outline-secondary"
            onClick={() => setOpen(!open)}
          >
            {open ? <ChevronBarLeft /> : <ChevronBarRight />}
          </Button>
        </div>
      )}
    </div>
  );
};

export default SidebarNavigation;



// EXAMPLE USAGE
// import {
//   HouseDoor,
//   Person,
//   Book,
//   People,
//   Gear,
//   ChevronBarLeft,
//   ChevronBarRight,
// } from 'react-bootstrap-icons';
// export const DashboardWithSidebar = () => {
//   const [activeTab, setActiveTab] = useState('profile');

//   const items = [
//     {
//       key: 'profile',
//       label: 'Profile',
//       icon: <Person />,
//       tooltip: 'View/Edit your profile',
//       onClick: () => setActiveTab('profile'),
//       active: activeTab === 'profile',
//     },
//     {
//       key: 'courses',
//       label: 'Courses',
//       icon: <Book />,
//       tooltip: 'Browse courses',
//       onClick: () => setActiveTab('courses'),
//       active: activeTab === 'courses',
//     },
//     {
//       key: 'students',
//       label: 'Students',
//       icon: <People />,
//       section: 'Management',
//       tooltip: 'Manage enrolled students',
//       onClick: () => setActiveTab('students'),
//       active: activeTab === 'students',
//     },
//     {
//       key: 'settings',
//       label: 'Settings',
//       icon: <Gear />,
//       section: 'System',
//       tooltip: 'System preferences',
//       onClick: () => setActiveTab('settings'),
//       active: activeTab === 'settings',
//     },
//   ];

  // return (
  //   <div className="d-flex">
      // <SidebarNavigation brand="LMS" items={items} />

  //     <div className="flex-grow-1 p-3">
  //       <h4>{activeTab.toUpperCase()}</h4>
  //       <p>This is the {activeTab} content.</p>
  //     </div>
  //   </div>
  // );
//
//
// IF CONTENT IS DYNAMIC MEANS IT IS MADE ON ANOTHER FILE
// 
// const ProfileContent = () => (
//   <>
//     <h4>Profile</h4>
//     <p>Edit your user information here.</p>
//   </>
// );

// const CoursesContent = () => (
//   <>
//     <h4>Courses</h4>
//     <p>List of available courses.</p>
//   </>
// );

// const StudentsContent = () => (
//   <>
//     <h4>Students</h4>
//     <p>Manage student enrollments.</p>
//   </>
// );

// const SettingsContent = () => (
//   <>
//     <h4>Settings</h4>
//     <p>Configure your system preferences.</p>
//   </>
// );
//
// const renderContent = () => {
//   switch (activeTab) {
//     case 'profile':
//       return <ProfileContent />;
//     case 'courses':
//       return <CoursesContent />;
//     case 'students':
//       return <StudentsContent />;
//     case 'settings':
//       return <SettingsContent />;
//     default:
//       return <div>Select a tab to begin.</div>;
//   }
// };

// return (
//   <div className="d-flex">
//     <SidebarNavigation brand="LMS" items={items} />

//     <div className="flex-grow-1 p-3">
//       {renderContent()}
//     </div>
//   </div>
// );
//
// };