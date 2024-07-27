import { __ } from '@wordpress/i18n';
import { RawHTML } from "@wordpress/element";
import { useBlockProps, InnerBlocks, InspectorControls, ColorPalette } from '@wordpress/block-editor';
import { __experimentalHeading as Heading, PanelBody, ToggleControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';

export const edit = ({ clientId, attributes, setAttributes }) => {

    const {
        id,
        ftMaxWidth,
        ftBrandColor,
        ftBreakPoint
    } = attributes;

    // Set unique ID through block index.
    let clientIdSliced = clientId.slice(clientId.lastIndexOf('-') + 1);
    setAttributes({ id: ('wpasft-' + clientIdSliced) });

    // Defined Block Props.
    const blockProps = useBlockProps();

    const ALLOWED_BLOCKS = [
        'core/group',
        'core/heading',
        'core/columns',
        'core/image',
        'core/list',
        'core/list-item',
        'core/paragraph',
        'core/buttons',
        'core/button'
    ];

    // Reference: https://developer.wordpress.org/block-editor/reference-guides/core-blocks/
    const TEMPLATE = [
        ['core/group', {
            tagName: 'section'
        }, [
            ['core/table', {
                className: 'wpas-freemium-table',
                head: [
                    {
                        cells: [
                            { tag: "th", content: "Feature" },
                            { tag: "th", content: "Free" },
                            { tag: "th", content: "Premium" }
                        ]
                    }
                ],
                body: [
                    {
                        cells: [
                            { tag: "td", content: "Lorem ipsum dolor sit amet consectetur" },
                            { tag: "td", content: "✓" },
                            { tag: "td", content: "✓" }
                        ]
                    },
                    {
                        cells: [
                            { tag: "td", content: "Adipiscing elit hendrerit augue iaculis rutrum" },
                            { tag: "td", content: "✗" },
                            { tag: "td", content: "✓" }
                        ]
                    },
                    {
                        cells: [
                            { tag: "td", content: "Aliquet in dictum scelerisque porttitor" },
                            { tag: "td", content: "✓" },
                            { tag: "td", content: "✓" }
                        ]
                    },
                    {
                        cells: [
                            { tag: "td", content: "Ornare sociis massa vitae blandit dictum" },
                            { tag: "td", content: "✗" },
                            { tag: "td", content: "✓" }
                        ]
                    },
                    {
                        cells: [
                            { tag: "td", content: "Proin tortor purus nostra habitant" },
                            { tag: "td", content: "✗" },
                            { tag: "td", content: "✓" }
                        ]
                    }
                ],
            }]
        ]]
    ];

    const wpascrDynamicStyles = `#${id} {
        max-width: ${ftMaxWidth};
        margin: auto;
        border-color: ${ftBrandColor};
    }
    #${id} table thead tr th {
        color: ${ftBrandColor};
    }
    #${id} table tbody tr td:not(:first-child) {
        border-color: ${ftBrandColor};
    }`;

    return ([
        <>
            <InspectorControls>
                <PanelBody
                    title={__('Cross Rating Block Settings')}
                    icon={'admin-generic'}
                    initialOpen={true}
                    className={'frhd__control frhd__control-query'}
                >
                    <UnitControl
                        label={__('Max Width :')}
                        onChange={newValue => setAttributes({ ftMaxWidth: newValue })}
                        isUnitSelectTabbable
                        value={ftMaxWidth}
                        className={'frhd__component frhd__component-width-90'}
                    />
                    <Heading className={'frhd__pb-heading'}>Brand Color :</Heading>
                    <ColorPalette
                        value={ftBrandColor}
                        onChange={(colorValue) => setAttributes({ ftBrandColor: colorValue })}
                        clearable={false}
                    />
                    <UnitControl
                        label={__('Responsive Breakpoint :')}
                        onChange={newValue => setAttributes({ ftBreakPoint: newValue })}
                        isUnitSelectTabbable
                        value={ftBreakPoint}
                        className={'frhd__component frhd__component-width-90'}
                    />
                </PanelBody>
            </InspectorControls>
        </>,
        <div {...blockProps}>
            <RawHTML>{`<style>${wpascrDynamicStyles}</style>`}</RawHTML>
            <div id={id} className={'wpas-freemium-table-main'}>
            <InnerBlocks
                allowedBlocks={ALLOWED_BLOCKS}
                template={TEMPLATE}
            />
            </div>
        </div>
    ])
}

export const save = ({ attributes }) => {

    const {
        id,
        ftMaxWidth,
        ftBrandColor,
        ftBreakPoint
    } = attributes;

    const wpascrDynamicStyles = `#${id} {
        max-width: ${ftMaxWidth};
        margin: auto;
        border-color: ${ftBrandColor};
    }
    #${id} table thead tr th {
        color: ${ftBrandColor};
    }
    #${id} table tbody tr td:not(:first-child) {
        border-color: ${ftBrandColor};
    }`;

    return (
        <>
        <RawHTML>{`<style>${wpascrDynamicStyles}</style>`}</RawHTML>
        <div {...useBlockProps.save()} id={id} className={'wpas-freemium-table-main'}>
            <div>
                <InnerBlocks.Content />
            </div>
        </div>
        </>
    )
}