import { __ } from '@wordpress/i18n';
import { useEffect, useRef } from "@wordpress/element";
import { useBlockProps, InspectorControls,ColorPalette } from '@wordpress/block-editor';
import { __experimentalHeading as Heading, PanelBody, RangeControl,  __experimentalUnitControl as UnitControl } from '@wordpress/components';

export const edit = ({ clientId, attributes, setAttributes }) => {

    const { 
        id,
        progressEndValue, 
        circleSize,
        circularProgressMaxWidth,
        circleFillColor,
        progressFontSize,
        innerCircleSize
    } = attributes;


    // Set unique ID through block index.
    let clientIdSliced = clientId.slice(clientId.lastIndexOf("-") + 1);
    setAttributes({ id: 'fpcpb-' + clientIdSliced });

    // Defined Block Props.
    const blockProps = useBlockProps();

    // Ref for circular-progress element
    const circularProgressRef = useRef(null);
    const progressRef = useRef(null);


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setAttributes(progressEndValue);
        }, 2000); 

        // Clean up timeout
        return () => clearTimeout(timeoutId);
    }, [progressEndValue]);


    useEffect(() => {
        const circularProgressElement = circularProgressRef.current;
        const progressElement = progressRef.current;
        let progressStartValue = 0;
        let speed = 15;

        let progress = setInterval(() => {
            progressStartValue++;
            circularProgressElement.style.background = `conic-gradient(${circleFillColor} ${progressStartValue * 3.6}deg, #ededed 0deg)`
            progressElement.textContent = `${progressStartValue}%`

            if (progressStartValue == progressEndValue) {
                clearInterval(progress)
            }
        }, speed)


    }, [progressEndValue, circleFillColor]);

    const fpProgressCircleDynamicStyles = `#${id}.circular-progress-container {
      max-width : ${circularProgressMaxWidth} !important;
    }
    #${id} .circular-progress {
        position: relative;
        width: ${circleSize}px;
        height: ${circleSize}px;
        background: conic-gradient(${circleFillColor} 3.6deg, #ededed 0deg);
        border-radius: 50%;
        display:flex;
        align-items: center;
        justify-content: center;
    }  
    #${id} .circular-progress::before {
       position: absolute;
       content : "";
       width : ${circleSize - innerCircleSize}px;
       height :${circleSize - innerCircleSize}px;
       background-color: #fff;
       border-radius: 50%;
    } 

     #${id} .progress-value {
        position: relative;
        font-size:${progressFontSize};
        font-weight: 600;
        color: ${circleFillColor};
    }`;

    return ([
        <>
            <InspectorControls>
                <PanelBody
                    title={__('Progress Circle Block Settings')}
                    icon={'admin-generic'}
                    initialOpen={true}
                    className={'frhd__control frhd__control-query'}
                >
                    <UnitControl
                        label={__("Circular Progress Max Width:")}
                        onChange={(newValue) =>
                            setAttributes({ circularProgressMaxWidth: newValue })
                        }
                        isUnitSelectTabbable
                        value={circularProgressMaxWidth}
                        className={"frhd__component frhd__component-width-90"}
                    />
                    <RangeControl
                        label="Progress"
                        value={progressEndValue}
                        onChange={(value) => setAttributes({ progressEndValue: value })}
                        min={1}
                        max={100}
                    />
                    <RangeControl
                        label="Circle Size"
                        value={circleSize}
                        onChange={(value) => setAttributes({ circleSize: value })}
                        min={150}
                        max={900}
                    />
                    <RangeControl
                        label="Circle Stroke"
                        value={innerCircleSize}
                        onChange={(value) => setAttributes({ innerCircleSize: value })}
                        min={30}
                        max={700}
                    />
                     <UnitControl
                        label={__("Progress Font Size:")}
                        onChange={(newValue) =>
                            setAttributes({ progressFontSize: newValue })
                        }
                        isUnitSelectTabbable
                        value={progressFontSize}
                        className={"frhd__component frhd__component-width-90"}
                    />
                    <Heading className={"frhd__pb-heading"}>Progress Fill Color :</Heading>
                      <ColorPalette
                        value={circleFillColor}
                        onChange={(colorValue) =>
                            setAttributes({ circleFillColor: colorValue })
                        }
                        clearable={false}
                    />
                </PanelBody>
            </InspectorControls>
        </>,
        <div {...blockProps}>
            <style>{fpProgressCircleDynamicStyles}</style>
            <div id={id} className={'circular-progress-container'}>
                <div ref={circularProgressRef} className='circular-progress'>
                    <span ref={progressRef} className='progress-value'>0%</span>
                </div>
            </div>
        </div>
    ])
}

export const save = ({ attributes }) => {

    const { 
        id, 
        progressEndValue, 
        circleSize,
        circularProgressMaxWidth, 
        circleFillColor,
        progressFontSize,
        innerCircleSize
    } = attributes;

    const fpProgressCircleDynamicStyles = `#${id}.circular-progress-container {
         max-width : ${circularProgressMaxWidth} !important;
     }
    #${id} .circular-progress {
        position: relative;
        width: ${circleSize}px;
        height: ${circleSize}px;
        background: conic-gradient(${circleFillColor} 3.6deg, #ededed 0deg);
        border-radius: 50%;
        display:flex;
        align-items: center;
        justify-content: center;
    }  
    #${id} .circular-progress::before {
       position: absolute;
       content : "";
       width : ${circleSize - innerCircleSize}px;
       height : ${circleSize - innerCircleSize}px;
       background-color: #fff;
       border-radius: 50%;
    } 

    #${id} .progress-value {
        position: relative;
        font-size:${progressFontSize};
        font-weight: 600;
        color:${circleFillColor};
    }`;

    const fpCircularProgressAnimationScript = `document.addEventListener('DOMContentLoaded', function() {
        const circularProgressElement = document.querySelector('#${id} .circular-progress');
        const progressElement = document.querySelector('#${id} .progress-value');
        let progressStartValue = 0;
        let speed = 15;

        let progress = setInterval(() => {
            progressStartValue++;
            circularProgressElement.style.background = \`conic-gradient(${circleFillColor} \${progressStartValue * 3.6}deg, #ededed 0deg)\`;
            progressElement.textContent = \`\${progressStartValue}%\`;

            if (progressStartValue === ${progressEndValue}) {
                clearInterval(progress);
            }
        }, speed);
    });`;

    return (
        <>
            <style>{fpProgressCircleDynamicStyles}</style>
            <div id={id} className="circular-progress-container">
                <div className="circular-progress">
                    <span className="progress-value">0%</span>
                </div>
            </div>
            <script dangerouslySetInnerHTML={{ __html: fpCircularProgressAnimationScript }}></script>
        </>
    );
};