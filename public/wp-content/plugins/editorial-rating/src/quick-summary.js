import { __ } from '@wordpress/i18n';
import { RawHTML } from "@wordpress/element";
import { useBlockProps, InnerBlocks, InspectorControls, ColorPalette } from '@wordpress/block-editor';
import { __experimentalHeading as Heading, PanelBody, ToggleControl, __experimentalUnitControl as UnitControl, RangeControl, __experimentalNumberControl as NumberControl, FontSizePicker } from '@wordpress/components';

export const edit = ({ clientId, attributes, setAttributes }) => {

    const {
        id

    } = attributes;

    // Set unique ID through block index.
    let clientIdSliced = clientId.slice(clientId.lastIndexOf('-') + 1);
    setAttributes({ id: ('wpas-bnr-' + clientIdSliced) });

    // Defined Block Props.
    const blockProps = useBlockProps();

    const wpasBnrDynamicStyles = `#${id} .asdfads {
        overflow: auto;
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
                    <Heading className={'frhd__pb-heading'}>Heading Sample :</Heading>
                </PanelBody>
            </InspectorControls>
        </>,

        <div {...blockProps}>
            <RawHTML>{`<style>${wpasBnrDynamicStyles}</style>`}</RawHTML>
            <div id={id} className={'wpas-banner-ad-main'}>
                <h2>Banner Here..</h2>
            </div>
        </div>
    ])
}

export const save = ({ attributes }) => {

    const {
        id

    } = attributes;

    const wpasBnrDynamicStyles = `#${id} .asdfads {
        overflow: auto;
    }`;

    return (
        <>
            <RawHTML>{`<style>${wpasBnrDynamicStyles}</style>`}</RawHTML>
            <div id={id} className={'wpas-banner-ad-main'}>
                <h2>Banner Here..</h2>
            </div>
        </>
    )
}