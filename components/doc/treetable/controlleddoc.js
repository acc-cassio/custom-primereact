import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Column } from '@/components/lib/column/Column';
import { TreeTable } from '@/components/lib/treetable/TreeTable';
import { useEffect, useState } from 'react';
import { NodeService } from '../../../service/NodeService';

export function ControlledDoc(props) {
    const [nodes, setNodes] = useState([]);
    const [expandedKeys, setExpandedKeys] = useState(null);

    const toggleApplications = () => {
        let _expandedKeys = { ...expandedKeys };

        if (_expandedKeys['0']) {
            delete _expandedKeys['0'];
        } else {
            _expandedKeys['0'] = true;
        }

        setExpandedKeys(_expandedKeys);
    };

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<Button onClick={toggleApplications} label="Toggle Applications" />
<TreeTable value={nodes} expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} className="mt-4" tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { NodeService } from './service/NodeService';

export default function ControlledDemo() {
    const [nodes, setNodes] = useState([]);
    const [expandedKeys, setExpandedKeys] = useState(null);

    const toggleApplications = () => {
        let _expandedKeys = { ...expandedKeys };

        if (_expandedKeys['0']) delete _expandedKeys['0'];
        else _expandedKeys['0'] = true;

        setExpandedKeys(_expandedKeys);
    };

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card">
            <Button onClick={toggleApplications} label="Toggle Applications" />
            <TreeTable value={nodes} expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} className="mt-4" tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { TreeTable, TreeTableExpandedKeysType } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function ControlledDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [expandedKeys, setExpandedKeys] = useState<TreeTableExpandedKeysType | null>(null);

    const toggleApplications = () => {
        let _expandedKeys = { ...expandedKeys };

        if (_expandedKeys['0']) delete _expandedKeys['0'];
        else _expandedKeys['0'] = true;

        setExpandedKeys(_expandedKeys);
    };

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card">
            <Button onClick={toggleApplications} label="Toggle Applications" />
            <TreeTable value={nodes} expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} className="mt-4" tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    );
}
        `,
        data: `
{
    key: '0',
    data: {
        name: 'Applications',
        size: '100kb',
        type: 'Folder'
    },
    children: [
        {
            key: '0-0',
            data: {
                name: 'React',
                size: '25kb',
                type: 'Folder'
            },
            children: [
                {
                    key: '0-0-0',
                    data: {
                        name: 'react.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-1',
                    data: {
                        name: 'native.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-2',
                    data: {
                        name: 'mobile.app',
                        size: '5kb',
                        type: 'Application'
                    }
                }
            ]
        },
        {
            key: '0-1',
            data: {
                name: 'editor.app',
                size: '25kb',
                type: 'Application'
            }
        },
        {
            key: '0-2',
            data: {
                name: 'settings.app',
                size: '50kb',
                type: 'Application'
            }
        }
    ]
},
...
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Expansion state is controlled with <i>expandedKeys</i> and <i>onToggle</i> properties. The <i>expandedKeys</i> should be an object whose keys refer to the node key and values represent the expanded state e.g.{' '}
                    <i>&#123;'0-0': true&#125;</i>.
                </p>
            </DocSectionText>
            <div className="card">
                <Button onClick={toggleApplications} label="Toggle Applications" />
                <TreeTable value={nodes} expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} className="mt-4" tableStyle={{ minWidth: '50rem' }}>
                    <Column field="name" header="Name" expander />
                    <Column field="size" header="Size" />
                    <Column field="type" header="Type" />
                </TreeTable>
            </div>
            <DocSectionCode code={code} service={['NodeService']} />
        </>
    );
}
