import { __ } from '@wordpress/i18n';
import { RawHTML } from "@wordpress/element";
import { useBlockProps, InnerBlocks, InspectorControls, ColorPalette } from '@wordpress/block-editor';
import { __experimentalHeading as Heading, PanelBody, ToggleControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';

export const edit = ({ clientId, attributes, setAttributes }) => {

    const {
        id,
        maxWidth,
        pcBrandColor,
        checkIconColor,
        crossIconColor,
        itemGap,
        itemDivider,
        dividerColor,
        respBreakPoint
    } = attributes;

    // Set unique ID through block index.
    let clientIdSliced = clientId.slice(clientId.lastIndexOf('-') + 1);
    setAttributes({ id: ('wpaspc-' + clientIdSliced) });

    // Defined Block Props.
    const blockProps = useBlockProps();

    const ALLOWED_BLOCKS = [
        'core/group',
        'core/columns',
        'core/list',
        'core/list-item',
        'core/paragraph'
    ];

    // Reference: https://developer.wordpress.org/block-editor/reference-guides/core-blocks/
    const TEMPLATE = [['core/group', {
        tagName: 'section'
    }, [
            ['core/columns', {
                verticalAlignment: 'center',
                className: 'wpas-pc-columns'
            }, [
                    ['core/column', {
                        width: '50%',
                        className: 'wpas-pc-column'
                     }, [
                        ['core/paragraph', {
                            content: '<strong>PROS</strong>',
                            align: 'center',
                            style: {
                                typography: {
                                    fontSize: '20px',
                                    lineHeight: '1'
                                }
                            }
                        }],
                        ['core/list', {
                            className: 'wpas-pc-pros-list'
                        }, [
                            ['core/list-item', {
                                content: 'Lorem ipsum dolor sit amet consectetur'
                            }],
                            ['core/list-item', {
                                content: 'Adipiscing elit hendrerit augue iaculis rutrum'
                            }],
                            ['core/list-item', {
                                content: 'Aliquet in dictum scelerisque porttitor'
                            }],
                            ['core/list-item', {
                                content: 'Ornare sociis massa vitae blandit dictum'
                            }],
                            ['core/list-item', {
                                content: 'Proin tortor purus nostra habitant'
                            }]
                        ]],
                    ]],
                    ['core/column', {
                        width: '50%',
                        className: 'wpas-pc-column'
                    }, [
                        ['core/paragraph', {
                            content: '<strong>CONS</strong>',
                            align: 'center',
                            style: {
                                typography: {
                                    fontSize: '20px',
                                    lineHeight: '1'
                                }
                            }
                        }],
                        ['core/list', {
                            className: 'wpas-pc-cons-list'
                        }, [
                            ['core/list-item', {
                                content: 'Lorem ipsum dolor sit amet consectetur'
                            }],
                            ['core/list-item', {
                                content: 'Adipiscing elit hendrerit augue iaculis rutrum'
                            }],
                            ['core/list-item', {
                                content: 'Aliquet in dictum scelerisque porttitor'
                            }],
                            ['core/list-item', {
                                content: 'Ornare sociis massa vitae blandit dictum'
                            }],
                            ['core/list-item', {
                                content: 'Proin tortor purus nostra habitant'
                            }]
                        ]],
                    ]]
                ]]
        ]
    ]];

    const wpaspcDynamicStyles = `#${id} .block-editor-block-list__block.wp-block-list-item .block-editor-rich-text__editable.rich-text {
        display: inline-block !important;
    }
    #${id}.wpas-review-pros-cons-main {
        max-width: ${maxWidth} !important;
        margin: auto;
    }
    #${id}.wpas-review-pros-cons-main {
        border-color: ${pcBrandColor};
    }
    #${id} .wpas-pc-column > p {
        color: ${pcBrandColor};
    }
    #${id} .wpas-pc-columns .wp-block-column:not(:last-child):after {
        background-color: ${pcBrandColor};
    }
    #${id} ul.wpas-pc-pros-list li:before {
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z' fill='${encodeURIComponent(checkIconColor)}'/%3E%3C/svg%3E");
    }
    #${id} ul.wpas-pc-cons-list li:before {
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z' fill='${encodeURIComponent(crossIconColor)}'/%3E%3C/svg%3E");
    }
    #${id} .wpas-pc-column ul li:not(:last-child) {
        margin-bottom: ${itemGap};
        padding-bottom: ${itemGap};
        border-bottom: ${itemDivider ? `1px dashed ${dividerColor}` : 'none'};
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
                        onChange={newValue => setAttributes({ maxWidth: newValue })}
                        isUnitSelectTabbable
                        value={maxWidth}
                        className={'frhd__component frhd__component-width-90'}
                    />
                    <Heading className={'frhd__pb-heading'}>Brand Color :</Heading>
                    <ColorPalette
                        value={pcBrandColor}
                        onChange={(colorValue) => setAttributes({ pcBrandColor: colorValue })}
                        clearable={false}
                    />
                    <Heading className={'frhd__pb-heading'}>Check Icon Color :</Heading>
                    <ColorPalette
                        value={checkIconColor}
                        onChange={(colorValue) => setAttributes({ checkIconColor: colorValue })}
                        clearable={false}
                    />
                    <Heading className={'frhd__pb-heading'}>Cross Icon Color :</Heading>
                    <ColorPalette
                        value={crossIconColor}
                        onChange={(colorValue) => setAttributes({ crossIconColor: colorValue })}
                        clearable={false}
                    />
                    <UnitControl
                        label={__('List Item Gap :')}
                        onChange={newValue => setAttributes({ itemGap: newValue })}
                        isUnitSelectTabbable
                        value={itemGap}
                        className={'frhd__component frhd__component-width-90'}
                    />
                    <ToggleControl
                        label={
                            itemDivider
                            ? 'Item Divider On :'
                            : 'Item Divider Off :'
                        }
                        checked={itemDivider}
                        onChange={newValue => setAttributes({ itemDivider: newValue })}
                        className={'frhd__component-diff'}
                    />
                    {itemDivider && (
                        <>
                            <Heading className={'frhd__pb-heading'}>Divider Color :</Heading>
                            <ColorPalette
                                value={dividerColor}
                                onChange={(colorValue) => setAttributes({ dividerColor: colorValue })}
                                clearable={false}
                            />
                        </>
                    )}
                    <UnitControl
                        label={__('Responsive Breakpoint :')}
                        onChange={newValue => setAttributes({ respBreakPoint: newValue })}
                        isUnitSelectTabbable
                        value={respBreakPoint}
                        className={'frhd__component frhd__component-width-90'}
                    />
                </PanelBody>
            </InspectorControls>
        </>,
        <div {...blockProps}>
            <RawHTML>{`<style>${wpaspcDynamicStyles}</style>`}</RawHTML>
            <div id={id} className={'wpas-review-pros-cons-main'}>
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
        maxWidth,
        pcBrandColor,
        checkIconColor,
        crossIconColor,
        itemGap,
        itemDivider,
        dividerColor,
        respBreakPoint
    } = attributes;

    const wpaspcDynamicStyles = `#${id}.wpas-review-pros-cons-main {
        max-width: ${maxWidth} !important;
        margin: auto;
    }
    #${id}.wpas-review-pros-cons-main {
        border-color: ${pcBrandColor};
    }
    #${id} .wpas-pc-column > p {
        color: ${pcBrandColor};
    }
    #${id} .wpas-pc-columns .wp-block-column:not(:last-child):after {
        background-color: ${pcBrandColor};
    }
    #${id} ul.wpas-pc-pros-list li:before {
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z' fill='${encodeURIComponent(checkIconColor)}'/%3E%3C/svg%3E");
    }
    #${id} ul.wpas-pc-cons-list li:before {
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z' fill='${encodeURIComponent(crossIconColor)}'/%3E%3C/svg%3E");
    }
    #${id} .wpas-pc-column ul li:not(:last-child) {
        margin-bottom: ${itemGap};
        padding-bottom: ${itemGap};
        border-bottom: ${itemDivider ? `1px dashed ${dividerColor}` : 'none'};
    }`;

    return (
        <>
        <RawHTML>{`<style>${wpaspcDynamicStyles}</style>`}</RawHTML>
        <div {...useBlockProps.save()} id={id} className={'wpas-review-pros-cons-main'}>
            <div>
                <InnerBlocks.Content />
            </div>
        </div>
        </>
    )
}