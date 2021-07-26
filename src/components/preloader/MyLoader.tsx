import React from 'react';
import ContentLoader from 'react-content-loader';

export const MyLoader = () => (
    <ContentLoader
        speed={1}
        backgroundColor={'#6A4DBC'}
        foregroundColor={'#999'}
        viewBox="0 0 1458 1440"
    >
        {/* Only SVG shapes */}
        <rect x="128" y="198" rx="16" ry="16" width="285" height="27" />
        <rect x="129" y="246" rx="16" ry="16" width="285" height="174" />
        <rect x="429" y="246" rx="16" ry="16" width="285" height="174" />
        <rect x="729" y="246" rx="16" ry="16" width="285" height="174" />
        <rect x="1029" y="246" rx="16" ry="16" width="285" height="174" />

        <rect x="128" y="473" rx="16" ry="16" width="285" height="27" />
        <rect x="129" y="520" rx="16" ry="16" width="285" height="174" />
        <rect x="429" y="520" rx="16" ry="16" width="285" height="174" />
        <rect x="729" y="520" rx="16" ry="16" width="285" height="174" />
        <rect x="1029" y="520" rx="16" ry="16" width="285" height="174" />
        <rect x="129" y="708" rx="16" ry="16" width="285" height="174" />
        <rect x="429" y="708" rx="16" ry="16" width="285" height="174" />
        <rect x="729" y="708" rx="16" ry="16" width="285" height="174" />
        <rect x="1029" y="708" rx="16" ry="16" width="285" height="174" />
    </ContentLoader>
)
