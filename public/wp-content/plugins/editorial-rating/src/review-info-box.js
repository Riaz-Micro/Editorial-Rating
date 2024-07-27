import { __ } from '@wordpress/i18n';
import { RawHTML } from "@wordpress/element";
import { useBlockProps, InnerBlocks, InspectorControls, ColorPalette } from '@wordpress/block-editor';
import { __experimentalHeading as Heading, PanelBody, ToggleControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';

export const edit = ({ clientId, attributes, setAttributes }) => {

    const {
        id,
        infoBrandColor,
        infoShadowColor,
        infoBreakPoint
    } = attributes;

    // Set unique ID through block index.
    let clientIdSliced = clientId.slice(clientId.lastIndexOf('-') + 1);
    setAttributes({ id: ('wpasib-' + clientIdSliced) });

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
    const TEMPLATE = [['core/group', {
        tagName: 'section'
    }, [
            ['core/heading', {
                content: 'How do we rate 🏅',
                level: 2,
                placeholder: 'Write a heading for the info box..',
                textAlign: 'left',
                className: 'wpas-info-heading'
            }],
            ['core/paragraph', {
                content: 'We demystify our editorial process, providing a transparent look into the meticulous criteria that shape our DSLR camera ratings. From image quality and performance benchmarks to ergonomic design and innovative features, discover the key elements that define photographic excellence.',
                className: 'wpas-info-subheading'
            }],
            ['core/columns', {
                verticalAlignment: 'center',
                className: 'wpas-info-columns'
            }, [
                    ['core/column', { width: '33.333%' }, [
                        ['core/image', {
                            url: require('../public/img/1.png'),
                            align: 'center'
                        }],
                        ['core/heading', {
                            content: 'Research and Analysis',
                            level: 4,
                            textAlign: 'center',
                        }],
                        ['core/paragraph', {
                            content: 'Our team starts by conducting thorough research on the latest DSLR camera models, staying abreast of technological advancements, and understanding industry trends.',
                            align: 'center'
                        }],
                    ]],
                    ['core/column', { width: '33.333%' }, [
                        ['core/image', {
                            url: require('../public/img/2.png'),
                            align: 'center'
                        }],
                        ['core/heading', {
                            content: 'Performance Evaluation',
                            level: 4,
                            textAlign: 'center',
                        }],
                        ['core/paragraph', {
                            content: 'Cameras undergo extensive performance testing, evaluating factors such as image quality, autofocus speed, low-light capabilities, and overall shooting performance.',
                            align: 'center'
                        }],
                    ]],
                    ['core/column', { width: '33.333%' }, [
                        ['core/image', {
                            url: require('../public/img/3.png'),
                            align: 'center'
                        }],
                        ['core/heading', {
                            content: 'Feature Assessment',
                            level: 4,
                            textAlign: 'center',
                        }],
                        ['core/paragraph', {
                            content: 'We scrutinize the features offered by each camera, examining the innovation, versatility, and practicality of functionalities that cater to both novice photographers and seasoned professionals.',
                            align: 'center'
                        }],
                    ]]
                ]],

                // Column - 2.
                ['core/columns', {
                    verticalAlignment: 'center',
                    className: 'wpas-info-columns'
                }, [
                        ['core/column', { width: '33.333%' }, [
                            ['core/image', {
                                url: require('../public/img/4.png'),
                                align: 'center'
                            }],
                            ['core/heading', {
                                content: 'Customer Feedback',
                                level: 4,
                                textAlign: 'center',
                            }],
                            ['core/paragraph', {
                                content: 'We incorporate user reviews and feedback to understand real-world experiences, incorporating the perspectives of photographers who have used the cameras extensively.',
                                align: 'center'
                            }],
                        ]],
                        ['core/column', { width: '33.333%' }, [
                            ['core/image', {
                                url: require('../public/img/5.png'),
                                align: 'center'
                            }],
                            ['core/heading', {
                                content: 'Value for Money',
                                level: 4,
                                textAlign: 'center',
                            }],
                            ['core/paragraph', {
                                content: 'We evaluate the overall value proposition, considering the camera\'s price point in relation to the features and performance it offers, ensuring that consumers get the best bang for their buck.',
                                align: 'center'
                            }],
                        ]],
                        ['core/column', { width: '33.333%' }, [
                            ['core/image', {
                                url: require('../public/img/6.png'),
                                align: 'center'
                            }],
                            ['core/heading', {
                                content: 'Final Rating',
                                level: 4,
                                textAlign: 'center',
                            }],
                            ['core/paragraph', {
                                content: 'After a meticulous examination of all aspects, we assign a comprehensive rating, reflecting the camera’s overall performance, features, and suitability for different user needs.',
                                align: 'center'
                            }],
                        ]]
                    ]]
        ]
    ]];

    const wpascrDynamicStyles = `#${id} .wpas-info-columns .wp-block-column {
        border-bottom: 5px solid ${infoBrandColor};
        box-shadow: ${infoShadowColor} 0px 2px 5px -1px, ${infoShadowColor} 0px 1px 3px -1px;
    }
    @media (max-width: ${infoBreakPoint}) {
        #${id} .wpas-info-columns {
            flex-wrap: wrap !important;
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
                        value={infoBrandColor}
                        onChange={(colorValue) => setAttributes({ infoBrandColor: colorValue })}
                        clearable={false}
                    />
                    <Heading className={'frhd__pb-heading'}>Shadow Color :</Heading>
                    <ColorPalette
                        value={infoShadowColor}
                        onChange={(colorValue) => setAttributes({ infoShadowColor: colorValue })}
                        clearable={false}
                    />
                    <UnitControl
                        label={__('Break Point :')}
                        onChange={newValue => setAttributes({ infoBreakPoint: newValue })}
                        isUnitSelectTabbable
                        value={infoBreakPoint}
                        className={'frhd__component frhd__component-width-90'}
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
        infoBrandColor,
        infoShadowColor,
        infoBreakPoint
    } = attributes;

    const wpascrDynamicStyles = `#${id} .wpas-info-columns .wp-block-column {
        border-bottom: 5px solid ${infoBrandColor};
        box-shadow: ${infoShadowColor} 0px 2px 5px -1px, ${infoShadowColor} 0px 1px 3px -1px;
    }
    @media (max-width: ${infoBreakPoint}) {
        #${id} .wpas-info-columns {
            flex-wrap: wrap !important;
        }
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