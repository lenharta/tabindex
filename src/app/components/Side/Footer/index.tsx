import { Anchor, Text } from '@/common';
import React from 'react';

interface SideFooterProps {}

export const SideFooter: React.FC<SideFooterProps> = () => {
  return (
    <div className="side-footer">
      <span className="side-footer-copy">
        <Anchor href="https://twitter.com/thunkworks">
          {'\u0040'}thunkworks
          <span>, {new Date().getFullYear()}</span>
        </Anchor>
      </span>
    </div>
  );
};

SideFooter.displayName = 'app/Side.Footer';
