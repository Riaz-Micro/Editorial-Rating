import { __ } from '@wordpress/i18n';
import { RawHTML } from "@wordpress/element";
import { useBlockProps, InnerBlocks, InspectorControls, ColorPalette } from '@wordpress/block-editor';
import { TextControl, __experimentalHeading as Heading, PanelBody, ToggleControl, __experimentalUnitControl as UnitControl, RangeControl, __experimentalNumberControl as NumberControl, FontSizePicker, __experimentalRadio as Radio, __experimentalRadioGroup as RadioGroup } from '@wordpress/components';

export const edit = ({ clientId, attributes, setAttributes }) => {

    const {
        id,
        srHighlightRange,
        showSRresult,
        srResultTxtSize,
        srStarsNtxtSpacing,
        srStarsSize,
        starsAlign,
        resultTxtAlign,
        srPrefix,
        srSuffix,
        srStarsColor,
        srStarsHLcolor,
        srResultTxtcolor
    } = attributes;

    // Set unique ID through block index.
    let clientIdSliced = clientId.slice(clientId.lastIndexOf('-') + 1);
    setAttributes({ id: ('wpas-sr-' + clientIdSliced) });

    // Defined Block Props.
    const blockProps = useBlockProps();

    const baseWidth = (srStarsSize - 20) * 5 + 102;
    const additionalWidth = Math.floor(baseWidth / 50 - 2);
    const wpassrDynamicStyles = `#${id} {
        position: relative;
        display: flex;
        justify-content: ${starsAlign};
        overflow: ${showSRresult ? 'visible' : 'hidden'};
        height: ${srStarsSize}px;
    }
    #${id} .wpas-product-rating-wrapper {
        height: 20px;
        position: relative;
        margin-bottom: 15px;
        width: ${srStarsSize === 20 ? '102px' : `${baseWidth + additionalWidth}px`};
    }
    #${id}.wpas-star-rating-main .wpas-star-rating {
        position: relative;
        display: block;
        line-height: 1.618;
        font-size: 1em;
        text-align: ${resultTxtAlign};
        color: ${srResultTxtcolor};
    }
    #${id} .wpas-star-rating span {
        display: inline-block;
        font-size: ${srResultTxtSize}px;
        margin-top: ${srStarsSize + 10 + srStarsNtxtSpacing}px;
        width: max-content;
    }
    #${id} .wpas-product-rating-wrapper:before,
    #${id} .wpas-product-rating-wrapper .wpas-star-rating:after {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        background-size: cover;
        background-repeat: no-repeat;
        background-position: left center;
        height: ${srStarsSize}px;
    }
    #${id} .wpas-product-rating-wrapper:before {
        width: 100%;
        z-index: 1;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 304 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m181.9 23.2c0.4 1.2 0 2.6-0.9 3.4l-13.2 11.5 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3-1.1 0.8-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.5c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 7-16.2c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.3 0.1 2.4 0.9 2.7 2.3z' fill='${encodeURIComponent(srStarsColor)}'/%3E%3Cpath d='m121 23.1c0.4 1.2 0 2.6-0.9 3.4l-13.1 11.5 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3-1.1 0.8-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.6c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 6.8-16c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.4 0 2.4 0.9 2.8 2.2z' fill='${encodeURIComponent(srStarsColor)}'/%3E%3Cpath d='m303 26.4-13.2 11.6 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3-1.1 0.8-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.5c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 6.8-16.1c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.3 0.1 2.4 1 2.8 2.2s0.1 2.6-0.8 3.3z' fill='${encodeURIComponent(srStarsColor)}'/%3E%3Cpath d='m242.9 23.2c0.4 1.2 0 2.6-0.9 3.4l-13.2 11.5 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3-1.1 0.8-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.5c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 6.8-16.2c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.5 0.1 2.5 0.9 2.9 2.3z' fill='${encodeURIComponent(srStarsColor)}'/%3E%3Cpath d='m60.1 23.1c0.4 1.2 0 2.6-0.9 3.4l-13.1 11.5 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3s-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.6c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 6.8-16.1c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.4 0.1 2.5 1 2.8 2.3z' fill='${encodeURIComponent(srStarsColor)}'/%3E%3C/svg%3E");
        filter: drop-shadow(0px 1px 0px gray);
    }
    #${id} .wpas-star-rating:after {
        width: ${srHighlightRange}%;
        z-index: 2;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 304 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m181.9 23.2c0.4 1.2 0 2.6-0.9 3.4l-13.2 11.5 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3-1.1 0.8-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.5c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 7-16.2c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.3 0.1 2.4 0.9 2.7 2.3z' fill='${encodeURIComponent(srStarsHLcolor)}'/%3E%3Cpath d='m121 23.1c0.4 1.2 0 2.6-0.9 3.4l-13.1 11.5 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3-1.1 0.8-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.6c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 6.8-16c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.4 0 2.4 0.9 2.8 2.2z' fill='${encodeURIComponent(srStarsHLcolor)}'/%3E%3Cpath d='m303 26.4-13.2 11.6 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3-1.1 0.8-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.5c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 6.8-16.1c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.3 0.1 2.4 1 2.8 2.2s0.1 2.6-0.8 3.3z' fill='${encodeURIComponent(srStarsHLcolor)}'/%3E%3Cpath d='m242.9 23.2c0.4 1.2 0 2.6-0.9 3.4l-13.2 11.5 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3-1.1 0.8-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.5c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 6.8-16.2c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.5 0.1 2.5 0.9 2.9 2.3z' fill='${encodeURIComponent(srStarsHLcolor)}'/%3E%3Cpath d='m60.1 23.1c0.4 1.2 0 2.6-0.9 3.4l-13.1 11.5 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3s-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.6c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 6.8-16.1c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.4 0.1 2.5 1 2.8 2.3z' fill='${encodeURIComponent(srStarsHLcolor)}'/%3E%3C/svg%3E");
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
                    <RangeControl
                        label='Stars Highlight:'
                        value={srHighlightRange}
                        onChange={(rangeValue) => setAttributes({ srHighlightRange: rangeValue })}
                        max={100}
                        step={1}
                    />
                    <ToggleControl
                        label={
                            showSRresult
                                ? 'Show Rating Result :'
                                : 'Hide Rating Result :'
                        }
                        checked={showSRresult}
                        onChange={newValue => setAttributes({ showSRresult: newValue })}
                        className={'frhd__component-diff'}
                    />
                    {showSRresult && (
                        <>
                            <RangeControl
                                label='Rating Result Text Size:'
                                value={srResultTxtSize}
                                onChange={(rangeValue) => setAttributes({ srResultTxtSize: rangeValue })}
                                min={1}
                                max={100}
                                step={2}
                                withInputField={false}
                            />
                            <RangeControl
                                label='Stars & Text Gap:'
                                value={srStarsNtxtSpacing}
                                onChange={(rangeValue) => setAttributes({ srStarsNtxtSpacing: rangeValue })}
                                min={1}
                                max={100}
                                step={2}
                                withInputField={false}
                            />
                            <label for="radiogroup-component" className="frhd__label-for-radiogroup">Result Text Align :</label>
                            <RadioGroup
                                onChange={(newValue) => setAttributes({ resultTxtAlign: newValue })}
                                defaultChecked={resultTxtAlign}
                                label="align"
                                className={"frhd__component"}
                            >
                                <Radio value="left">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                                </Radio>
                                <Radio value="center">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M352 64c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32zm96 128c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 448c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM352 320c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32z" /></svg>
                                </Radio>
                                <Radio value="right">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M448 64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                                </Radio>
                            </RadioGroup>
                            <TextControl
                                label="Prefix"
                                value={ srPrefix }
                                onChange={(rangeValue) => setAttributes({ srPrefix: rangeValue })}
                            />
                            <TextControl
                                label="Suffix"
                                value={ srSuffix }
                                onChange={(rangeValue) => setAttributes({ srSuffix: rangeValue })}
                            />
                        </>
                    )}
                    <RangeControl
                        label='Stars Size:'
                        value={srStarsSize}
                        onChange={(rangeValue) => setAttributes({ srStarsSize: rangeValue })}
                        min={20}
                        max={100}
                        step={2}
                        withInputField={false}
                    />
                    <label for="radiogroup-component" className="frhd__label-for-radiogroup">Stars Alignment :</label>
                    <RadioGroup
                        onChange={(newValue) => setAttributes({ starsAlign: newValue })}
                        defaultChecked={starsAlign}
                        label="align"
                        className={"frhd__component"}
                    >
                        <Radio value="left">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                        </Radio>
                        <Radio value="center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M352 64c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32zm96 128c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 448c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM352 320c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32z" /></svg>
                        </Radio>
                        <Radio value="right">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M448 64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                        </Radio>
                    </RadioGroup>
                    <Heading className={'frhd__pb-heading'}>Stars Color :</Heading>
                    <ColorPalette
                        value={srStarsColor}
                        onChange={(colorValue) => setAttributes({ srStarsColor: colorValue })}
                        clearable={false}
                    />
                    <Heading className={'frhd__pb-heading'}>Stars Highlight Color:</Heading>
                    <ColorPalette
                        value={srStarsHLcolor}
                        onChange={(colorValue) => setAttributes({ srStarsHLcolor: colorValue })}
                        clearable={false}
                    />
                    <Heading className={'frhd__pb-heading'}>Result Text Color :</Heading>
                    <ColorPalette
                        value={srResultTxtcolor}
                        onChange={(colorValue) => setAttributes({ srResultTxtcolor: colorValue })}
                        clearable={false}
                    />
                </PanelBody>
            </InspectorControls>
        </>,
        <div {...blockProps}>
            <RawHTML>{`<style>${wpassrDynamicStyles}</style>`}</RawHTML>
            <div id={id} className={'wpas-star-rating-main'}>
                <div className={`wpas-product-rating-wrapper`}>
                    <div
                        className="wpas-star-rating"
                        role="img"
                        aria-label={`Rated ${srHighlightRange / 20} out of 5`}>
                        <span>{`${srPrefix} `}<strong class="rating">{srHighlightRange / 20}</strong>{` ${srSuffix}`}</span>
                    </div>
                </div>
            </div>
        </div>
    ])
}

export const save = ({ attributes }) => {

    const {
        id,
        srHighlightRange,
        showSRresult,
        srResultTxtSize,
        srStarsNtxtSpacing,
        srStarsSize,
        starsAlign,
        resultTxtAlign,
        srPrefix,
        srSuffix,
        srStarsColor,
        srStarsHLcolor,
        srResultTxtcolor
    } = attributes;

    const baseWidth = (srStarsSize - 20) * 5 + 102;
    const additionalWidth = Math.floor(baseWidth / 50 - 2);
    const wpassrDynamicStyles = `#${id}.wpas-star-rating-main {
        position: relative;
        display: flex;
        justify-content: ${starsAlign};
        overflow: ${showSRresult ? 'visible' : 'hidden'};
        height: ${srStarsSize}px;
    }
    #${id}.wpas-star-rating-main .wpas-product-rating-wrapper {
        height: 20px;
        position: relative;
        margin-bottom: 15px;
        width: ${srStarsSize === 20 ? '102px' : `${baseWidth + additionalWidth}px`};
    }
    #${id}.wpas-star-rating-main .wpas-star-rating {
        position: relative;
        display: block;
        line-height: 1.618;
        font-size: 1em;
        color: ${srResultTxtcolor};
        text-align: ${resultTxtAlign};
    }
    #${id}.wpas-star-rating-main .wpas-star-rating span {
        display: inline-block;
        font-size: ${srResultTxtSize}px;
        margin-top: ${srStarsSize + 10 + srStarsNtxtSpacing}px;
        width: max-content;
    }
    #${id}.wpas-star-rating-main .wpas-product-rating-wrapper:before,
    #${id}.wpas-star-rating-main .wpas-product-rating-wrapper .wpas-star-rating:after {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        background-size: cover;
        background-repeat: no-repeat;
        background-position: left center;
        height: ${srStarsSize}px;
    }
    #${id}.wpas-star-rating-main .wpas-product-rating-wrapper:before {
        width: 100%;
        z-index: 1;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 304 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m181.9 23.2c0.4 1.2 0 2.6-0.9 3.4l-13.2 11.5 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3-1.1 0.8-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.5c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 7-16.2c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.3 0.1 2.4 0.9 2.7 2.3z' fill='${encodeURIComponent(srStarsColor)}'/%3E%3Cpath d='m121 23.1c0.4 1.2 0 2.6-0.9 3.4l-13.1 11.5 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3-1.1 0.8-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.6c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 6.8-16c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.4 0 2.4 0.9 2.8 2.2z' fill='${encodeURIComponent(srStarsColor)}'/%3E%3Cpath d='m303 26.4-13.2 11.6 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3-1.1 0.8-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.5c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 6.8-16.1c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.3 0.1 2.4 1 2.8 2.2s0.1 2.6-0.8 3.3z' fill='${encodeURIComponent(srStarsColor)}'/%3E%3Cpath d='m242.9 23.2c0.4 1.2 0 2.6-0.9 3.4l-13.2 11.5 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3-1.1 0.8-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.5c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 6.8-16.2c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.5 0.1 2.5 0.9 2.9 2.3z' fill='${encodeURIComponent(srStarsColor)}'/%3E%3Cpath d='m60.1 23.1c0.4 1.2 0 2.6-0.9 3.4l-13.1 11.5 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3s-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.6c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 6.8-16.1c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.4 0.1 2.5 1 2.8 2.3z' fill='${encodeURIComponent(srStarsColor)}'/%3E%3C/svg%3E");
        filter: drop-shadow(0px 1px 0px gray);
    }
    #${id}.wpas-star-rating-main .wpas-star-rating:after {
        width: ${srHighlightRange}%;
        z-index: 2;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 304 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m181.9 23.2c0.4 1.2 0 2.6-0.9 3.4l-13.2 11.5 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3-1.1 0.8-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.5c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 7-16.2c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.3 0.1 2.4 0.9 2.7 2.3z' fill='${encodeURIComponent(srStarsHLcolor)}'/%3E%3Cpath d='m121 23.1c0.4 1.2 0 2.6-0.9 3.4l-13.1 11.5 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3-1.1 0.8-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.6c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 6.8-16c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.4 0 2.4 0.9 2.8 2.2z' fill='${encodeURIComponent(srStarsHLcolor)}'/%3E%3Cpath d='m303 26.4-13.2 11.6 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3-1.1 0.8-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.5c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 6.8-16.1c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.3 0.1 2.4 1 2.8 2.2s0.1 2.6-0.8 3.3z' fill='${encodeURIComponent(srStarsHLcolor)}'/%3E%3Cpath d='m242.9 23.2c0.4 1.2 0 2.6-0.9 3.4l-13.2 11.5 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3-1.1 0.8-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.5c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 6.8-16.2c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.5 0.1 2.5 0.9 2.9 2.3z' fill='${encodeURIComponent(srStarsHLcolor)}'/%3E%3Cpath d='m60.1 23.1c0.4 1.2 0 2.6-0.9 3.4l-13.1 11.5 3.8 17c0.3 1.2-0.2 2.5-1.2 3.3s-2.5 0.9-3.6 0.2l-15-8.9-15 8.9c-0.5 0.3-1.1 0.5-1.6 0.5s-1.2-0.2-1.8-0.6c-1.1-0.7-1.5-2-1.2-3.3l3.8-17-13.2-11.6c-1-0.8-1.3-2.1-1-3.4 0.5-1.2 1.5-2.1 2.8-2.2l17.4-1.6 6.8-16.1c0.6-1.2 1.7-1.9 3-1.9s2.5 0.8 3 1.9l6.8 16.1 17.4 1.5c1.4 0.1 2.5 1 2.8 2.3z' fill='${encodeURIComponent(srStarsHLcolor)}'/%3E%3C/svg%3E");
    }`;

    return (
        <>
            <RawHTML>{`<style>${wpassrDynamicStyles}</style>`}</RawHTML>
            <div {...useBlockProps.save()} id={id} className={'wpas-star-rating-main'}>
                <div className={`wpas-product-rating-wrapper`}>
                    <div
                        className="wpas-star-rating"
                        role="img"
                        aria-label={`Rated ${srHighlightRange / 20} out of 5`}>
                        <span>{`${srPrefix} `}<strong class="rating">{srHighlightRange / 20}</strong>{` ${srSuffix}`}</span>
                    </div>
                </div>
            </div>
        </>
    )
}