import React from 'react';
import { Tabs, TabsProps, Tab, TabProps } from '@mui/material';

interface CustomTabsProps extends TabsProps {
  tabs: { label: string }[];
  tabProps?: TabProps[];
  value: number;
  handleTabsChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const CustomTabs: React.FC<CustomTabsProps> = ({
  tabs,
  tabProps,
  value,
  handleTabsChange,
  ...otherProps
}) => {
  return (
    <Tabs value={value} onChange={handleTabsChange} {...otherProps}>
      {tabs.map((tab, index) => (
        <Tab key={index} label={tab.label} {...(tabProps && tabProps[index])} />
      ))}
    </Tabs>
  );
};

export default CustomTabs;