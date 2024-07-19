import React from 'react';
import CustomTabs from '../../atoms/Tab';

interface TabsContainerProps {
  tabValue: number;
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const TabsContainer: React.FC<TabsContainerProps> = ({ tabValue, handleTabChange }) => {
  const tabs = [
    { label: 'Currently Reading' },
    { label: 'Finished' }
  ];

  return (
    <CustomTabs
      tabs={tabs}
      value={tabValue}
      handleTabsChange={handleTabChange}
      aria-label="Library Tabs"
    />
  );
};

export default TabsContainer;
