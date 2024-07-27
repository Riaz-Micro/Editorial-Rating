import { __ } from '@wordpress/i18n';
import { RawHTML } from "@wordpress/element";
import { useBlockProps, InnerBlocks, InspectorControls, ColorPalette } from '@wordpress/block-editor';
import { __experimentalHeading as Heading, PanelBody, ToggleControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';

export const edit = ({ clientId, attributes, setAttributes }) => {

    const {
        id,
        crbgColor,
        crBrandColor,
        crCheckIconColor,
        crCheckIconSize,
        crCrossIconColor,
        crCrossIconSize,
        crStarsColor,
        crBreakPointLaptop,
        crBreakPointTablet,
        crBreakPointMobile,
        crSidebarExist
    } = attributes;

    // Set unique ID through block index.
    let clientIdSliced = clientId.slice(clientId.lastIndexOf('-') + 1);
    setAttributes({ id: ('wpascr-' + clientIdSliced) });

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
            tagName: 'section',
            className: 'wpas-pt-main'
        }, [
                ['core/columns', {
                    verticalAlignment: 'center',
                    className: 'wpas-pt-column-wrap'
                }, [
                        ['core/column', { width: '33.333%' }, [
                            ['core/group', {
                                className: 'wpas-pt-column-head'
                            }, [
                                ['core/heading', {
                                    content: 'Basic Survival',
                                    level: 4,
                                    textAlign: 'center'
                                }],
                                ['core/paragraph', {
                                    content: 'Regular Price <s>$11.99</s>/m',
                                    align: 'center'
                                }],
                                ['core/paragraph', {
                                    content: '$<strong>199</strong>/mo',
                                    align: 'center',
                                    className: 'wpas-pt-price'
                                }],
                                ['core/paragraph', {
                                    content: '100 Websites Maximum',
                                    align: 'center'
                                }],
                                ['core/paragraph', {
                                    content: '<span>Small Website</span>',
                                    align: 'center',
                                    className: 'wpas-pt-ribbon'
                                }]
                            ]],
                            ['core/heading', {
                                content: 'Top Features',
                                level: 5,
                                textAlign: 'center',
                            }],
                            ['core/list', {
                                className: 'wpas-pti-list'
                            }, [
                                    ['core/list-item', {
                                        content: '<strong>Standard</strong> Performance'
                                    }],
                                    ['core/list-item', {
                                        content: '<strong>100</strong> Websites'
                                    }],
                                    ['core/list-item', {
                                        content: '<strong>100 GB</strong> SSD Storage'
                                    }],
                                    ['core/list-item', {
                                        content: '<strong>Weekly</strong> Backups'
                                    }],
                                    ['core/list-item', {
                                        content: '<strong>Unlimited</strong> Free SSL'
                                    }],
                                    ['core/list-item', {
                                        content: '<strong>Free</strong> CDN'
                                    }],
                                    ['core/list-item', {
                                        content: '<strong>Dedicated</strong> IP Address'
                                    }]
                                ]],
                            ['core/heading', {
                                content: 'Security',
                                level: 5,
                                textAlign: 'center'
                            }],
                            ['core/list', {
                                className: 'wpas-pti-list'
                            }, [
                                    ['core/list-item', {
                                        content: '<strong>Standard</strong> DDoS Protection'
                                    }],
                                    ['core/list-item', {
                                        content: '<strong>Web Application</strong> Firewall'
                                    }],
                                    ['core/list-item', {
                                        content: '<strong>Malware</strong> Scanner'
                                    }]
                                ]],
                            ['core/heading', {
                                content: 'Service and Support',
                                level: 5,
                                textAlign: 'center'
                            }],
                            ['core/list', {
                                className: 'wpas-pti-list'
                            }, [
                                    ['core/list-item', {
                                        content: '<strong>24/7</strong> Customer Support'
                                    }],
                                    ['core/list-item', {
                                        content: '<strong>Priority</strong> Support'
                                    }]
                                ]],
                            ['core/buttons', {}, [
                                ['core/button', { text: 'Order Now' }],
                            ]]
                        ]],
                        ['core/column', { width: '33.333%' }, [
                            ['core/group', {
                                className: 'wpas-pt-column-head'
                            }, [
                                ['core/heading', {
                                    content: 'Rocketship Premium',
                                    level: 4,
                                    textAlign: 'center'
                                }],
                                ['core/paragraph', {
                                    content: 'Regular Price <s>$11.99</s>/m',
                                    align: 'center'
                                }],
                                ['core/paragraph', {
                                    content: '$<strong>299</strong>/mo',
                                    align: 'center',
                                    className: 'wpas-pt-price'
                                }],
                                ['core/paragraph', {
                                    content: '200 Websites Maximum',
                                    align: 'center'
                                }],
                                ['core/paragraph', {
                                    content: '<span>Mid-Size Website</span>',
                                    align: 'center',
                                    className: 'wpas-pt-ribbon'
                                }]
                            ]],
                            ['core/heading', {
                                content: 'Top Features',
                                level: 5,
                                textAlign: 'center',
                            }],
                            ['core/list', {
                                className: 'wpas-pti-list'
                            }, [
                                    ['core/list-item', {
                                        content: '<strong>Standard</strong> Performance'
                                    }],
                                    ['core/list-item', {
                                        content: '<strong>100</strong> Websites'
                                    }],
                                    ['core/list-item', {
                                        content: '<strong>100 GB</strong> SSD Storage'
                                    }],
                                    ['core/list-item', {
                                        content: '<strong>Weekly</strong> Backups'
                                    }],
                                    ['core/list-item', {
                                        content: '<strong>Unlimited</strong> Free SSL'
                                    }],
                                    ['core/list-item', {
                                        content: '<strong>Free</strong> CDN'
                                    }],
                                    ['core/list-item', {
                                        content: '<strong>Dedicated</strong> IP Address'
                                    }]
                                ]],
                            ['core/heading', {
                                content: 'Security',
                                level: 5,
                                textAlign: 'center'
                            }],
                            ['core/list', {
                                className: 'wpas-pti-list'
                            }, [
                                    ['core/list-item', {
                                        content: '<strong>Standard</strong> DDoS Protection'
                                    }],
                                    ['core/list-item', {
                                        content: '<strong>Web Application</strong> Firewall'
                                    }],
                                    ['core/list-item', {
                                        content: '<strong>Malware</strong> Scanner'
                                    }]
                                ]],
                            ['core/heading', {
                                content: 'Service and Support',
                                level: 5,
                                textAlign: 'center'
                            }],
                            ['core/list', {
                                className: 'wpas-pti-list'
                            }, [
                                    ['core/list-item', {
                                        content: '<strong>24/7</strong> Customer Support'
                                    }],
                                    ['core/list-item', {
                                        content: '<strong>Priority</strong> Support'
                                    }]
                                ]],
                            ['core/buttons', {}, [
                                ['core/button', { text: 'Order Now' }],
                            ]]
                        ]],
                        ['core/column', { width: '33.333%' }, [
                            ['core/group', {
                                className: 'wpas-pt-column-head'
                            }, [
                                ['core/heading', {
                                    content: 'Mission Professional',
                                    level: 4,
                                    textAlign: 'center'
                                }],
                                ['core/paragraph', {
                                    content: 'Regular Price <s>$11.99</s>/m',
                                    align: 'center'
                                }],
                                ['core/paragraph', {
                                    content: '$<strong>399</strong>/mo',
                                    align: 'center',
                                    className: 'wpas-pt-price'
                                }],
                                ['core/paragraph', {
                                    content: '300 Websites Maximum',
                                    align: 'center'
                                }],
                                ['core/paragraph', {
                                    content: '<span>Large or Ecommerce</span>',
                                    align: 'center',
                                    className: 'wpas-pt-ribbon'
                                }]
                            ]],
                            ['core/heading', {
                                content: 'Top Features',
                                level: 5,
                                textAlign: 'center',
                            }],
                            ['core/list', {
                                className: 'wpas-pti-list'
                            }, [
                                    ['core/list-item', {
                                        content: '<strong>Standard</strong> Performance'
                                    }],
                                    ['core/list-item', {
                                        content: '<strong>100</strong> Websites'
                                    }],
                                    ['core/list-item', {
                                        content: '<strong>100 GB</strong> SSD Storage'
                                    }],
                                    ['core/list-item', {
                                        content: '<strong>Weekly</strong> Backups'
                                    }],
                                    ['core/list-item', {
                                        content: '<strong>Unlimited</strong> Free SSL'
                                    }],
                                    ['core/list-item', {
                                        content: '<strong>Free</strong> CDN'
                                    }],
                                    ['core/list-item', {
                                        content: '<strong>Dedicated</strong> IP Address'
                                    }]
                                ]],
                            ['core/heading', {
                                content: 'Security',
                                level: 5,
                                textAlign: 'center'
                            }],
                            ['core/list', {
                                className: 'wpas-pti-list'
                            }, [
                                    ['core/list-item', {
                                        content: '<strong>Standard</strong> DDoS Protection'
                                    }],
                                    ['core/list-item', {
                                        content: '<strong>Web Application</strong> Firewall'
                                    }],
                                    ['core/list-item', {
                                        content: '<strong>Malware</strong> Scanner'
                                    }]
                                ]],
                            ['core/heading', {
                                content: 'Service and Support',
                                level: 5,
                                textAlign: 'center'
                            }],
                            ['core/list', {
                                className: 'wpas-pti-list'
                            }, [
                                    ['core/list-item', {
                                        content: '<strong>24/7</strong> Customer Support'
                                    }],
                                    ['core/list-item', {
                                        content: '<strong>Priority</strong> Support'
                                    }]
                                ]],
                            ['core/buttons', {}, [
                                ['core/button', { text: 'Order Now' }],
                            ]]
                        ]]
                    ]]
            ]]
    ];

    const wpascrDynamicStyles = `.wpas-pt-column-head s {
        color: #FFEB3B;
        font-weight: bold;
    }
    .wpas-pt-ribbon span {
        background: #FFEB3B;
        position: relative;
        display: inline-block;
        font-size: 16px;
        line-height: 16px;
        padding: 7px;
        padding-left: 13px;
        color: #f73859;
        font-weight: 500;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    .wpas-pt-ribbon span:after {
        border-top: 15px solid transparent;
        border-left: 15px solid #FFEB3B;
        border-bottom: 15px solid transparent;
        right: -15px;
        position: absolute;
        display: inline-block;
        top: 0;
        content: "";
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
                    <Heading className={'frhd__pb-heading'}>Brand Color :</Heading>
                    <ColorPalette
                        value={crBrandColor}
                        onChange={(colorValue) => setAttributes({ crBrandColor: colorValue })}
                        clearable={false}
                    />
                    <Heading className={'frhd__pb-heading'}>Background Color :</Heading>
                    <ColorPalette
                        value={crbgColor}
                        onChange={(colorValue) => setAttributes({ crbgColor: colorValue })}
                        clearable={false}
                    />
                    <Heading className={'frhd__pb-heading'}>Check Icon Color :</Heading>
                    <ColorPalette
                        value={crCheckIconColor}
                        onChange={(colorValue) => setAttributes({ crCheckIconColor: colorValue })}
                        clearable={false}
                    />
                    <UnitControl
                        label={__('Check Icon Size :')}
                        onChange={newValue => setAttributes({ crCheckIconSize: newValue })}
                        isUnitSelectTabbable
                        value={crCheckIconSize}
                        className={'frhd__component frhd__component-width-90'}
                    />
                    <Heading className={'frhd__pb-heading'}>Cross Icon Color :</Heading>
                    <ColorPalette
                        value={crCrossIconColor}
                        onChange={(colorValue) => setAttributes({ crCrossIconColor: colorValue })}
                        clearable={false}
                    />
                    <UnitControl
                        label={__('Cross Icon Size :')}
                        onChange={newValue => setAttributes({ crCrossIconSize: newValue })}
                        isUnitSelectTabbable
                        value={crCrossIconSize}
                        className={'frhd__component frhd__component-width-90'}
                    />
                    <Heading className={'frhd__pb-heading'}>Stars Color :</Heading>
                    <ColorPalette
                        value={crStarsColor}
                        onChange={(colorValue) => setAttributes({ crStarsColor: colorValue })}
                        clearable={false}
                    />
                    <UnitControl
                        label={__('Break Point (Laptop):')}
                        onChange={newValue => setAttributes({ crBreakPointLaptop: newValue })}
                        isUnitSelectTabbable
                        value={crBreakPointLaptop}
                        className={'frhd__component frhd__component-width-90'}
                    />
                    <UnitControl
                        label={__('Break Point (Tablet):')}
                        onChange={newValue => setAttributes({ crBreakPointTablet: newValue })}
                        isUnitSelectTabbable
                        value={crBreakPointTablet}
                        className={'frhd__component frhd__component-width-90'}
                    />
                    <UnitControl
                        label={__('Break Point (Mobile):')}
                        onChange={newValue => setAttributes({ crBreakPointMobile: newValue })}
                        isUnitSelectTabbable
                        value={crBreakPointMobile}
                        className={'frhd__component frhd__component-width-90'}
                    />
                    <ToggleControl
                        label={
                            crSidebarExist
                                ? 'Body Has Sidebar Width :'
                                : 'Body Has Full Width :'
                        }
                        checked={crSidebarExist}
                        onChange={newValue => setAttributes({ crSidebarExist: newValue })}
                        className={'frhd__component-diff'}
                    />
                </PanelBody>
            </InspectorControls>
        </>,
        <div {...blockProps}>
            <RawHTML>{`<style>${wpascrDynamicStyles}</style>`}</RawHTML>
            <div id={id} className={'wpas-review-info-box-main'}>
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
        crbgColor,
        crBrandColor,
        crCheckIconColor,
        crCheckIconSize,
        crCrossIconColor,
        crCrossIconSize,
        crStarsColor,
        crBreakPointLaptop,
        crBreakPointTablet,
        crBreakPointMobile,
        crSidebarExist
    } = attributes;

    const wpascrDynamicStyles = `.wpas-pt-column-head s {
        color: #FFEB3B;
        font-weight: bold;
    }
    .wpas-pt-ribbon span {
        background: #FFEB3B;
        position: relative;
        display: inline-block;
        font-size: 16px;
        line-height: 16px;
        padding: 7px;
        padding-left: 13px;
        color: #f73859;
        font-weight: 500;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    .wpas-pt-ribbon span:after {
        border-top: 15px solid transparent;
        border-left: 15px solid #FFEB3B;
        border-bottom: 15px solid transparent;
        right: -15px;
        position: absolute;
        display: inline-block;
        top: 0;
        content: "";
    }`;

    return (
        <>
            <RawHTML>{`<style>${wpascrDynamicStyles}</style>`}</RawHTML>
            <div {...useBlockProps.save()} id={id} className={'wpas-review-info-box-main'}>
                <div>
                    <InnerBlocks.Content />
                </div>
            </div>
        </>
    )
}