import { __ } from '@wordpress/i18n';
import { RawHTML, useRef, useState, useEffect } from "@wordpress/element";
import { useBlockProps, InnerBlocks, InspectorControls, useInnerBlocksProps , ColorPalette} from '@wordpress/block-editor';
import { __experimentalHeading as Heading, PanelBody ,  __experimentalUnitControl as UnitControl} from '@wordpress/components';

export const edit = ({ clientId, attributes, setAttributes }) => {
    const { 
        id,
        score,
        sectionMaxWidth,
        headerBackground
    } = attributes;
    const [priceScores, setPriceScores] = useState([]);

    // Set unique ID through block index.
    let clientIdSliced = clientId.slice(clientId.lastIndexOf("-") + 1);
    setAttributes({ id: 'fper2-' + clientIdSliced });

    // Defined Block Props.
    const blockProps = useBlockProps();

    const progressBarTemplate = [
        ['fancypost/video-popup']
    ];

    //Template
    const editorialTemplate = [
        ['core/group', {
            tagName: 'section',
            className: 'fp-er-wrapper',
        }, [
                ['core/columns', {
                    verticalAlignment: 'center',
                    className: 'fp-er-top-section-wrapper',
                }, [
                        ['core/column', {
                            width: '70%',
                            className: 'fp-er-column'
                        }, [
                                ['core/heading', {
                                    content: '<strong>Editorial Rating</strong>',
                                    level: 3,
                                    align: 'left',
                                    className: 'fp-er-heading-left',
                                    style: {
                                        typography: {
                                            fontSize: '22px',
                                            lineHeight: '1',
                                        }
                                    }
                                }],
                            ]],
                        ['core/column', {
                            width: '30%',
                            className: 'fp-er-column',
                        }, [
                                ['core/heading', {
                                    content: `<strong>${score}</strong>`,
                                    level: 3,
                                    className: 'fp-er-heading fp-er-heading-dynamic',
                                    style: {
                                        typography: {
                                            fontSize: '22px',
                                            lineHeight: '1',
                                        }
                                    }
                                }],
                            ]],
                    ]],
                ['core/columns', {
                    verticalAlignment: 'center',
                    className: 'fp-er-img-wrapper'
                }, [
                        ['core/column', {
                            width: '100%',
                            className: 'fp-er-column'
                        }, [["core/image", {
                            src: '../public/images/editorial-rating-default-img.png',
                            alt: 'Sample Image',
                            className: 'fp-er-image',
                            style: {
                                width: '100%',
                                height: 'auto',
                            }
                        }]
                            ]]
                    ]],
                ['core/columns', {
                    verticalAlignment: 'center',
                    className: 'fp-er-progress-wrapper'
                }, [
                        ['core/column', {
                            width: '100%',
                            className: 'fp-er-column'
                        }, [
                                ...progressBarTemplate
                            ]]
                    ]],
                ['core/columns', {
                    verticalAlignment: 'center',
                    className: 'fp-er-btn-wrapper'
                }, [
                        ['core/button', {
                            text: 'Buy Now',
                            align: 'center',
                            backgroundColor: 'purple',
                            className: "buy-btn"
                        }],
                    ]],
            ]]
    ];

    const fpEditorialRatingTwo = `#${id}.fp-er-two-container {
        max-width: ${sectionMaxWidth} !important;
    }
    .fp-er-two-wrapper {
        border: 1px solid #eee;
        padding: 0px 0px !important;
    }
    .fp-er-top-section-wrapper {
       background: #f1f1f1 !important;
        padding: 15px 15px !important;
        color: #6c6c6c !important;
    }
    .fp-er-heading-left {
        text-align: start !important;
        color: #6c6c6c !important;
    }    
    .fp-er-heading-left > strong {
        font-weight: 400 !important;
    }    
    .fp-er-heading {
        text-align: end !important;
        color: #6c6c6c !important;
    }
    .fp-er-progress-wrapper {
        padding: 0px 15px !important;
    }
    .fp-er-img-wrapper {
        padding: 0px 15px !important;
    }
    .fp-er-image {
        display: flex !important;
        justify-content: center !important;
    }
    .fp-er-btn-wrapper {
        display: flex !important;
        justify-content: center !important;
        margin-bottom: 20px !important;
    }
    .buy-btn > div {
        background-color: #4d4163 !important;
        padding: 20px 100px !important;
        font-size: 17px !important;
    }
    .fp-er-column > figure > img {
        justify-content: center !important;
        display: flex !important;
    }`;

    useEffect(() => {
        const updateScores = () => {
            const prices = Array.from(document.querySelectorAll('.price-score'));
            setPriceScores(prices);
        };

        updateScores(); // Initial update

        const observer = new MutationObserver(updateScores);

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });

        return () => observer.disconnect();
    }, []); // Run once on mount

    useEffect(() => {
        const scoreElement = document.querySelector('.fp-er-heading');
        if (scoreElement) {
            const strongTag = scoreElement.querySelector('strong');
            if (priceScores.length > 0 && strongTag) {
                const total = priceScores.reduce((sum, el) => sum + parseFloat(el.innerText), 0);
                const average = (total / priceScores.length).toFixed(1);
                strongTag.textContent = average;
            }
        }
    }, [priceScores]);


    return ([
        <>
            <InspectorControls>
                <PanelBody
                    title={__('Editorial Rating Block Settings')}
                    icon={'admin-generic'}
                    initialOpen={true}
                    className={'frhd__control frhd__control-query'}
                >
                <UnitControl
                    label={__("Section Max Width:")}
                    onChange={(newValue) =>
                        setAttributes({ sectionMaxWidth: newValue })
                    }
                    isUnitSelectTabbable
                    value={sectionMaxWidth}
                    className={"frhd__component frhd__component-width-90"}
                />
                <Heading className={"frhd__pb-heading"}>Header Background :</Heading>
                <ColorPalette
                  value={headerBackground}
                  onChange={(colorValue) =>
                    setAttributes({ headerBackground: colorValue })
                  }
                  clearable={false}
                />
                </PanelBody>
            </InspectorControls>
        </>,
        <div {...blockProps}>
            <RawHTML>{`<style>${fpEditorialRatingTwo}</style>`}</RawHTML>
            <div id={id} className='fp-er-two-container'>
                <div className='fp-er-two-wrapper'>
                    <InnerBlocks template={editorialTemplate} />
                </div>
            </div>
        </div>
    ])
}

