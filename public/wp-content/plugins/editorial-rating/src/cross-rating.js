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
        'core/columns',
        'core/image',
        'core/list',
        'core/list-item',
        'core/paragraph',
        'core/buttons',
        'core/button'
    ];

    // Reference: https://developer.wordpress.org/block-editor/reference-guides/core-blocks/
    const TEMPLATE = [['core/group', {
        tagName: 'section'
    }, [
            ['core/paragraph', {
                content: 'Best Site 2024',
                className: 'wpas-cr-flag'
            }],
            ['core/paragraph', {
                content: 'Last updated: January 2024',
                className: 'wpas-cr-date',
                style: {
                    typography: {
                        fontSize: '18px',
                    },
                    color: {
                        text: '#ffa3b3'
                    }
                }
            }],
            ['core/columns', {
                verticalAlignment: 'center',
                className: 'wpas-cr-item'
            }, [
                    ['core/column', { width: '25%' }, [
                        ['core/paragraph', {
                            content: '<strong>1</strong>',
                            className: 'wpas-cr-index'
                        }],
                        ['core/image', {
                            url: require('../admin/img/canon.png'),
                            align: 'center'
                        }],
                    ]],
                    ['core/column', { width: '35%' }, [
                        ['core/paragraph', {
                            content: '<strong>#1 in the USA for Lorem Ipsum & Dolor site!</strong>',
                            className: 'wpas-cr-list-title',
                            style: {
                                typography: {
                                    fontSize: '17px',
                                }
                            }
                        }],
                        ['core/list', {
                            className: 'wpas-cr-list'
                        }, [
                                ['core/list-item', {
                                    content: '<a href="#" rel="nofollow">Lorem ipsum dolor sit amet consectetur</a>',
                                }],
                                ['core/list-item', {
                                    content: 'Adipiscing elit hendrerit augue iaculis rutrum',
                                }],
                                ['core/list-item', {
                                    content: 'Aliquet in dictum scelerisque porttitor habitant',
                                }],
                                ['core/list-item', {
                                    content: 'Ornare sociis massa vitae blandit dictum',
                                }],
                                ['core/list-item', {
                                    content: 'Proin tortor purus nostra habitant in',
                                }],
                            ]],
                    ]],
                    ['core/column', { width: '20%' }, [
                        ['core/paragraph', {
                            content: '<strong>9.9</strong>',
                            align: 'center',
                            className: 'wpas-cr-score',
                            style: {
                                typography: {
                                    fontSize: '68px',
                                    lineHeight: '1'
                                }
                            }
                        }],
                        ['core/paragraph', {
                            content: '<mark style="background-color: transparent;color:#FCB900">★★★★★</mark>',
                            align: 'center',
                            className: 'wpas-cr-star',
                            style: {
                                typography: {
                                    fontSize: '28px',
                                    lineHeight: '1'
                                },
                                color: {
                                    text: '#F0F5FA'
                                }
                            }
                        }],
                    ]],
                    ['core/column', { width: '20%' }, [
                        ['core/buttons', {}, [
                            ['core/button', {
                                text: 'Visit Site',
                                url: '#',
                                rel: 'nofollow',
                                style: {
                                    typography: {
                                        fontSize: '18px'
                                    },
                                }
                            }],
                        ]],
                        ['core/paragraph', {
                            content: '<a href="#">Read Full Review</a>',
                            align: 'center',
                            className: 'wpas-cr-link-after-btn',
                            style: {
                                typography: {
                                    fontSize: '16px',
                                    lineHeight: '1'
                                }
                            }
                        }],
                    ],
                    ]
                ]],

            // Column -2
            ['core/columns', {
                verticalAlignment: 'center',
                className: 'wpas-cr-item'
            }, [
                    ['core/column', { width: '25%' }, [
                        ['core/paragraph', {
                            content: '<strong>2</strong>',
                            className: 'wpas-cr-index'
                        }],
                        ['core/image', {
                            url: require('../admin/img/sony.png'),
                            align: 'center'
                        }],
                    ]],
                    ['core/column', { width: '35%' }, [
                        ['core/list', {
                            className: 'wpas-cr-list'
                        }, [
                                ['core/list-item', {
                                    content: 'Lorem ipsum dolor sit amet consectetur'
                                }],
                                ['core/list-item', {
                                    content: 'Adipiscing elit hendrerit augue iaculis rutrum'
                                }],
                                ['core/list-item', {
                                    content: 'Aliquet in dictum scelerisque porttitor habitant'
                                }],
                                ['core/list-item', {
                                    content: 'Ornare sociis massa vitae blandit dictum'
                                }],
                                ['core/list-item', {
                                    content: 'Proin tortor purus nostra habitant in<ul><li>Ac aenean tempor himenaeos eleifend</li></ul>'
                                }]
                            ]],
                    ]],
                    ['core/column', { width: '20%' }, [
                        ['core/paragraph', {
                            content: '<strong>8.7</strong>',
                            align: 'center',
                            className: 'wpas-cr-score',
                            style: {
                                typography: {
                                    fontSize: '60px',
                                    lineHeight: '1'
                                }
                            }
                        }],
                        ['core/paragraph', {
                            content: '<mark style="background-color: transparent;color:#FCB900">★★★★</mark>★',
                            align: 'center',
                            className: 'wpas-cr-star',
                            style: {
                                typography: {
                                    fontSize: '28px',
                                    lineHeight: '1'
                                },
                                color: {
                                    text: '#F0F5FA'
                                }
                            }
                        }],
                    ]],
                    ['core/column', { width: '20%' }, [
                        ['core/buttons', {}, [
                            ['core/button', {
                                text: 'Visit Site',
                                url: '#',
                                rel: 'nofollow',
                                style: {
                                    typography: {
                                        fontSize: '18px'
                                    },
                                }
                            }],
                        ]],
                        ['core/paragraph', {
                            content: '<a href="#">Read Full Review</a>',
                            align: 'center',
                            className: 'wpas-cr-link-after-btn',
                            style: {
                                typography: {
                                    fontSize: '16px',
                                    lineHeight: '1'
                                }
                            }
                        }],
                    ],
                    ]
                ]],

            // Column -3
            ['core/columns', {
                verticalAlignment: 'center',
                className: 'wpas-cr-item'
            }, [
                    ['core/column', { width: '25%' }, [
                        ['core/paragraph', {
                            content: '<strong>3</strong>',
                            className: 'wpas-cr-index'
                        }],
                        ['core/image', {
                            url: require('../admin/img/nikon.png'),
                            align: 'center'
                        }],
                    ]],
                    ['core/column', { width: '35%' }, [
                        ['core/list', {
                            className: 'wpas-cr-list'
                        }, [
                                ['core/list-item', {
                                    content: 'Lorem ipsum dolor sit amet consectetur'
                                }],
                                ['core/list-item', {
                                    content: 'Adipiscing elit hendrerit augue iaculis rutrum'
                                }],
                                ['core/list-item', {
                                    content: 'Aliquet in dictum scelerisque porttitor habitant'
                                }],
                                ['core/list-item', {
                                    content: 'Ornare sociis massa vitae blandit dictum<ul><li>Ac aenean tempor himenaeos eleifend</li><li>Proin tortor purus nostra habitant in</li></ul>'
                                }]
                            ]],
                    ]],
                    ['core/column', { width: '20%' }, [
                        ['core/paragraph', {
                            content: '<strong>7.9</strong>',
                            align: 'center',
                            className: 'wpas-cr-score',
                            style: {
                                typography: {
                                    fontSize: '60px',
                                    lineHeight: '1'
                                }
                            }
                        }],
                        ['core/paragraph', {
                            content: '<mark style="background-color: transparent;color:#FCB900">★★★</mark>★★',
                            align: 'center',
                            className: 'wpas-cr-star',
                            style: {
                                typography: {
                                    fontSize: '28px',
                                    lineHeight: '1'
                                },
                                color: {
                                    text: '#F0F5FA'
                                }
                            }
                        }],
                    ]],
                    ['core/column', { width: '20%' }, [
                        ['core/buttons', {}, [
                            ['core/button', {
                                text: 'Visit Site',
                                url: '#',
                                rel: 'nofollow',
                                style: {
                                    typography: {
                                        fontSize: '18px'
                                    },
                                }
                            }],
                        ]],
                        ['core/paragraph', {
                            content: '<a href="#">Read Full Review</a>',
                            align: 'center',
                            className: 'wpas-cr-link-after-btn',
                            style: {
                                typography: {
                                    fontSize: '16px',
                                    lineHeight: '1'
                                }
                            }
                        }],
                    ],
                    ]
                ]],
        ]
    ]];

    const wpascrDynamicStyles = `#${id} {
        background-color: ${crbgColor};
    }
    #${id} ul.wpas-cr-list li::before {
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 14 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.81237 7.66657L12.6484 0L13.8409 1.16672L4.81237 10L0 5.29168L1.1925 4.12496L4.81237 7.66657Z' fill='${encodeURIComponent(crCheckIconColor)}'/%3E%3C/svg%3E") !important;
        width: ${crCheckIconSize};
        height: ${crCheckIconSize};
    }
    #${id} ul.wpas-cr-list li ul > li::before {
        background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.70711 7.12132L1.41421 11.4142L0 10L4.29289 5.70711L0 1.41421L1.41421 0L5.70711 4.29289L10 0L11.4142 1.41421L7.12132 5.70711L11.4142 10L10 11.4142L5.70711 7.12132Z' fill='${encodeURIComponent(crCrossIconColor)}'/%3E%3C/svg%3E") !important;
        width: ${crCrossIconSize};
        height: ${crCrossIconSize};
    }
    #${id}.wpas-cross-rating-self-block .wpas-cr-index,
    #${id}.wpas-cross-rating-self-block .wpas-cr-flag,
    #${id}.wpas-cross-rating-self-block .wpas-cr-flag:after,
    #${id}.wpas-cross-rating-self-block .wp-block-button__link,
    #${id}.wpas-cross-rating-self-block section.wp-block-group .wp-block-columns:first-of-type:before {
        background-color: ${crBrandColor};
    }
    #${id}.wpas-cross-rating-self-block .wpas-cr-score {
        color: ${crBrandColor};
    }
    @media (max-width: ${crBreakPointLaptop}) {
        .wpas-cross-rating-self-block section.wp-block-group .wp-block-columns {
            flex-wrap: wrap !important;
        }
        .wpas-cross-rating-self-block section.wp-block-group .wp-block-columns .wp-block-column:nth-child(2) {
            flex-basis: 60% !important;
            padding-left: 30px;
        }
        .wpas-cross-rating-self-block section.wp-block-group .wp-block-columns .wp-block-column:nth-child(4) {
            flex-basis: 50% !IMPORTANT;
        }
        .wpas-cross-rating-self-block section.wp-block-group .wp-block-columns .wp-block-column:nth-child(4) .wp-block-buttons {
            justify-content: center;
        }
    }
    @media (max-width: ${crBreakPointTablet}) {
        .wpas-cross-rating-self-block section.wp-block-group .wp-block-columns {
            flex-direction: column;
            gap: 0;
        }
        .wpas-cross-rating-self-block section.wp-block-group .wp-block-columns .wp-block-column:nth-child(1) {order: 1;}
        .wpas-cross-rating-self-block section.wp-block-group .wp-block-columns .wp-block-column:nth-child(2) {order: 3;padding: 20px;}
        .wpas-cross-rating-self-block section.wp-block-group .wp-block-columns .wp-block-column:nth-child(3) {order: 2;}
        .wpas-cross-rating-self-block section.wp-block-group .wp-block-columns .wp-block-column:nth-child(4) {order: 4;}
        p.wpas-cr-date {
            top: 44px;
            right: 26px;
            z-index: 9;
            background: ${crBrandColor};
            color: #fff !important;
            padding: 4px 8px;
            border-radius: 4px;
        }
        .wpas-cross-rating-self-block img {
            display: block;
            border-radius: 4px;
            padding: 10px;
            box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
            margin-bottom: 10px;
        }
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
                            : 'BODY HAS SIDEBAR WIDTH :'
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
            <div id={id} className={'wpas-cross-rating-self-block'}>
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

    const wpascrDynamicStyles = `#${id} {
        background-color: ${crbgColor};
    }
    #${id} ul.wpas-cr-list li::before {
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 14 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.81237 7.66657L12.6484 0L13.8409 1.16672L4.81237 10L0 5.29168L1.1925 4.12496L4.81237 7.66657Z' fill='${encodeURIComponent(crCheckIconColor)}'/%3E%3C/svg%3E") !important;
        width: ${crCheckIconSize};
        height: ${crCheckIconSize};
    }
    #${id} ul.wpas-cr-list li ul > li::before {
        background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.70711 7.12132L1.41421 11.4142L0 10L4.29289 5.70711L0 1.41421L1.41421 0L5.70711 4.29289L10 0L11.4142 1.41421L7.12132 5.70711L11.4142 10L10 11.4142L5.70711 7.12132Z' fill='${encodeURIComponent(crCrossIconColor)}'/%3E%3C/svg%3E") !important;
        width: ${crCrossIconSize};
        height: ${crCrossIconSize};
    }
    #${id}.wpas-cross-rating-self-block .wpas-cr-index,
    #${id}.wpas-cross-rating-self-block .wpas-cr-flag,
    #${id}.wpas-cross-rating-self-block .wpas-cr-flag:after,
    #${id}.wpas-cross-rating-self-block .wp-block-button__link,
    #${id}.wpas-cross-rating-self-block section.wp-block-group .wp-block-columns:first-of-type:before {
        background-color: ${crBrandColor};
    }
    #${id}.wpas-cross-rating-self-block .wpas-cr-score {
        color: ${crBrandColor};
    }
    @media (max-width: ${crBreakPointLaptop}) {
        .wpas-cross-rating-self-block section.wp-block-group .wp-block-columns {
            flex-wrap: wrap !important;
        }
        .wpas-cross-rating-self-block section.wp-block-group .wp-block-columns .wp-block-column:nth-child(2) {
            flex-basis: 60% !important;
            padding-left: 30px;
        }
        .wpas-cross-rating-self-block section.wp-block-group .wp-block-columns .wp-block-column:nth-child(4) {
            flex-basis: 50% !IMPORTANT;
        }
        .wpas-cross-rating-self-block section.wp-block-group .wp-block-columns .wp-block-column:nth-child(4) .wp-block-buttons {
            justify-content: center;
        }
    }
    @media (max-width: ${crBreakPointTablet}) {
        .wpas-cross-rating-self-block section.wp-block-group .wp-block-columns {
            flex-direction: column;
            gap: 0;
        }
        .wpas-cross-rating-self-block section.wp-block-group .wp-block-columns .wp-block-column:nth-child(1) {order: 1;}
        .wpas-cross-rating-self-block section.wp-block-group .wp-block-columns .wp-block-column:nth-child(2) {order: 3;padding: 20px;}
        .wpas-cross-rating-self-block section.wp-block-group .wp-block-columns .wp-block-column:nth-child(3) {order: 2;}
        .wpas-cross-rating-self-block section.wp-block-group .wp-block-columns .wp-block-column:nth-child(4) {order: 4;}
        p.wpas-cr-date {
            top: 44px;
            right: 26px;
            z-index: 9;
            background: ${crBrandColor};
            color: #fff !important;
            padding: 4px 8px;
            border-radius: 4px;
        }
        .wpas-cross-rating-self-block img {
            display: block;
            border-radius: 4px;
            padding: 10px;
            box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
            margin-bottom: 10px;
        }
    }
    ${crSidebarExist ? '.wpas-cross-rating-self-block section.wp-block-group .wp-block-columns {flex-wrap: wrap !important;}.wpas-cross-rating-self-block section.wp-block-group .wp-block-columns .wp-block-column:nth-child(2){flex-basis: 60% !important;padding-left: 30px;}.wpas-cross-rating-self-block section.wp-block-group .wp-block-columns .wp-block-column:nth-child(4){flex-basis: 50% !IMPORTANT;}.wpas-cross-rating-self-block section.wp-block-group .wp-block-columns .wp-block-column:nth-child(4) .wp-block-buttons{justify-content: center;}' : ''}`;

    return (
        <>
        <RawHTML>{`<style>${wpascrDynamicStyles}</style>`}</RawHTML>
        <div {...useBlockProps.save()} id={id} className={'wpas-cross-rating-self-block'}>
            <div>
                <InnerBlocks.Content />
            </div>
        </div>
        </>
    )
}