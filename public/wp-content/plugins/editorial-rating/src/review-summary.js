import { __ } from '@wordpress/i18n';
import { RawHTML } from "@wordpress/element";
import { useBlockProps, InnerBlocks, InspectorControls, ColorPalette } from '@wordpress/block-editor';
import { Button, __experimentalHeading as Heading, PanelBody, ToggleControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';

export const edit = ({ clientId, attributes, setAttributes }) => {

    const {
        id,
        rsBrandColor,
        rsRowGap,
        rsSidebarExist
    } = attributes;

    // Set unique ID through block index.
    let clientIdSliced = clientId.slice(clientId.lastIndexOf('-') + 1);
    setAttributes({ id: ('wpas-rst-' + clientIdSliced) });

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

    const TEMPLATE = [['core/group', {
        tagName: 'section'
    }, [
            ['core/paragraph', {
                content: 'Last updated: January 2024',
                className: 'wpas-rst-date'
            }],
            ['core/columns', {
                verticalAlignment: 'center',
                className: 'wpas-rst-item'
            }, [
                    ['core/column', { width: '15%' }, [
                        ['core/paragraph', {
                            content: '<strong>1<sup>st</sup></strong>',
                            className: 'wpas-rst-index'
                        }]
                    ]],
                    ['core/column', { width: '35%' }, [
                        ['core/image', {
                            url: require('../admin/img/canon.png'),
                            className: 'wpas-rst-item-logo',
                            height: '100px'
                        }],
                        ['core/paragraph', {
                            content: '<a href="https://global.canon" data-type="link" data-id="https://global.canon" target="_blank" rel="noreferrer noopener">www.global.canon</a>',
                            className: 'wpas-rst-url'
                        }],
                        ['core/spacer', {
                            height: '20px'
                        }],
                        ['core/paragraph', {
                            content: '<strong>Features:</strong>',
                            className: 'wpas-rst-list-title'
                        }],
                        ['core/list', {
                            className: 'wpas-rst-list'
                        }, [
                                ['core/list-item', {
                                    content: '<a href="#" rel="nofollow">Lorem ipsum dolor sit amet consectetur</a>',
                                }],
                                ['core/list-item', {
                                    content: 'Adipiscing elit hendrerit augue iaculis',
                                }],
                                ['core/list-item', {
                                    content: 'Aliquet in dictum scelerisque porttitor',
                                }],
                                ['core/list-item', {
                                    content: 'Ornare sociis massa vitae blandit dictum',
                                }]
                            ]]
                    ]],
                    ['core/column', { width: '20%' }, [
                        ['wpas-blocks/star-rating', {
                            showSRresult: false,
                            srHighlightRange: 98,
                            srStarsSize: 26,
                            showSRresult: true
                        }],
                        ['core/paragraph', {
                            content: 'Based on <a href="#">(800+)</a>'
                        }],
                        ['core/buttons', {}, [
                            ['core/button', {
                                className: 'is-style-outline',
                                text: 'Read Review',
                                url: '#',
                                rel: 'nofollow',
                                style: {
                                    typography: {
                                        fontSize: '18px'
                                    },
                                }
                            }],
                            ['core/button', {
                                text: 'Visit Site',
                                url: '#',
                                rel: 'nofollow',
                                style: {
                                    typography: {
                                        fontSize: '18px'
                                    },
                                }
                            }]
                        ]]
                    ]],
                    ['core/column', { width: '30%' }, [
                        ['core/image', {
                            url: require('../admin/img/product-image.png'),
                            align: 'center'
                        }],
                    ]],
                ]],

            // Column -2
            ['core/columns', {
                verticalAlignment: 'center',
                className: 'wpas-rst-item'
            }, [
                    ['core/column', { width: '15%' }, [
                        ['core/paragraph', {
                            content: '<strong>2<sup>nd</sup></strong>',
                            className: 'wpas-rst-index'
                        }]
                    ]],
                    ['core/column', { width: '35%' }, [
                        ['core/image', {
                            url: require('../admin/img/nikon.png'),
                            className: 'wpas-rst-item-logo',
                            height: '100px'
                        }],
                        ['core/paragraph', {
                            content: '<a href="https://nikon.com" data-type="link" data-id="https://nikon.com" target="_blank" rel="noreferrer noopener">www.nikon.com</a>',
                            className: 'wpas-rst-url'
                        }],
                        ['core/spacer', {
                            height: '20px'
                        }],
                        ['core/paragraph', {
                            content: '<strong>Features:</strong>',
                            className: 'wpas-rst-list-title'
                        }],
                        ['core/list', {
                            className: 'wpas-rst-list'
                        }, [
                                ['core/list-item', {
                                    content: '<a href="#" rel="nofollow">Lorem ipsum dolor sit amet consectetur</a>',
                                }],
                                ['core/list-item', {
                                    content: 'Adipiscing elit hendrerit augue iaculis',
                                }],
                                ['core/list-item', {
                                    content: 'Aliquet in dictum scelerisque porttitor',
                                }],
                                ['core/list-item', {
                                    content: 'Ornare sociis massa vitae blandit dictum',
                                }]
                            ]]
                    ]],
                    ['core/column', { width: '20%' }, [
                        ['wpas-blocks/star-rating', {
                            showSRresult: false,
                            srHighlightRange: 90,
                            srStarsSize: 26,
                            showSRresult: true
                        }],
                        ['core/paragraph', {
                            content: 'Based on <a href="#">(600+)</a>'
                        }],
                        ['core/buttons', {}, [
                            ['core/button', {
                                className: 'is-style-outline',
                                text: 'Read Review',
                                url: '#',
                                rel: 'nofollow',
                                style: {
                                    typography: {
                                        fontSize: '18px'
                                    },
                                }
                            }],
                            ['core/button', {
                                text: 'Visit Site',
                                url: '#',
                                rel: 'nofollow',
                                style: {
                                    typography: {
                                        fontSize: '18px'
                                    },
                                }
                            }]
                        ]]
                    ]],
                    ['core/column', { width: '30%' }, [
                        ['core/image', {
                            url: require('../admin/img/product-image.png'),
                            align: 'center'
                        }],
                    ]],
                ]],

            // Column -3
            ['core/columns', {
                verticalAlignment: 'center',
                className: 'wpas-rst-item'
            }, [
                    ['core/column', { width: '15%' }, [
                        ['core/paragraph', {
                            content: '<strong>3<sup>rd</sup></strong>',
                            className: 'wpas-rst-index'
                        }]
                    ]],
                    ['core/column', { width: '35%' }, [
                        ['core/image', {
                            url: require('../admin/img/sony.png'),
                            className: 'wpas-rst-item-logo',
                            height: '100px'
                        }],
                        ['core/paragraph', {
                            content: '<a href="https://sony.com" data-type="link" data-id="https://sony.com" target="_blank" rel="noreferrer noopener">www.sony.com</a>',
                            className: 'wpas-rst-url'
                        }],
                        ['core/spacer', {
                            height: '20px'
                        }],
                        ['core/paragraph', {
                            content: '<strong>Features:</strong>',
                            className: 'wpas-rst-list-title'
                        }],
                        ['core/list', {
                            className: 'wpas-rst-list'
                        }, [
                                ['core/list-item', {
                                    content: '<a href="#" rel="nofollow">Lorem ipsum dolor sit amet consectetur</a>',
                                }],
                                ['core/list-item', {
                                    content: 'Adipiscing elit hendrerit augue iaculis',
                                }],
                                ['core/list-item', {
                                    content: 'Aliquet in dictum scelerisque porttitor',
                                }],
                                ['core/list-item', {
                                    content: 'Ornare sociis massa vitae blandit dictum',
                                }]
                            ]]
                    ]],
                    ['core/column', { width: '20%' }, [
                        ['wpas-blocks/star-rating', {
                            showSRresult: false,
                            srHighlightRange: 80,
                            srStarsSize: 26,
                            showSRresult: true
                        }],
                        ['core/paragraph', {
                            content: 'Based on <a href="#">(350+)</a>'
                        }],
                        ['core/buttons', {}, [
                            ['core/button', {
                                className: 'is-style-outline',
                                text: 'Read Review',
                                url: '#',
                                rel: 'nofollow',
                                style: {
                                    typography: {
                                        fontSize: '18px'
                                    },
                                }
                            }],
                            ['core/button', {
                                text: 'Visit Site',
                                url: '#',
                                rel: 'nofollow',
                                style: {
                                    typography: {
                                        fontSize: '18px'
                                    },
                                }
                            }]
                        ]]
                    ]],
                    ['core/column', { width: '30%' }, [
                        ['core/image', {
                            url: require('../admin/img/product-image.png'),
                            align: 'center'
                        }],
                    ]],
                ]],

            // Column -4
            ['core/columns', {
                verticalAlignment: 'center',
                className: 'wpas-rst-item'
            }, [
                    ['core/column', { width: '15%' }, [
                        ['core/paragraph', {
                            content: '<strong>4<sup>th</sup></strong>',
                            className: 'wpas-rst-index'
                        }]
                    ]],
                    ['core/column', { width: '35%' }, [
                        ['core/image', {
                            url: require('../admin/img/panasonic.png'),
                            className: 'wpas-rst-item-logo',
                            height: '100px'
                        }],
                        ['core/paragraph', {
                            content: '<a href="https://panasonic.com" data-type="link" data-id="https://panasonic.com" target="_blank" rel="noreferrer noopener">www.panasonic.com</a>',
                            className: 'wpas-rst-url'
                        }],
                        ['core/spacer', {
                            height: '20px'
                        }],
                        ['core/paragraph', {
                            content: '<strong>Features:</strong>',
                            className: 'wpas-rst-list-title'
                        }],
                        ['core/list', {
                            className: 'wpas-rst-list'
                        }, [
                                ['core/list-item', {
                                    content: '<a href="#" rel="nofollow">Lorem ipsum dolor sit amet consectetur</a>',
                                }],
                                ['core/list-item', {
                                    content: 'Adipiscing elit hendrerit augue iaculis',
                                }],
                                ['core/list-item', {
                                    content: 'Aliquet in dictum scelerisque porttitor',
                                }],
                                ['core/list-item', {
                                    content: 'Ornare sociis massa vitae blandit dictum',
                                }]
                            ]]
                    ]],
                    ['core/column', { width: '20%' }, [
                        ['wpas-blocks/star-rating', {
                            showSRresult: false,
                            srHighlightRange: 80,
                            srStarsSize: 26,
                            showSRresult: true
                        }],
                        ['core/paragraph', {
                            content: 'Based on <a href="#">(320+)</a>'
                        }],
                        ['core/buttons', {}, [
                            ['core/button', {
                                className: 'is-style-outline',
                                text: 'Read Review',
                                url: '#',
                                rel: 'nofollow',
                                style: {
                                    typography: {
                                        fontSize: '18px'
                                    },
                                }
                            }],
                            ['core/button', {
                                text: 'Visit Site',
                                url: '#',
                                rel: 'nofollow',
                                style: {
                                    typography: {
                                        fontSize: '18px'
                                    },
                                }
                            }]
                        ]]
                    ]],
                    ['core/column', { width: '30%' }, [
                        ['core/image', {
                            url: require('../admin/img/product-image.png'),
                            align: 'center'
                        }],
                    ]],
                ]],

            // Column -5
            ['core/columns', {
                verticalAlignment: 'center',
                className: 'wpas-rst-item'
            }, [
                    ['core/column', { width: '15%' }, [
                        ['core/paragraph', {
                            content: '<strong>5<sup>th</sup></strong>',
                            className: 'wpas-rst-index'
                        }]
                    ]],
                    ['core/column', { width: '35%' }, [
                        ['core/image', {
                            url: require('../admin/img/olympus.png'),
                            className: 'wpas-rst-item-logo',
                            height: '100px'
                        }],
                        ['core/paragraph', {
                            content: '<a href="https://olympus-global.com" data-type="link" data-id="https://olympus-global.com" target="_blank" rel="noreferrer noopener">www.olympus-global.com</a>',
                            className: 'wpas-rst-url'
                        }],
                        ['core/spacer', {
                            height: '20px'
                        }],
                        ['core/paragraph', {
                            content: '<strong>Features:</strong>',
                            className: 'wpas-rst-list-title'
                        }],
                        ['core/list', {
                            className: 'wpas-rst-list'
                        }, [
                                ['core/list-item', {
                                    content: '<a href="#" rel="nofollow">Lorem ipsum dolor sit amet consectetur</a>',
                                }],
                                ['core/list-item', {
                                    content: 'Adipiscing elit hendrerit augue iaculis',
                                }],
                                ['core/list-item', {
                                    content: 'Aliquet in dictum scelerisque porttitor',
                                }],
                                ['core/list-item', {
                                    content: 'Ornare sociis massa vitae blandit dictum',
                                }]
                            ]]
                    ]],
                    ['core/column', { width: '20%' }, [
                        ['wpas-blocks/star-rating', {
                            showSRresult: false,
                            srHighlightRange: 60,
                            srStarsSize: 26,
                            showSRresult: true
                        }],
                        ['core/paragraph', {
                            content: 'Based on <a href="#">(200+)</a>'
                        }],
                        ['core/buttons', {}, [
                            ['core/button', {
                                className: 'is-style-outline',
                                text: 'Read Review',
                                url: '#',
                                rel: 'nofollow',
                                style: {
                                    typography: {
                                        fontSize: '18px'
                                    },
                                }
                            }],
                            ['core/button', {
                                text: 'Visit Site',
                                url: '#',
                                rel: 'nofollow',
                                style: {
                                    typography: {
                                        fontSize: '18px'
                                    },
                                }
                            }]
                        ]]
                    ]],
                    ['core/column', { width: '30%' }, [
                        ['core/image', {
                            url: require('../admin/img/product-image.png'),
                            align: 'center'
                        }],
                    ]],
                ]],
        ]
    ]];

    const wpasRSDynamicStyles = `#${id} section.wp-block-group .wp-block-columns.wpas-rst-item:first-of-type,
    #${id} .wpas-rst-item .wp-block-button__link,
    #${id} .wpas-rst-item .wpas-rst-index {
        border-color: ${rsBrandColor} !important;
    }
    #${id} section.wp-block-group .wp-block-columns.wpas-rst-item:first-of-type .wpas-rst-index,
    #${id} .wpas-rst-item .wp-block-button:not(.is-style-outline) .wp-block-button__link {
        background: ${rsBrandColor} !important;
    }
    #${id} .wpas-rst-list-title:before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 5'%3E%3Cpath d='M16 4.5C14.5867 4.5 13.8698 3.9625 13.1767 3.4425C12.5305 2.9575 11.9197 2.5 10.6667 2.5C9.41359 2.5 8.80288 2.95813 8.15634 3.4425C7.46327 3.9625 6.74667 4.5 5.33307 4.5C3.91948 4.5 3.20314 3.9625 2.51007 3.4425C1.86379 2.9575 1.25307 2.5 0 2.5V0C1.41333 0 2.12993 0.5375 2.82301 1.0575C3.46928 1.5425 4.08 2 5.33307 2C6.58614 2 7.19686 1.54188 7.84314 1.0575C8.53647 0.5375 9.25307 0 10.6667 0C12.0803 0 12.7969 0.5375 13.4899 1.0575C14.1362 1.5425 14.7469 2 16.0003 2V4.5H16Z' fill='${encodeURIComponent(rsBrandColor)}'/%3E%3C/svg%3E");
    }
    #${id} .wpas-rst-list-title,
    #${id} .wpas-rst-item .wp-block-button__link,
    #${id} .wpas-rst-item .wpas-rst-index {
        color: ${rsBrandColor} !important;
    }
    #${id} .wpas-rst-item .wp-block-button__link:hover,
    #${id} .wpas-rst-item .wp-block-button__link:focus {
        background: ${rsBrandColor} !important;
        color: #fff !important;
    }
    #${id} section.wp-block-group .wp-block-columns.wpas-rst-item:first-of-type .wpas-rst-index,
    #${id} .wpas-rst-item .wp-block-button:not(.is-style-outline) .wp-block-button__link {color: #fff !important;}
    #${id} .wpas-rst-item:not(:last-child) {
        margin-bottom: ${rsRowGap} !important;
    }
    ${rsSidebarExist ? 'section.wp-block-group .wp-block-columns.wpas-rst-item .wp-block-column:nth-child(1) {flex-basis: 10% !important;}section.wp-block-group .wp-block-columns.wpas-rst-item .wp-block-column:nth-child(3) {flex-basis: 25% !important;}section.wp-block-group .wp-block-columns.wpas-rst-item:first-of-type .wpas-rst-index {font-size: 60px;}.wpas-rst-item .wpas-rst-index {font-size: 50px;width: 80px;height: 80px;}.wpas-rst-item .wp-block-buttons,section.wp-block-group .wp-block-columns.wpas-rst-item {flex-wrap: wrap !important;}section.wp-block-group .wp-block-columns.wpas-rst-item .wp-block-column {flex-basis: auto !important;}' : ''}`;

    return (
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
                        value={rsBrandColor}
                        onChange={(colorValue) => setAttributes({ rsBrandColor: colorValue })}
                        clearable={false}
                    />
                    <UnitControl
                        label={__('Row Gap :')}
                        onChange={newValue => setAttributes({ rsRowGap: newValue })}
                        isUnitSelectTabbable
                        value={rsRowGap}
                        className={'frhd__component frhd__component-width-90'}
                    />
                    <ToggleControl
                        label={
                            rsSidebarExist
                            ? 'Body Has Sidebar Width :'
                            : 'BODY HAS SIDEBAR WIDTH :'
                        }
                        checked={rsSidebarExist}
                        onChange={newValue => setAttributes({ rsSidebarExist: newValue })}
                        className={'frhd__component-diff'}
                    />
                </PanelBody>
            </InspectorControls>,

            <div {...blockProps}>
                <RawHTML>{`<style>${wpasRSDynamicStyles}</style>`}</RawHTML>
                <div id={id} className={'wpas-review-summary-main'}>
                    <InnerBlocks
                        allowedBlocks={ALLOWED_BLOCKS}
                        template={TEMPLATE}
                    />
                </div>
            </div>
        </>
    );
}

export const save = ({ attributes }) => {

    const {
        id,
        rsBrandColor,
        rsRowGap,
        rsSidebarExist
    } = attributes;

    const wpasRSDynamicStyles = `#${id} section.wp-block-group .wp-block-columns.wpas-rst-item:first-of-type,
    #${id} .wpas-rst-item .wp-block-button__link,
    #${id} .wpas-rst-item .wpas-rst-index {
        border-color: ${rsBrandColor} !important;
    }
    #${id} section.wp-block-group .wp-block-columns.wpas-rst-item:first-of-type .wpas-rst-index,
    #${id} .wpas-rst-item .wp-block-button:not(.is-style-outline) .wp-block-button__link {
        background: ${rsBrandColor} !important;
    }
    #${id} .wpas-rst-list-title:before {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 5'%3E%3Cpath d='M16 4.5C14.5867 4.5 13.8698 3.9625 13.1767 3.4425C12.5305 2.9575 11.9197 2.5 10.6667 2.5C9.41359 2.5 8.80288 2.95813 8.15634 3.4425C7.46327 3.9625 6.74667 4.5 5.33307 4.5C3.91948 4.5 3.20314 3.9625 2.51007 3.4425C1.86379 2.9575 1.25307 2.5 0 2.5V0C1.41333 0 2.12993 0.5375 2.82301 1.0575C3.46928 1.5425 4.08 2 5.33307 2C6.58614 2 7.19686 1.54188 7.84314 1.0575C8.53647 0.5375 9.25307 0 10.6667 0C12.0803 0 12.7969 0.5375 13.4899 1.0575C14.1362 1.5425 14.7469 2 16.0003 2V4.5H16Z' fill='${encodeURIComponent(rsBrandColor)}'/%3E%3C/svg%3E");
    }
    #${id} .wpas-rst-list-title,
    #${id} .wpas-rst-item .wp-block-button__link,
    #${id} .wpas-rst-item .wpas-rst-index {
        color: ${rsBrandColor} !important;
    }
    #${id} .wpas-rst-item .wp-block-button__link:hover,
    #${id} .wpas-rst-item .wp-block-button__link:focus {
        background: ${rsBrandColor} !important;
        color: #fff !important;
    }
    #${id} section.wp-block-group .wp-block-columns.wpas-rst-item:first-of-type .wpas-rst-index,
    #${id} .wpas-rst-item .wp-block-button:not(.is-style-outline) .wp-block-button__link {color: #fff !important;}
    #${id} .wpas-rst-item:not(:last-child) {
        margin-bottom: ${rsRowGap} !important;
    }
    ${rsSidebarExist ? 'section.wp-block-group .wp-block-columns.wpas-rst-item .wp-block-column:nth-child(1) {flex-basis: 10% !important;}section.wp-block-group .wp-block-columns.wpas-rst-item .wp-block-column:nth-child(3) {flex-basis: 25% !important;}section.wp-block-group .wp-block-columns.wpas-rst-item:first-of-type .wpas-rst-index {font-size: 60px;}.wpas-rst-item .wpas-rst-index {font-size: 50px;width: 80px;height: 80px;}.wpas-rst-item .wp-block-buttons,section.wp-block-group .wp-block-columns.wpas-rst-item {flex-wrap: wrap !important;}section.wp-block-group .wp-block-columns.wpas-rst-item .wp-block-column {flex-basis: auto !important;}' : ''}`;

    return (
        <>
            <RawHTML>{`<style>${wpasRSDynamicStyles}</style>`}</RawHTML>
            <div id={id} className={'wpas-review-summary-main'}>
                <InnerBlocks.Content />
            </div>
        </>
    )
}