export const save = ({ attributes }) => {
    const { id, score , sectionMaxWidth} = attributes;

    const fpEditorialRatingTwo = `#${id}.fp-er-two-container {
        max-width: ${sectionMaxWidth} !important;
    }
    .fp-er-two-wrapper {
        border: 1px solid #eee !important;
        padding: 0px 0px !important;
    }
    .fp-er-top-section-wrapper {
       background: #f1f1f1 !important;
        padding: 15px 15px !important;
        color: #6c6c6c !important;
    }
    .fp-er-heading-left {
        text-align: start !important;
        color: #6c6c6c !important;
    }    
    .fp-er-heading-left > strong {
        font-weight: 400 !important;
    }    
    .fp-er-heading {
        text-align: end !important;
        color: #6c6c6c !important;
    }
    .fp-er-progress-wrapper {
        padding: 0px 15px !important;
        margin : 0 !important;
    }
    .fp-er-img-wrapper {
        padding: 0px 15px !important;
         margin : 0 !important;
    }
    .fp-er-image {
        display: flex !important;
        justify-content: center !important;
    }
    .fp-er-btn-wrapper {
        display: flex !important;
        justify-content: center !important;
        padding: 15px !important;
        margin-bottom: 20px !important;
    }
    .buy-btn > a {
        background-color: #4d4163 !important;
        padding: 20px 105px !important;
        font-size: 17px !important;
        border-radius: 50px !important;
    }
    .fp-er-column > figure > img {
        justify-content: center !important;
        display: flex !important;
    }`;

    const scoreScript = `document.addEventListener('DOMContentLoaded', function() {
        const priceScores = document.querySelectorAll('.price-score');
        const score = document.querySelector('.fp-er-heading');
        let strongTag = score.querySelector('strong');
        if (priceScores.length > 0) {
          const total = Array.from(priceScores).reduce((sum, el) => sum + parseFloat(el.innerText), 0);
          const average = (total / priceScores.length);
          const parseAvg = parseFloat(average).toFixed(1)
          strongTag.textContent = parseAvg;
        }
    });`;

    return (
        <>
            <div {...useBlockProps.save()}>
                <RawHTML>{`<style>${fpEditorialRatingTwo}</style>`}</RawHTML>
                <div id={id} className='fp-er-two-container'>
                    <div className='fp-er-two-wrapper'>
                        <InnerBlocks.Content />
                    </div>
                </div>
                <RawHTML>{`<script>${scoreScript}</script>`}</RawHTML>
            </div>
        </>
    );
};