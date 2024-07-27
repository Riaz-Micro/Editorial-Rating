/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/banner-ad.js":
/*!**************************!*\
  !*** ./src/banner-ad.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   edit: () => (/* binding */ edit),
/* harmony export */   save: () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





const edit = ({
  clientId,
  attributes,
  setAttributes
}) => {
  const {
    id
  } = attributes;

  // Set unique ID through block index.
  let clientIdSliced = clientId.slice(clientId.lastIndexOf('-') + 1);
  setAttributes({
    id: 'wpas-bnr-' + clientIdSliced
  });

  // Defined Block Props.
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  const wpasBnrDynamicStyles = `#${id} .asdfads {
        overflow: auto;
    }`;
  return [(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cross Rating Block Settings'),
    icon: 'admin-generic',
    initialOpen: true,
    className: 'frhd__control frhd__control-query'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Heading Sample :")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpasBnrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: 'wpas-banner-ad-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Banner Here..")))];
};
const save = ({
  attributes
}) => {
  const {
    id
  } = attributes;
  const wpasBnrDynamicStyles = `#${id} .asdfads {
        overflow: auto;
    }`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpasBnrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: 'wpas-banner-ad-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Banner Here..")));
};

/***/ }),

/***/ "./src/cross-rating.js":
/*!*****************************!*\
  !*** ./src/cross-rating.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   edit: () => (/* binding */ edit),
/* harmony export */   save: () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





const edit = ({
  clientId,
  attributes,
  setAttributes
}) => {
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
  setAttributes({
    id: 'wpascr-' + clientIdSliced
  });

  // Defined Block Props.
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  const ALLOWED_BLOCKS = ['core/group', 'core/columns', 'core/image', 'core/list', 'core/list-item', 'core/paragraph', 'core/buttons', 'core/button'];

  // Reference: https://developer.wordpress.org/block-editor/reference-guides/core-blocks/
  const TEMPLATE = [['core/group', {
    tagName: 'section'
  }, [['core/paragraph', {
    content: 'Best Site 2024',
    className: 'wpas-cr-flag'
  }], ['core/paragraph', {
    content: 'Last updated: January 2024',
    className: 'wpas-cr-date',
    style: {
      typography: {
        fontSize: '18px'
      },
      color: {
        text: '#ffa3b3'
      }
    }
  }], ['core/columns', {
    verticalAlignment: 'center',
    className: 'wpas-cr-item'
  }, [['core/column', {
    width: '25%'
  }, [['core/paragraph', {
    content: '<strong>1</strong>',
    className: 'wpas-cr-index'
  }], ['core/image', {
    url: __webpack_require__(/*! ../admin/img/canon.png */ "./admin/img/canon.png"),
    align: 'center'
  }]]], ['core/column', {
    width: '35%'
  }, [['core/paragraph', {
    content: '<strong>#1 in the USA for Lorem Ipsum & Dolor site!</strong>',
    className: 'wpas-cr-list-title',
    style: {
      typography: {
        fontSize: '17px'
      }
    }
  }], ['core/list', {
    className: 'wpas-cr-list'
  }, [['core/list-item', {
    content: '<a href="#" rel="nofollow">Lorem ipsum dolor sit amet consectetur</a>'
  }], ['core/list-item', {
    content: 'Adipiscing elit hendrerit augue iaculis rutrum'
  }], ['core/list-item', {
    content: 'Aliquet in dictum scelerisque porttitor habitant'
  }], ['core/list-item', {
    content: 'Ornare sociis massa vitae blandit dictum'
  }], ['core/list-item', {
    content: 'Proin tortor purus nostra habitant in'
  }]]]]], ['core/column', {
    width: '20%'
  }, [['core/paragraph', {
    content: '<strong>9.9</strong>',
    align: 'center',
    className: 'wpas-cr-score',
    style: {
      typography: {
        fontSize: '68px',
        lineHeight: '1'
      }
    }
  }], ['core/paragraph', {
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
  }]]], ['core/column', {
    width: '20%'
  }, [['core/buttons', {}, [['core/button', {
    text: 'Visit Site',
    url: '#',
    rel: 'nofollow',
    style: {
      typography: {
        fontSize: '18px'
      }
    }
  }]]], ['core/paragraph', {
    content: '<a href="#">Read Full Review</a>',
    align: 'center',
    className: 'wpas-cr-link-after-btn',
    style: {
      typography: {
        fontSize: '16px',
        lineHeight: '1'
      }
    }
  }]]]]],
  // Column -2
  ['core/columns', {
    verticalAlignment: 'center',
    className: 'wpas-cr-item'
  }, [['core/column', {
    width: '25%'
  }, [['core/paragraph', {
    content: '<strong>2</strong>',
    className: 'wpas-cr-index'
  }], ['core/image', {
    url: __webpack_require__(/*! ../admin/img/sony.png */ "./admin/img/sony.png"),
    align: 'center'
  }]]], ['core/column', {
    width: '35%'
  }, [['core/list', {
    className: 'wpas-cr-list'
  }, [['core/list-item', {
    content: 'Lorem ipsum dolor sit amet consectetur'
  }], ['core/list-item', {
    content: 'Adipiscing elit hendrerit augue iaculis rutrum'
  }], ['core/list-item', {
    content: 'Aliquet in dictum scelerisque porttitor habitant'
  }], ['core/list-item', {
    content: 'Ornare sociis massa vitae blandit dictum'
  }], ['core/list-item', {
    content: 'Proin tortor purus nostra habitant in<ul><li>Ac aenean tempor himenaeos eleifend</li></ul>'
  }]]]]], ['core/column', {
    width: '20%'
  }, [['core/paragraph', {
    content: '<strong>8.7</strong>',
    align: 'center',
    className: 'wpas-cr-score',
    style: {
      typography: {
        fontSize: '60px',
        lineHeight: '1'
      }
    }
  }], ['core/paragraph', {
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
  }]]], ['core/column', {
    width: '20%'
  }, [['core/buttons', {}, [['core/button', {
    text: 'Visit Site',
    url: '#',
    rel: 'nofollow',
    style: {
      typography: {
        fontSize: '18px'
      }
    }
  }]]], ['core/paragraph', {
    content: '<a href="#">Read Full Review</a>',
    align: 'center',
    className: 'wpas-cr-link-after-btn',
    style: {
      typography: {
        fontSize: '16px',
        lineHeight: '1'
      }
    }
  }]]]]],
  // Column -3
  ['core/columns', {
    verticalAlignment: 'center',
    className: 'wpas-cr-item'
  }, [['core/column', {
    width: '25%'
  }, [['core/paragraph', {
    content: '<strong>3</strong>',
    className: 'wpas-cr-index'
  }], ['core/image', {
    url: __webpack_require__(/*! ../admin/img/nikon.png */ "./admin/img/nikon.png"),
    align: 'center'
  }]]], ['core/column', {
    width: '35%'
  }, [['core/list', {
    className: 'wpas-cr-list'
  }, [['core/list-item', {
    content: 'Lorem ipsum dolor sit amet consectetur'
  }], ['core/list-item', {
    content: 'Adipiscing elit hendrerit augue iaculis rutrum'
  }], ['core/list-item', {
    content: 'Aliquet in dictum scelerisque porttitor habitant'
  }], ['core/list-item', {
    content: 'Ornare sociis massa vitae blandit dictum<ul><li>Ac aenean tempor himenaeos eleifend</li><li>Proin tortor purus nostra habitant in</li></ul>'
  }]]]]], ['core/column', {
    width: '20%'
  }, [['core/paragraph', {
    content: '<strong>7.9</strong>',
    align: 'center',
    className: 'wpas-cr-score',
    style: {
      typography: {
        fontSize: '60px',
        lineHeight: '1'
      }
    }
  }], ['core/paragraph', {
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
  }]]], ['core/column', {
    width: '20%'
  }, [['core/buttons', {}, [['core/button', {
    text: 'Visit Site',
    url: '#',
    rel: 'nofollow',
    style: {
      typography: {
        fontSize: '18px'
      }
    }
  }]]], ['core/paragraph', {
    content: '<a href="#">Read Full Review</a>',
    align: 'center',
    className: 'wpas-cr-link-after-btn',
    style: {
      typography: {
        fontSize: '16px',
        lineHeight: '1'
      }
    }
  }]]]]]]]];
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
  return [(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cross Rating Block Settings'),
    icon: 'admin-generic',
    initialOpen: true,
    className: 'frhd__control frhd__control-query'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Brand Color :"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: crBrandColor,
    onChange: colorValue => setAttributes({
      crBrandColor: colorValue
    }),
    clearable: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Background Color :"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: crbgColor,
    onChange: colorValue => setAttributes({
      crbgColor: colorValue
    }),
    clearable: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Check Icon Color :"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: crCheckIconColor,
    onChange: colorValue => setAttributes({
      crCheckIconColor: colorValue
    }),
    clearable: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Check Icon Size :'),
    onChange: newValue => setAttributes({
      crCheckIconSize: newValue
    }),
    isUnitSelectTabbable: true,
    value: crCheckIconSize,
    className: 'frhd__component frhd__component-width-90'
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Cross Icon Color :"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: crCrossIconColor,
    onChange: colorValue => setAttributes({
      crCrossIconColor: colorValue
    }),
    clearable: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cross Icon Size :'),
    onChange: newValue => setAttributes({
      crCrossIconSize: newValue
    }),
    isUnitSelectTabbable: true,
    value: crCrossIconSize,
    className: 'frhd__component frhd__component-width-90'
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Stars Color :"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: crStarsColor,
    onChange: colorValue => setAttributes({
      crStarsColor: colorValue
    }),
    clearable: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Break Point (Laptop):'),
    onChange: newValue => setAttributes({
      crBreakPointLaptop: newValue
    }),
    isUnitSelectTabbable: true,
    value: crBreakPointLaptop,
    className: 'frhd__component frhd__component-width-90'
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Break Point (Tablet):'),
    onChange: newValue => setAttributes({
      crBreakPointTablet: newValue
    }),
    isUnitSelectTabbable: true,
    value: crBreakPointTablet,
    className: 'frhd__component frhd__component-width-90'
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Break Point (Mobile):'),
    onChange: newValue => setAttributes({
      crBreakPointMobile: newValue
    }),
    isUnitSelectTabbable: true,
    value: crBreakPointMobile,
    className: 'frhd__component frhd__component-width-90'
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: crSidebarExist ? 'Body Has Sidebar Width :' : 'BODY HAS SIDEBAR WIDTH :',
    checked: crSidebarExist,
    onChange: newValue => setAttributes({
      crSidebarExist: newValue
    }),
    className: 'frhd__component-diff'
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpascrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: 'wpas-cross-rating-self-block'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE
  })))];
};
const save = ({
  attributes
}) => {
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpascrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save(),
    id: id,
    className: 'wpas-cross-rating-self-block'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null))));
};

/***/ }),

/***/ "./src/freemium-table.js":
/*!*******************************!*\
  !*** ./src/freemium-table.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   edit: () => (/* binding */ edit),
/* harmony export */   save: () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





const edit = ({
  clientId,
  attributes,
  setAttributes
}) => {
  const {
    id,
    ftMaxWidth,
    ftBrandColor,
    ftBreakPoint
  } = attributes;

  // Set unique ID through block index.
  let clientIdSliced = clientId.slice(clientId.lastIndexOf('-') + 1);
  setAttributes({
    id: 'wpasft-' + clientIdSliced
  });

  // Defined Block Props.
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  const ALLOWED_BLOCKS = ['core/group', 'core/heading', 'core/columns', 'core/image', 'core/list', 'core/list-item', 'core/paragraph', 'core/buttons', 'core/button'];

  // Reference: https://developer.wordpress.org/block-editor/reference-guides/core-blocks/
  const TEMPLATE = [['core/group', {
    tagName: 'section'
  }, [['core/table', {
    className: 'wpas-freemium-table',
    head: [{
      cells: [{
        tag: "th",
        content: "Feature"
      }, {
        tag: "th",
        content: "Free"
      }, {
        tag: "th",
        content: "Premium"
      }]
    }],
    body: [{
      cells: [{
        tag: "td",
        content: "Lorem ipsum dolor sit amet consectetur"
      }, {
        tag: "td",
        content: "✓"
      }, {
        tag: "td",
        content: "✓"
      }]
    }, {
      cells: [{
        tag: "td",
        content: "Adipiscing elit hendrerit augue iaculis rutrum"
      }, {
        tag: "td",
        content: "✗"
      }, {
        tag: "td",
        content: "✓"
      }]
    }, {
      cells: [{
        tag: "td",
        content: "Aliquet in dictum scelerisque porttitor"
      }, {
        tag: "td",
        content: "✓"
      }, {
        tag: "td",
        content: "✓"
      }]
    }, {
      cells: [{
        tag: "td",
        content: "Ornare sociis massa vitae blandit dictum"
      }, {
        tag: "td",
        content: "✗"
      }, {
        tag: "td",
        content: "✓"
      }]
    }, {
      cells: [{
        tag: "td",
        content: "Proin tortor purus nostra habitant"
      }, {
        tag: "td",
        content: "✗"
      }, {
        tag: "td",
        content: "✓"
      }]
    }]
  }]]]];
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
  return [(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cross Rating Block Settings'),
    icon: 'admin-generic',
    initialOpen: true,
    className: 'frhd__control frhd__control-query'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Max Width :'),
    onChange: newValue => setAttributes({
      ftMaxWidth: newValue
    }),
    isUnitSelectTabbable: true,
    value: ftMaxWidth,
    className: 'frhd__component frhd__component-width-90'
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Brand Color :"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: ftBrandColor,
    onChange: colorValue => setAttributes({
      ftBrandColor: colorValue
    }),
    clearable: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Responsive Breakpoint :'),
    onChange: newValue => setAttributes({
      ftBreakPoint: newValue
    }),
    isUnitSelectTabbable: true,
    value: ftBreakPoint,
    className: 'frhd__component frhd__component-width-90'
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpascrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: 'wpas-freemium-table-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE
  })))];
};
const save = ({
  attributes
}) => {
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpascrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save(),
    id: id,
    className: 'wpas-freemium-table-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null))));
};

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.stackStar = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "16",
  width: "16",
  viewBox: "0 0 512 512"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#f73859",
  d: "M24 56c0-13.3 10.7-24 24-24H80c13.3 0 24 10.7 24 24V176h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H40c-13.3 0-24-10.7-24-24s10.7-24 24-24H56V80H48C34.7 80 24 69.3 24 56zM86.7 341.2c-6.5-7.4-18.3-6.9-24 1.2L51.5 357.9c-7.7 10.8-22.7 13.3-33.5 5.6s-13.3-22.7-5.6-33.5l11.1-15.6c23.7-33.2 72.3-35.6 99.2-4.9c21.3 24.4 20.8 60.9-1.1 84.7L86.8 432H120c13.3 0 24 10.7 24 24s-10.7 24-24 24H32c-9.5 0-18.2-5.6-22-14.4s-2.1-18.9 4.3-25.9l72-78c5.3-5.8 5.4-14.6 .3-20.5zM224 64H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
}));
icons.reviewSummary = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#f73859",
  d: "M4.68.06l1.04,1.04-3.76,3.76L-.05,2.85.99,1.8l.97.97L4.68.06ZM1.96,13.85l-.97-.97L-.05,13.92l2.01,2.01,3.76-3.76-1.04-1.04-2.71,2.72ZM7.68,14.27h8.31v-1.47H7.68v1.47ZM7.68,3.41h8.31v-1.47H7.68v1.47ZM1.96,8.34l-.97-.97L-.05,8.41l2.01,2.01,3.76-3.76-1.04-1.04-2.71,2.72ZM7.68,8.76h8.31v-1.47H7.68v1.47Z"
}));
icons.reviewInfoBox = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#f73859",
  d: "M3.86,5.36l-1.04-1.01,1.44-.21.64-1.31.65,1.31,1.44.21-1.04,1.01.24,1.44-1.29-.68-1.28.68.24-1.44ZM2.82,13.17h4.4v-1.51H2.82v1.51ZM2.82,9.81h10.36v-1.52H2.82v1.52ZM16,1.98v12.04c0,1.1-.89,1.99-1.99,1.99H1.99C.89,16.01,0,15.12,0,14.02V1.98C0,.88.89-.01,1.99-.01h12.02c1.1,0,1.99.89,1.99,1.99ZM14.69,1.98c0-.38-.3-.68-.68-.68H1.99c-.38,0-.68.3-.68.68v12.04c0,.38.3.68.68.68h12.02c.38,0,.68-.3.68-.68V1.98ZM3.62,6.8l1.28-.68,1.29.68-.24-1.44,1.04-1.01-1.44-.21-.65-1.31-.64,1.31-1.44.21,1.04,1.01-.24,1.44ZM2.82,13.17h4.4v-1.51H2.82v1.51ZM2.82,8.29v1.52h10.36v-1.52H2.82ZM2.82,11.66v1.51h4.4v-1.51H2.82ZM2.82,8.29v1.52h10.36v-1.52H2.82ZM6.99,4.35l-1.44-.21-.65-1.31-.64,1.31-1.44.21,1.04,1.01-.24,1.44,1.28-.68,1.29.68-.24-1.44,1.04-1.01Z"
}));
icons.prosCons = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#f73859",
  d: "M6.11,8.56H0v-1.4h6.12v1.4ZM6.11,10.97H0v1.4h6.12v-1.4ZM5.34,14.45H.76v1.4h4.58v-1.4ZM16.01,7.16h-6.12v1.4h6.12v-1.4ZM16.01,10.97h-6.12v1.4h6.12v-1.4ZM15.24,14.45h-4.58v1.4h4.58v-1.4ZM11.82,5.34l1.53-1.52,1.54,1.52,1.06-1.1-1.51-1.49,1.51-1.51-1.06-1.09-1.54,1.52-1.53-1.52-1.09,1.09,1.53,1.51-1.53,1.5,1.09,1.09ZM5.77,1.46l-1.08-1.09-2.6,2.58-.93-.93L.08,3.11l2.01,2.01,3.68-3.66Z"
}));
icons.freemiumTable = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#f73859",
  d: "M1.14,15.98L0,14.84l1.63-1.6L0,11.62l1.14-1.14,1.64,1.62,1.64-1.63,1.11,1.15-1.61,1.61,1.61,1.6-1.11,1.14-1.64-1.62-1.64,1.62ZM6.08,1.18L4.92.02l-2.76,2.78-.99-.99L0,2.97l2.16,2.13,3.93-3.92ZM16,1.65h-8v1.79h8v-1.79ZM16,7.16h-8v1.79h8v-1.79ZM16,12.34h-8v1.79h8v-1.79Z"
}));
icons.pricingTable = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#f73859",
  d: "M8.39,7.37c0-.15-.05-.32-.61-.55-.69-.27-1.4-.67-1.4-1.56,0-.67.43-1.22,1.09-1.43v-.8h1.12v.73c.28.04.54.13.77.27l.25.14-.42,1.11-.34-.19c-.11-.07-.35-.2-.74-.2-.27,0-.43.1-.43.28,0,.13.05.25.69.51.62.25,1.33.67,1.33,1.63,0,.7-.45,1.27-1.14,1.49v.82h-1.13v-.76c-.37-.05-.72-.18-.97-.36l-.21-.15.41-1.13.36.24c.24.16.56.25.85.25.24,0,.52-.1.52-.37ZM10.1,11.47h-4.2v1.34h4.2v-1.34ZM12.69,1.79h3.31v12.49h-3.31v1.73H3.31v-1.73H0V1.79h3.31V-.01h9.39v1.8ZM3.31,3.13h-1.96v9.8h1.96V3.13ZM11.35,1.33h-6.7v13.34h6.7V1.33ZM12.69,3.13v9.8h1.96V3.13h-1.96Z"
}));
icons.starRating = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#f73859",
  d: "M8,15.99c4.41,0,8-3.58,8-7.99S12.41,0,8,0,0,3.6,0,8.01s3.59,7.99,8,7.99ZM8,1.32c3.69,0,6.69,3,6.69,6.68s-3,6.69-6.69,6.69S1.32,11.69,1.32,8.01,4.31,1.32,8,1.32ZM4.66,12.6l3.34-1.76,3.34,1.76-.64-3.72,2.7-2.64-3.74-.54-1.67-3.39-1.67,3.39-3.74.54,2.71,2.64-.64,3.72ZM5.19,7.08l1.94-.28.87-1.76.87,1.76,1.95.28-1.41,1.37.33,1.94-1.74-.91-1.74.91.33-1.94-1.41-1.37Z"
}));
icons.bannerAd = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#f73859",
  d: "M13.82.02H2.18C.99.02.02.99.02,2.18v11.64c0,1.19.97,2.16,2.16,2.16h11.64c1.19,0,2.16-.97,2.16-2.16V2.18C15.98.99,15.01.02,13.82.02ZM14.58,13.82c0,.42-.34.76-.76.76H2.18c-.41,0-.76-.34-.76-.76V2.18c0-.42.35-.76.76-.76h11.64c.42,0,.76.34.76.76v11.64ZM5.16,4.85l-2.41,6.3h1.28l.35-1.01h2.31l.35,1.01h1.28l-2.41-6.3h-.75ZM4.79,9l.75-2.15.75,2.15h-1.51ZM12.6,5.44c-.43-.39-1.04-.59-1.83-.59h-2.08v6.3h2.08c.55,0,1.01-.09,1.38-.28s.64-.45.83-.79.28-.73.28-1.18v-1.78c0-.72-.22-1.27-.65-1.66ZM12.01,8.93c0,.34-.11.61-.32.79s-.52.28-.9.28h-.92v-4.01h.92c.39,0,.69.09.9.28s.32.45.32.8v1.85Z"
}));
icons.noticeBox = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#f73859",
  d: "M6.7,11.04h4.11v1.3h-4.11v-1.3ZM6.7,8.55h6.82v-1.3h-6.82v1.3ZM16,1.97v12.06c0,1.08-.88,1.96-1.97,1.96H1.98C.89,15.99,0,15.11,0,14.03V1.97C0,.88.89,0,1.98,0h12.05c1.09,0,1.97.88,1.97,1.97ZM14.74,1.97c0-.39-.32-.71-.71-.71H1.98c-.39,0-.71.32-.71.71v12.06c0,.38.33.7.71.7h12.05c.39,0,.71-.31.71-.7V1.97ZM6.7,12.34h4.11v-1.3h-4.11v1.3ZM6.7,7.25v1.3h6.82v-1.3h-6.82ZM6.7,7.25v1.3h6.82v-1.3h-6.82ZM6.7,11.04v1.3h4.11v-1.3h-4.11ZM2.87,11.04c-.19.21-.31.46-.31.76,0,.28.1.53.31.74.21.2.46.31.74.31s.55-.11.75-.31c.21-.21.3-.46.3-.74,0-.3-.09-.55-.3-.76-.4-.39-1.07-.39-1.49,0ZM3.18,10.38h.87l.6-5.46c.03-.18.04-.35.04-.46,0-.41-.1-.73-.29-.95-.41-.48-1.14-.48-1.56,0-.19.22-.29.53-.29.89,0,.1.01.27.04.51l.59,5.47Z"
}));
icons.testimonial = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#f73859",
  d: "M14.03,0H1.98C.89,0,.01.89.01,1.98v12.05c0,1.08.88,1.96,1.97,1.96h12.05c1.09,0,1.97-.88,1.97-1.96V1.98C16,.89,15.12,0,14.03,0ZM14.74,14.03c0,.39-.32.7-.71.7H1.98c-.39,0-.71-.32-.71-.7V1.98c0-.39.32-.71.71-.71h12.05c.39,0,.71.32.71.71v12.05ZM2.83,11.68h4.39v1.51H2.83v-1.51ZM2.83,8.31h10.35v1.52H2.83v-1.52ZM2.88,6.79s-.05,0-.05-.05c0-.76.57-1.44,1.4-1.69.06-.02.1-.01.16.01.37.17.75.17,1.13,0,.04-.02.07-.02.11,0,.72.25,1.17.71,1.32,1.37.02.1.03.21.04.32,0,.03-.01.04-.05.04-.68,0-1.35,0-2.03,0s-1.35,0-2.02,0ZM3.73,3.96c0-.58.56-1.05,1.23-1.05.68,0,1.22.47,1.22,1.05,0,.58-.55,1.05-1.23,1.05-.67,0-1.22-.48-1.22-1.06Z"
}));
icons.vipQuote = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#f73859",
  d: "M12.68,13.86c.17.49.17.97-.08,1.43-.27.52-.83.78-1.39.67-.57-.11-1.01-.57-1.08-1.15-.08-.8.53-1.5,1.35-1.49h.06q.11.01.08-.1c-.06-.35-.24-.63-.53-.84-.01-.01-.03-.03-.04-.04.11.03.21.07.32.11.62.29,1.09.74,1.32,1.4ZM15.98,14.2c-.1-.6-.42-1.07-.9-1.43-.24-.18-.52-.32-.8-.42-.01.04.03.04.04.06.28.22.45.5.5.84.03.1.01.1-.07.08h-.07c-.83-.01-1.47.71-1.33,1.54.08.55.41.91.94,1.07.52.14.98.01,1.35-.41.34-.38.41-.84.34-1.33ZM15.97.88l-2.7,9.77c-.09.29-.34.48-.62.48H3.5c-.28,0-.54-.19-.62-.47L.03.89C-.06.61.06.31.31.16.57,0,.89.05,1.11.26l4.5,4.54,1.82-3.24c.1-.2.32-.32.55-.33h0c.23,0,.44.12.56.33l1.97,3.3L14.89.26c.2-.22.53-.27.79-.11.26.15.38.45.29.74ZM13.48,3.98l-2.71,2.82c-.13.14-.33.21-.52.2-.21-.02-.39-.13-.49-.31l-1.79-3.02-1.63,2.94c-.11.19-.3.31-.51.33-.2,0-.39-.05-.52-.2l-2.74-2.77,1.64,5.61h7.75s1.53-5.6,1.53-5.6Z"
}));
icons.progressBar = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#f73859",
  d: "M14.02,0H2C.9,0,0,.89,0,1.99v12.02c0,1.1.89,1.99,1.99,1.99h12.02c1.09,0,1.98-.89,1.98-1.99V1.99c0-1.1-.89-1.99-1.98-1.99ZM14.69,14.01c0,.38-.3.68-.67.68H2c-.38,0-.68-.3-.68-.68V1.99c0-.38.3-.68.68-.68h12.02c.38,0,.67.3.67.68v12.02ZM12.7,8.77H3.31c-.74,0-1.35.61-1.35,1.36s.61,1.36,1.35,1.36h9.39c.74,0,1.35-.61,1.35-1.36s-.61-1.36-1.35-1.36ZM12.69,10.79h-5.98v-1.32h5.98c.35,0,.65.3.65.66s-.3.66-.65.66ZM12.7,4.51H3.31c-.74,0-1.35.61-1.35,1.36s.61,1.36,1.35,1.36h9.39c.74,0,1.35-.61,1.35-1.36s-.61-1.36-1.35-1.36ZM12.69,6.53h-3.14v-1.32h3.14c.35,0,.65.3.65.66s-.3.66-.65.66Z"
}));
icons.progressCircle = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#f73859",
  d: "M8,16C3.59,16,0,12.41,0,8h2.03c0,3.29,2.68,5.97,5.97,5.97s5.97-2.68,5.97-5.97-2.68-5.97-5.97-5.97V0c4.41,0,8,3.59,8,8s-3.59,8-8,8ZM4.54,6.59v.94h.53v-.42h.48l-.61,2.31h.58l.63-2.47v-.35h-1.61ZM8.24,9.21c.14-.15.22-.36.22-.64v-.24c0-.27-.06-.49-.18-.64-.12-.15-.29-.23-.51-.23-.07,0-.14.01-.2.03-.07.02-.12.05-.17.09v-.5h.98v-.51h-1.52v1.62h.5c.02-.07.06-.12.11-.16.05-.04.12-.06.2-.06.08,0,.15.03.19.09.05.06.07.15.07.26v.24c0,.11-.03.2-.08.26-.05.06-.12.09-.22.09-.09,0-.15-.03-.21-.09-.05-.06-.08-.14-.09-.24h0s-.53,0-.53,0h0c.02.27.1.48.26.63.15.15.34.22.57.22.27,0,.47-.08.62-.23ZM9.93,7.67c.09-.09.13-.21.13-.37v-.24c0-.16-.04-.28-.13-.37-.09-.09-.21-.13-.38-.13s-.29.04-.38.13c-.09.09-.13.21-.13.37v.24c0,.16.04.28.13.37.09.09.21.13.38.13s.29-.04.38-.13ZM9.78,9.41l1.47-2.82h-.48l-1.47,2.82h.48ZM9.47,7.28v-.21c0-.07.03-.11.09-.11s.09.04.09.11v.21c0,.08-.03.11-.09.11s-.09-.04-.09-.11ZM11.33,9.31c.09-.09.13-.21.13-.37v-.24c0-.16-.04-.28-.13-.37-.09-.09-.21-.13-.38-.13s-.29.04-.38.13c-.09.09-.13.21-.13.37v.24c0,.16.04.28.13.37.09.09.21.13.38.13s.29-.04.38-.13ZM10.87,8.92v-.21c0-.07.03-.11.09-.11s.09.04.09.11v.21c0,.07-.03.11-.09.11s-.09-.04-.09-.11Z"
}));
icons.leaderBoard = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#f73859",
  d: "M15.35,9.6h-4.18c-.13,0-.15-.04-.15-.15v-2.5c0-.36-.23-.59-.59-.59h-4.88c-.36,0-.57.23-.59.59,0,.47,0,.95.02,1.42,0,.13-.04.17-.19.17-1.38-.02-2.76-.02-4.14,0-.47,0-.66.19-.66.66v6.09c0,.34.09.57.42.7h15.19c.3-.13.4-.36.4-.7v-5.05c0-.45-.19-.64-.64-.64ZM4.98,14.76c0,.13-.04.15-.17.15H1.22c-.13,0-.17-.02-.17-.15v-5.01c0-.11.02-.15.17-.15h3.59c.13,0,.17.02.17.15-.02,1.66-.02,3.35,0,5.01ZM9.96,14.76c0,.13-.06.15-.17.15h-3.59c-.15,0-.15-.04-.15-.17v-7.13c-.02-.13.02-.19.17-.19,1.19.02,2.38,0,3.57,0,.13,0,.17.02.17.15-.02,2.4-.02,4.78,0,7.18ZM14.93,14.78c0,.11-.04.13-.15.13h-3.63c-.11,0-.13-.02-.13-.13v-3.97c0-.13.02-.15.13-.15h3.63c.13,0,.15.04.15.15v3.97ZM4.99,1.81c-.04.1-.03.21-.01.31.18,1.09.35,2.2.53,3.29.04.3.19.43.49.43h3.98c.34,0,.49-.13.53-.46.06-.38.12-.77.18-1.15.12-.72.24-1.45.35-2.18.03-.18-.03-.34-.19-.44s-.32-.07-.49.03c-.32.22-.63.44-.96.66-.07.06-.12.06-.19-.01-.3-.29-.59-.59-.87-.88-.22-.22-.46-.21-.66,0l-.89.88c-.06.06-.1.07-.18.01-.32-.22-.66-.46-1-.68-.24-.15-.53-.06-.62.19ZM5.95,2.86c.16.1.32.22.49.32.28.19.44.18.68-.06.27-.27.55-.53.81-.81.06-.06.09-.06.16,0,.27.28.55.56.83.84.19.19.38.22.62.06.16-.12.34-.24.53-.37-.07.46-.13.88-.21,1.33-.04.25-.09.49-.12.74-.01.07-.03.1-.1.1-1.09-.01-2.18-.01-3.28-.01-.04,0-.09.01-.09-.06-.12-.69-.22-1.37-.32-2.06h0ZM7.59.4c.01-.22.21-.4.43-.4s.4.19.4.41c0,.24-.19.41-.41.41-.24,0-.41-.19-.41-.43ZM4.68.83c0-.24.19-.41.41-.41.24,0,.41.19.41.41,0,.24-.19.43-.43.41-.22,0-.4-.19-.4-.41ZM10.49.83c0-.24.19-.41.43-.41.22,0,.4.19.4.43,0,.22-.19.4-.41.4s-.41-.19-.41-.41ZM8.38,12.41h.79v.6h-2.36v-.6h.89v-2.4l-.84.3v-.65l.84-.31h.68v3.06Z"
}));
icons.starTag = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#f73859",
  d: "M15.99,14.84c0,.17-.05.34-.14.49-.25.41-.78.67-1.36.67H1.51C.69,16,.01,15.48.01,14.84v-2.16c.25.35.74.58,1.29.57h.38v1.46h12.46l-1.4-1.32h2.16l.74.7c.24.23.35.48.35.75ZM0,11.63V1.16s0-.09.02-.14C.12.44.76,0,1.51,0h0s12.96.01,12.96.01c.58,0,1.12.26,1.35.67.22.38.19.78-.08,1.11-.03.05-.07.08-.12.12l-1.44,1.31-1.42,1.28-2,1.82.16.15.5.47,1.07.99,3.16,2.97c.23.21.34.46.34.73,0,.17-.05.33-.14.49-.02.03-.05.06-.08.09-.24.35-.73.58-1.27.58H1.51C.69,12.79,0,12.27,0,11.63ZM1.68,11.51h12.47l-2.75-2.57-1.07-1.02-.95-.87c-.27-.26-.38-.56-.33-.85h0c.03-.23.14-.44.35-.62l1.18-1.08,1.4-1.28,1.61-1.46H1.68v9.75ZM6.22,5.82l-.76-1.54-.75,1.54-1.68.25,1.22,1.18-.28,1.68,1.49-.79,1.51.79-.28-1.68,1.22-1.18-1.69-.25Z"
}));
icons.infoCapsule = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#f73859",
  d: "M4.4,13.25h3.8v1.11h-3.8v-1.11ZM4.4,11.91h7.61v-1.12h-7.61v1.12ZM.53,10.58c-.62-1.13-.65-2.21-.07-3.31.16-.28.35-.52.57-.73,1.92-1.86,3.79-3.74,5.7-5.57,1.25-1.23,3.26-1.3,4.57-.16,1.34,1.12,1.56,3.09.52,4.47-.33.42-.73.76-1.11,1.14-.59.59-1.21,1.15-1.79,1.77-.14.14-.31.2-.5.2-1.44,0-2.85,0-4.27,0-1.6,0-2.76.66-3.51,2.04-.02.05-.06.09-.1.16ZM4.89,3.9c1.21,1.17,2.41,2.33,3.6,3.54.17.15.26.12.39-.03.74-.73,1.46-1.44,2.19-2.14h0c.8-.82,1.05-2.01.56-3.01-.47-1.09-1.37-1.62-2.49-1.69-.84.03-1.49.29-2.03.82-.75.72-1.47,1.45-2.2,2.14-.13.13-.16.21,0,.37ZM.56,8.78s0,.05,0,.08c0,.11,0,.38.34.41.12,0,.2-.03.27-.1.1-.11.1-.23.1-.34v-.08c.04-.68.31-1.28.8-1.73l.95-.93.06-.07h0c.08-.07.28-.28.04-.52-.07-.07-.14-.11-.24-.11-.13,0-.24.11-.34.18l-.29.29c-.29.26-.58.55-.84.83-.5.55-.79,1.2-.85,2.06ZM15.96,12.34c0,2.02-1.64,3.66-3.66,3.66H4.11c-2.02,0-3.66-1.64-3.66-3.66s1.64-3.66,3.66-3.66h8.19c2.02,0,3.66,1.64,3.66,3.66ZM15.24,12.34c0-1.62-1.32-2.94-2.94-2.94H4.11c-1.62,0-2.94,1.32-2.94,2.94s1.32,2.94,2.94,2.94h8.19c1.62,0,2.94-1.32,2.94-2.94Z"
}));
icons.quickSummary = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 16 16"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#f73859",
  d: "M4.56,6.65l-1.55-1.54.84-.84.71.71,1.99-2,.84.84-2.83,2.83ZM3.01,9.77h9.98v-1.46H3.01v1.46ZM3.01,13.01h4.99v-1.46H3.01v1.46ZM15.99,1.98v12.03c0,1.1-.89,1.99-1.98,1.99H1.99C.9,16,0,15.11,0,14.01V1.98C0,.89.9,0,1.99,0h12.02c1.09,0,1.98.89,1.98,1.99ZM14.68,1.98c0-.38-.29-.68-.67-.68H1.99c-.38,0-.68.3-.68.68v12.03c0,.38.3.68.68.68h12.02c.37,0,.67-.3.67-.68V1.98Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/info-capsule.js":
/*!*****************************!*\
  !*** ./src/info-capsule.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   edit: () => (/* binding */ edit),
/* harmony export */   save: () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





const edit = ({
  clientId,
  attributes,
  setAttributes
}) => {
  const {
    id
  } = attributes;

  // Set unique ID through block index.
  let clientIdSliced = clientId.slice(clientId.lastIndexOf('-') + 1);
  setAttributes({
    id: 'wpas-bnr-' + clientIdSliced
  });

  // Defined Block Props.
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  const wpasBnrDynamicStyles = `#${id} .asdfads {
        overflow: auto;
    }`;
  return [(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cross Rating Block Settings'),
    icon: 'admin-generic',
    initialOpen: true,
    className: 'frhd__control frhd__control-query'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Heading Sample :")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpasBnrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: 'wpas-banner-ad-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Banner Here..")))];
};
const save = ({
  attributes
}) => {
  const {
    id
  } = attributes;
  const wpasBnrDynamicStyles = `#${id} .asdfads {
        overflow: auto;
    }`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpasBnrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: 'wpas-banner-ad-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Banner Here..")));
};

/***/ }),

/***/ "./src/leader-board.js":
/*!*****************************!*\
  !*** ./src/leader-board.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   edit: () => (/* binding */ edit),
/* harmony export */   save: () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





const edit = ({
  clientId,
  attributes,
  setAttributes
}) => {
  const {
    id
  } = attributes;

  // Set unique ID through block index.
  let clientIdSliced = clientId.slice(clientId.lastIndexOf('-') + 1);
  setAttributes({
    id: 'wpas-bnr-' + clientIdSliced
  });

  // Defined Block Props.
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  const wpasBnrDynamicStyles = `#${id} .asdfads {
        overflow: auto;
    }`;
  return [(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cross Rating Block Settings'),
    icon: 'admin-generic',
    initialOpen: true,
    className: 'frhd__control frhd__control-query'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Heading Sample :")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpasBnrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: 'wpas-banner-ad-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Banner Here..")))];
};
const save = ({
  attributes
}) => {
  const {
    id
  } = attributes;
  const wpasBnrDynamicStyles = `#${id} .asdfads {
        overflow: auto;
    }`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpasBnrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: 'wpas-banner-ad-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Banner Here..")));
};

/***/ }),

/***/ "./src/notice-box.js":
/*!***************************!*\
  !*** ./src/notice-box.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   edit: () => (/* binding */ edit),
/* harmony export */   save: () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





const edit = ({
  clientId,
  attributes,
  setAttributes
}) => {
  const {
    id
  } = attributes;

  // Set unique ID through block index.
  let clientIdSliced = clientId.slice(clientId.lastIndexOf('-') + 1);
  setAttributes({
    id: 'wpas-bnr-' + clientIdSliced
  });

  // Defined Block Props.
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  const wpasBnrDynamicStyles = `#${id} .asdfads {
        overflow: auto;
    }`;
  return [(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cross Rating Block Settings'),
    icon: 'admin-generic',
    initialOpen: true,
    className: 'frhd__control frhd__control-query'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Heading Sample :")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpasBnrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: 'wpas-banner-ad-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Banner Here..")))];
};
const save = ({
  attributes
}) => {
  const {
    id
  } = attributes;
  const wpasBnrDynamicStyles = `#${id} .asdfads {
        overflow: auto;
    }`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpasBnrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: 'wpas-banner-ad-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Banner Here..")));
};

/***/ }),

/***/ "./src/pricing-table.js":
/*!******************************!*\
  !*** ./src/pricing-table.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   edit: () => (/* binding */ edit),
/* harmony export */   save: () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





const edit = ({
  clientId,
  attributes,
  setAttributes
}) => {
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
  setAttributes({
    id: 'wpascr-' + clientIdSliced
  });

  // Defined Block Props.
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  const ALLOWED_BLOCKS = ['core/group', 'core/heading', 'core/columns', 'core/image', 'core/list', 'core/list-item', 'core/paragraph', 'core/buttons', 'core/button'];

  // Reference: https://developer.wordpress.org/block-editor/reference-guides/core-blocks/
  const TEMPLATE = [['core/group', {
    tagName: 'section',
    className: 'wpas-pt-main'
  }, [['core/columns', {
    verticalAlignment: 'center',
    className: 'wpas-pt-column-wrap'
  }, [['core/column', {
    width: '33.333%'
  }, [['core/group', {
    className: 'wpas-pt-column-head'
  }, [['core/heading', {
    content: 'Basic Survival',
    level: 4,
    textAlign: 'center'
  }], ['core/paragraph', {
    content: 'Regular Price <s>$11.99</s>/m',
    align: 'center'
  }], ['core/paragraph', {
    content: '$<strong>199</strong>/mo',
    align: 'center',
    className: 'wpas-pt-price'
  }], ['core/paragraph', {
    content: '100 Websites Maximum',
    align: 'center'
  }], ['core/paragraph', {
    content: '<span>Small Website</span>',
    align: 'center',
    className: 'wpas-pt-ribbon'
  }]]], ['core/heading', {
    content: 'Top Features',
    level: 5,
    textAlign: 'center'
  }], ['core/list', {
    className: 'wpas-pti-list'
  }, [['core/list-item', {
    content: '<strong>Standard</strong> Performance'
  }], ['core/list-item', {
    content: '<strong>100</strong> Websites'
  }], ['core/list-item', {
    content: '<strong>100 GB</strong> SSD Storage'
  }], ['core/list-item', {
    content: '<strong>Weekly</strong> Backups'
  }], ['core/list-item', {
    content: '<strong>Unlimited</strong> Free SSL'
  }], ['core/list-item', {
    content: '<strong>Free</strong> CDN'
  }], ['core/list-item', {
    content: '<strong>Dedicated</strong> IP Address'
  }]]], ['core/heading', {
    content: 'Security',
    level: 5,
    textAlign: 'center'
  }], ['core/list', {
    className: 'wpas-pti-list'
  }, [['core/list-item', {
    content: '<strong>Standard</strong> DDoS Protection'
  }], ['core/list-item', {
    content: '<strong>Web Application</strong> Firewall'
  }], ['core/list-item', {
    content: '<strong>Malware</strong> Scanner'
  }]]], ['core/heading', {
    content: 'Service and Support',
    level: 5,
    textAlign: 'center'
  }], ['core/list', {
    className: 'wpas-pti-list'
  }, [['core/list-item', {
    content: '<strong>24/7</strong> Customer Support'
  }], ['core/list-item', {
    content: '<strong>Priority</strong> Support'
  }]]], ['core/buttons', {}, [['core/button', {
    text: 'Order Now'
  }]]]]], ['core/column', {
    width: '33.333%'
  }, [['core/group', {
    className: 'wpas-pt-column-head'
  }, [['core/heading', {
    content: 'Rocketship Premium',
    level: 4,
    textAlign: 'center'
  }], ['core/paragraph', {
    content: 'Regular Price <s>$11.99</s>/m',
    align: 'center'
  }], ['core/paragraph', {
    content: '$<strong>299</strong>/mo',
    align: 'center',
    className: 'wpas-pt-price'
  }], ['core/paragraph', {
    content: '200 Websites Maximum',
    align: 'center'
  }], ['core/paragraph', {
    content: '<span>Mid-Size Website</span>',
    align: 'center',
    className: 'wpas-pt-ribbon'
  }]]], ['core/heading', {
    content: 'Top Features',
    level: 5,
    textAlign: 'center'
  }], ['core/list', {
    className: 'wpas-pti-list'
  }, [['core/list-item', {
    content: '<strong>Standard</strong> Performance'
  }], ['core/list-item', {
    content: '<strong>100</strong> Websites'
  }], ['core/list-item', {
    content: '<strong>100 GB</strong> SSD Storage'
  }], ['core/list-item', {
    content: '<strong>Weekly</strong> Backups'
  }], ['core/list-item', {
    content: '<strong>Unlimited</strong> Free SSL'
  }], ['core/list-item', {
    content: '<strong>Free</strong> CDN'
  }], ['core/list-item', {
    content: '<strong>Dedicated</strong> IP Address'
  }]]], ['core/heading', {
    content: 'Security',
    level: 5,
    textAlign: 'center'
  }], ['core/list', {
    className: 'wpas-pti-list'
  }, [['core/list-item', {
    content: '<strong>Standard</strong> DDoS Protection'
  }], ['core/list-item', {
    content: '<strong>Web Application</strong> Firewall'
  }], ['core/list-item', {
    content: '<strong>Malware</strong> Scanner'
  }]]], ['core/heading', {
    content: 'Service and Support',
    level: 5,
    textAlign: 'center'
  }], ['core/list', {
    className: 'wpas-pti-list'
  }, [['core/list-item', {
    content: '<strong>24/7</strong> Customer Support'
  }], ['core/list-item', {
    content: '<strong>Priority</strong> Support'
  }]]], ['core/buttons', {}, [['core/button', {
    text: 'Order Now'
  }]]]]], ['core/column', {
    width: '33.333%'
  }, [['core/group', {
    className: 'wpas-pt-column-head'
  }, [['core/heading', {
    content: 'Mission Professional',
    level: 4,
    textAlign: 'center'
  }], ['core/paragraph', {
    content: 'Regular Price <s>$11.99</s>/m',
    align: 'center'
  }], ['core/paragraph', {
    content: '$<strong>399</strong>/mo',
    align: 'center',
    className: 'wpas-pt-price'
  }], ['core/paragraph', {
    content: '300 Websites Maximum',
    align: 'center'
  }], ['core/paragraph', {
    content: '<span>Large or Ecommerce</span>',
    align: 'center',
    className: 'wpas-pt-ribbon'
  }]]], ['core/heading', {
    content: 'Top Features',
    level: 5,
    textAlign: 'center'
  }], ['core/list', {
    className: 'wpas-pti-list'
  }, [['core/list-item', {
    content: '<strong>Standard</strong> Performance'
  }], ['core/list-item', {
    content: '<strong>100</strong> Websites'
  }], ['core/list-item', {
    content: '<strong>100 GB</strong> SSD Storage'
  }], ['core/list-item', {
    content: '<strong>Weekly</strong> Backups'
  }], ['core/list-item', {
    content: '<strong>Unlimited</strong> Free SSL'
  }], ['core/list-item', {
    content: '<strong>Free</strong> CDN'
  }], ['core/list-item', {
    content: '<strong>Dedicated</strong> IP Address'
  }]]], ['core/heading', {
    content: 'Security',
    level: 5,
    textAlign: 'center'
  }], ['core/list', {
    className: 'wpas-pti-list'
  }, [['core/list-item', {
    content: '<strong>Standard</strong> DDoS Protection'
  }], ['core/list-item', {
    content: '<strong>Web Application</strong> Firewall'
  }], ['core/list-item', {
    content: '<strong>Malware</strong> Scanner'
  }]]], ['core/heading', {
    content: 'Service and Support',
    level: 5,
    textAlign: 'center'
  }], ['core/list', {
    className: 'wpas-pti-list'
  }, [['core/list-item', {
    content: '<strong>24/7</strong> Customer Support'
  }], ['core/list-item', {
    content: '<strong>Priority</strong> Support'
  }]]], ['core/buttons', {}, [['core/button', {
    text: 'Order Now'
  }]]]]]]]]]];
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
  return [(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cross Rating Block Settings'),
    icon: 'admin-generic',
    initialOpen: true,
    className: 'frhd__control frhd__control-query'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Brand Color :"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: crBrandColor,
    onChange: colorValue => setAttributes({
      crBrandColor: colorValue
    }),
    clearable: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Background Color :"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: crbgColor,
    onChange: colorValue => setAttributes({
      crbgColor: colorValue
    }),
    clearable: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Check Icon Color :"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: crCheckIconColor,
    onChange: colorValue => setAttributes({
      crCheckIconColor: colorValue
    }),
    clearable: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Check Icon Size :'),
    onChange: newValue => setAttributes({
      crCheckIconSize: newValue
    }),
    isUnitSelectTabbable: true,
    value: crCheckIconSize,
    className: 'frhd__component frhd__component-width-90'
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Cross Icon Color :"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: crCrossIconColor,
    onChange: colorValue => setAttributes({
      crCrossIconColor: colorValue
    }),
    clearable: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cross Icon Size :'),
    onChange: newValue => setAttributes({
      crCrossIconSize: newValue
    }),
    isUnitSelectTabbable: true,
    value: crCrossIconSize,
    className: 'frhd__component frhd__component-width-90'
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Stars Color :"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: crStarsColor,
    onChange: colorValue => setAttributes({
      crStarsColor: colorValue
    }),
    clearable: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Break Point (Laptop):'),
    onChange: newValue => setAttributes({
      crBreakPointLaptop: newValue
    }),
    isUnitSelectTabbable: true,
    value: crBreakPointLaptop,
    className: 'frhd__component frhd__component-width-90'
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Break Point (Tablet):'),
    onChange: newValue => setAttributes({
      crBreakPointTablet: newValue
    }),
    isUnitSelectTabbable: true,
    value: crBreakPointTablet,
    className: 'frhd__component frhd__component-width-90'
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Break Point (Mobile):'),
    onChange: newValue => setAttributes({
      crBreakPointMobile: newValue
    }),
    isUnitSelectTabbable: true,
    value: crBreakPointMobile,
    className: 'frhd__component frhd__component-width-90'
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: crSidebarExist ? 'Body Has Sidebar Width :' : 'Body Has Full Width :',
    checked: crSidebarExist,
    onChange: newValue => setAttributes({
      crSidebarExist: newValue
    }),
    className: 'frhd__component-diff'
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpascrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: 'wpas-review-info-box-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE
  })))];
};
const save = ({
  attributes
}) => {
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpascrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save(),
    id: id,
    className: 'wpas-review-info-box-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null))));
};

/***/ }),

/***/ "./src/progress-bar.js":
/*!*****************************!*\
  !*** ./src/progress-bar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   edit: () => (/* binding */ edit),
/* harmony export */   save: () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





const edit = ({
  clientId,
  attributes,
  setAttributes
}) => {
  const {
    id
  } = attributes;

  // Set unique ID through block index.
  let clientIdSliced = clientId.slice(clientId.lastIndexOf('-') + 1);
  setAttributes({
    id: 'wpas-bnr-' + clientIdSliced
  });

  // Defined Block Props.
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  const wpasBnrDynamicStyles = `#${id} .asdfads {
        overflow: auto;
    }`;
  return [(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cross Rating Block Settings'),
    icon: 'admin-generic',
    initialOpen: true,
    className: 'frhd__control frhd__control-query'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Heading Sample :")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpasBnrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: 'wpas-banner-ad-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Banner Here..")))];
};
const save = ({
  attributes
}) => {
  const {
    id
  } = attributes;
  const wpasBnrDynamicStyles = `#${id} .asdfads {
        overflow: auto;
    }`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpasBnrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: 'wpas-banner-ad-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Banner Here..")));
};

/***/ }),

/***/ "./src/progress-circle.js":
/*!********************************!*\
  !*** ./src/progress-circle.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   edit: () => (/* binding */ edit),
/* harmony export */   save: () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





const edit = ({
  clientId,
  attributes,
  setAttributes
}) => {
  const {
    id
  } = attributes;

  // Set unique ID through block index.
  let clientIdSliced = clientId.slice(clientId.lastIndexOf('-') + 1);
  setAttributes({
    id: 'wpas-bnr-' + clientIdSliced
  });

  // Defined Block Props.
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  const wpasBnrDynamicStyles = `#${id} .asdfads {
        overflow: auto;
    }`;
  return [(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cross Rating Block Settings'),
    icon: 'admin-generic',
    initialOpen: true,
    className: 'frhd__control frhd__control-query'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Heading Sample :")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpasBnrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: 'wpas-banner-ad-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Banner Here..")))];
};
const save = ({
  attributes
}) => {
  const {
    id
  } = attributes;
  const wpasBnrDynamicStyles = `#${id} .asdfads {
        overflow: auto;
    }`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpasBnrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: 'wpas-banner-ad-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Banner Here..")));
};

/***/ }),

/***/ "./src/pros-cons.js":
/*!**************************!*\
  !*** ./src/pros-cons.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   edit: () => (/* binding */ edit),
/* harmony export */   save: () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





const edit = ({
  clientId,
  attributes,
  setAttributes
}) => {
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
  setAttributes({
    id: 'wpaspc-' + clientIdSliced
  });

  // Defined Block Props.
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  const ALLOWED_BLOCKS = ['core/group', 'core/columns', 'core/list', 'core/list-item', 'core/paragraph'];

  // Reference: https://developer.wordpress.org/block-editor/reference-guides/core-blocks/
  const TEMPLATE = [['core/group', {
    tagName: 'section'
  }, [['core/columns', {
    verticalAlignment: 'center',
    className: 'wpas-pc-columns'
  }, [['core/column', {
    width: '50%',
    className: 'wpas-pc-column'
  }, [['core/paragraph', {
    content: '<strong>PROS</strong>',
    align: 'center',
    style: {
      typography: {
        fontSize: '20px',
        lineHeight: '1'
      }
    }
  }], ['core/list', {
    className: 'wpas-pc-pros-list'
  }, [['core/list-item', {
    content: 'Lorem ipsum dolor sit amet consectetur'
  }], ['core/list-item', {
    content: 'Adipiscing elit hendrerit augue iaculis rutrum'
  }], ['core/list-item', {
    content: 'Aliquet in dictum scelerisque porttitor'
  }], ['core/list-item', {
    content: 'Ornare sociis massa vitae blandit dictum'
  }], ['core/list-item', {
    content: 'Proin tortor purus nostra habitant'
  }]]]]], ['core/column', {
    width: '50%',
    className: 'wpas-pc-column'
  }, [['core/paragraph', {
    content: '<strong>CONS</strong>',
    align: 'center',
    style: {
      typography: {
        fontSize: '20px',
        lineHeight: '1'
      }
    }
  }], ['core/list', {
    className: 'wpas-pc-cons-list'
  }, [['core/list-item', {
    content: 'Lorem ipsum dolor sit amet consectetur'
  }], ['core/list-item', {
    content: 'Adipiscing elit hendrerit augue iaculis rutrum'
  }], ['core/list-item', {
    content: 'Aliquet in dictum scelerisque porttitor'
  }], ['core/list-item', {
    content: 'Ornare sociis massa vitae blandit dictum'
  }], ['core/list-item', {
    content: 'Proin tortor purus nostra habitant'
  }]]]]]]]]]];
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
  return [(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cross Rating Block Settings'),
    icon: 'admin-generic',
    initialOpen: true,
    className: 'frhd__control frhd__control-query'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Max Width :'),
    onChange: newValue => setAttributes({
      maxWidth: newValue
    }),
    isUnitSelectTabbable: true,
    value: maxWidth,
    className: 'frhd__component frhd__component-width-90'
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Brand Color :"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: pcBrandColor,
    onChange: colorValue => setAttributes({
      pcBrandColor: colorValue
    }),
    clearable: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Check Icon Color :"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: checkIconColor,
    onChange: colorValue => setAttributes({
      checkIconColor: colorValue
    }),
    clearable: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Cross Icon Color :"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: crossIconColor,
    onChange: colorValue => setAttributes({
      crossIconColor: colorValue
    }),
    clearable: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('List Item Gap :'),
    onChange: newValue => setAttributes({
      itemGap: newValue
    }),
    isUnitSelectTabbable: true,
    value: itemGap,
    className: 'frhd__component frhd__component-width-90'
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: itemDivider ? 'Item Divider On :' : 'Item Divider Off :',
    checked: itemDivider,
    onChange: newValue => setAttributes({
      itemDivider: newValue
    }),
    className: 'frhd__component-diff'
  }), itemDivider && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Divider Color :"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: dividerColor,
    onChange: colorValue => setAttributes({
      dividerColor: colorValue
    }),
    clearable: false
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Responsive Breakpoint :'),
    onChange: newValue => setAttributes({
      respBreakPoint: newValue
    }),
    isUnitSelectTabbable: true,
    value: respBreakPoint,
    className: 'frhd__component frhd__component-width-90'
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpaspcDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: 'wpas-review-pros-cons-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE
  })))];
};
const save = ({
  attributes
}) => {
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpaspcDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save(),
    id: id,
    className: 'wpas-review-pros-cons-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null))));
};

/***/ }),

/***/ "./src/quick-summary.js":
/*!******************************!*\
  !*** ./src/quick-summary.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   edit: () => (/* binding */ edit),
/* harmony export */   save: () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





const edit = ({
  clientId,
  attributes,
  setAttributes
}) => {
  const {
    id
  } = attributes;

  // Set unique ID through block index.
  let clientIdSliced = clientId.slice(clientId.lastIndexOf('-') + 1);
  setAttributes({
    id: 'wpas-bnr-' + clientIdSliced
  });

  // Defined Block Props.
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  const wpasBnrDynamicStyles = `#${id} .asdfads {
        overflow: auto;
    }`;
  return [(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cross Rating Block Settings'),
    icon: 'admin-generic',
    initialOpen: true,
    className: 'frhd__control frhd__control-query'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Heading Sample :")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpasBnrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: 'wpas-banner-ad-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Banner Here..")))];
};
const save = ({
  attributes
}) => {
  const {
    id
  } = attributes;
  const wpasBnrDynamicStyles = `#${id} .asdfads {
        overflow: auto;
    }`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpasBnrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: 'wpas-banner-ad-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Banner Here..")));
};

/***/ }),

/***/ "./src/review-info-box.js":
/*!********************************!*\
  !*** ./src/review-info-box.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   edit: () => (/* binding */ edit),
/* harmony export */   save: () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





const edit = ({
  clientId,
  attributes,
  setAttributes
}) => {
  const {
    id,
    infoBrandColor,
    infoShadowColor,
    infoBreakPoint
  } = attributes;

  // Set unique ID through block index.
  let clientIdSliced = clientId.slice(clientId.lastIndexOf('-') + 1);
  setAttributes({
    id: 'wpasib-' + clientIdSliced
  });

  // Defined Block Props.
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  const ALLOWED_BLOCKS = ['core/group', 'core/heading', 'core/columns', 'core/image', 'core/list', 'core/list-item', 'core/paragraph', 'core/buttons', 'core/button'];

  // Reference: https://developer.wordpress.org/block-editor/reference-guides/core-blocks/
  const TEMPLATE = [['core/group', {
    tagName: 'section'
  }, [['core/heading', {
    content: 'How do we rate 🏅',
    level: 2,
    placeholder: 'Write a heading for the info box..',
    textAlign: 'left',
    className: 'wpas-info-heading'
  }], ['core/paragraph', {
    content: 'We demystify our editorial process, providing a transparent look into the meticulous criteria that shape our DSLR camera ratings. From image quality and performance benchmarks to ergonomic design and innovative features, discover the key elements that define photographic excellence.',
    className: 'wpas-info-subheading'
  }], ['core/columns', {
    verticalAlignment: 'center',
    className: 'wpas-info-columns'
  }, [['core/column', {
    width: '33.333%'
  }, [['core/image', {
    url: __webpack_require__(/*! ../public/img/1.png */ "./public/img/1.png"),
    align: 'center'
  }], ['core/heading', {
    content: 'Research and Analysis',
    level: 4,
    textAlign: 'center'
  }], ['core/paragraph', {
    content: 'Our team starts by conducting thorough research on the latest DSLR camera models, staying abreast of technological advancements, and understanding industry trends.',
    align: 'center'
  }]]], ['core/column', {
    width: '33.333%'
  }, [['core/image', {
    url: __webpack_require__(/*! ../public/img/2.png */ "./public/img/2.png"),
    align: 'center'
  }], ['core/heading', {
    content: 'Performance Evaluation',
    level: 4,
    textAlign: 'center'
  }], ['core/paragraph', {
    content: 'Cameras undergo extensive performance testing, evaluating factors such as image quality, autofocus speed, low-light capabilities, and overall shooting performance.',
    align: 'center'
  }]]], ['core/column', {
    width: '33.333%'
  }, [['core/image', {
    url: __webpack_require__(/*! ../public/img/3.png */ "./public/img/3.png"),
    align: 'center'
  }], ['core/heading', {
    content: 'Feature Assessment',
    level: 4,
    textAlign: 'center'
  }], ['core/paragraph', {
    content: 'We scrutinize the features offered by each camera, examining the innovation, versatility, and practicality of functionalities that cater to both novice photographers and seasoned professionals.',
    align: 'center'
  }]]]]],
  // Column - 2.
  ['core/columns', {
    verticalAlignment: 'center',
    className: 'wpas-info-columns'
  }, [['core/column', {
    width: '33.333%'
  }, [['core/image', {
    url: __webpack_require__(/*! ../public/img/4.png */ "./public/img/4.png"),
    align: 'center'
  }], ['core/heading', {
    content: 'Customer Feedback',
    level: 4,
    textAlign: 'center'
  }], ['core/paragraph', {
    content: 'We incorporate user reviews and feedback to understand real-world experiences, incorporating the perspectives of photographers who have used the cameras extensively.',
    align: 'center'
  }]]], ['core/column', {
    width: '33.333%'
  }, [['core/image', {
    url: __webpack_require__(/*! ../public/img/5.png */ "./public/img/5.png"),
    align: 'center'
  }], ['core/heading', {
    content: 'Value for Money',
    level: 4,
    textAlign: 'center'
  }], ['core/paragraph', {
    content: 'We evaluate the overall value proposition, considering the camera\'s price point in relation to the features and performance it offers, ensuring that consumers get the best bang for their buck.',
    align: 'center'
  }]]], ['core/column', {
    width: '33.333%'
  }, [['core/image', {
    url: __webpack_require__(/*! ../public/img/6.png */ "./public/img/6.png"),
    align: 'center'
  }], ['core/heading', {
    content: 'Final Rating',
    level: 4,
    textAlign: 'center'
  }], ['core/paragraph', {
    content: 'After a meticulous examination of all aspects, we assign a comprehensive rating, reflecting the camera’s overall performance, features, and suitability for different user needs.',
    align: 'center'
  }]]]]]]]];
  const wpascrDynamicStyles = `#${id} .wpas-info-columns .wp-block-column {
        border-bottom: 5px solid ${infoBrandColor};
        box-shadow: ${infoShadowColor} 0px 2px 5px -1px, ${infoShadowColor} 0px 1px 3px -1px;
    }
    @media (max-width: ${infoBreakPoint}) {
        #${id} .wpas-info-columns {
            flex-wrap: wrap !important;
        }
    }`;
  return [(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cross Rating Block Settings'),
    icon: 'admin-generic',
    initialOpen: true,
    className: 'frhd__control frhd__control-query'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Brand Color :"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: infoBrandColor,
    onChange: colorValue => setAttributes({
      infoBrandColor: colorValue
    }),
    clearable: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Shadow Color :"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: infoShadowColor,
    onChange: colorValue => setAttributes({
      infoShadowColor: colorValue
    }),
    clearable: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Break Point :'),
    onChange: newValue => setAttributes({
      infoBreakPoint: newValue
    }),
    isUnitSelectTabbable: true,
    value: infoBreakPoint,
    className: 'frhd__component frhd__component-width-90'
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpascrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: 'wpas-review-info-box-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE
  })))];
};
const save = ({
  attributes
}) => {
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpascrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save(),
    id: id,
    className: 'wpas-review-info-box-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null))));
};

/***/ }),

/***/ "./src/review-summary.js":
/*!*******************************!*\
  !*** ./src/review-summary.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   edit: () => (/* binding */ edit),
/* harmony export */   save: () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





const edit = ({
  clientId,
  attributes,
  setAttributes
}) => {
  const {
    id,
    rsBrandColor,
    rsRowGap,
    rsSidebarExist
  } = attributes;

  // Set unique ID through block index.
  let clientIdSliced = clientId.slice(clientId.lastIndexOf('-') + 1);
  setAttributes({
    id: 'wpas-rst-' + clientIdSliced
  });

  // Defined Block Props.
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  const ALLOWED_BLOCKS = ['core/group', 'core/columns', 'core/image', 'core/list', 'core/list-item', 'core/paragraph', 'core/buttons', 'core/button'];
  const TEMPLATE = [['core/group', {
    tagName: 'section'
  }, [['core/paragraph', {
    content: 'Last updated: January 2024',
    className: 'wpas-rst-date'
  }], ['core/columns', {
    verticalAlignment: 'center',
    className: 'wpas-rst-item'
  }, [['core/column', {
    width: '15%'
  }, [['core/paragraph', {
    content: '<strong>1<sup>st</sup></strong>',
    className: 'wpas-rst-index'
  }]]], ['core/column', {
    width: '35%'
  }, [['core/image', {
    url: __webpack_require__(/*! ../admin/img/canon.png */ "./admin/img/canon.png"),
    className: 'wpas-rst-item-logo',
    height: '100px'
  }], ['core/paragraph', {
    content: '<a href="https://global.canon" data-type="link" data-id="https://global.canon" target="_blank" rel="noreferrer noopener">www.global.canon</a>',
    className: 'wpas-rst-url'
  }], ['core/spacer', {
    height: '20px'
  }], ['core/paragraph', {
    content: '<strong>Features:</strong>',
    className: 'wpas-rst-list-title'
  }], ['core/list', {
    className: 'wpas-rst-list'
  }, [['core/list-item', {
    content: '<a href="#" rel="nofollow">Lorem ipsum dolor sit amet consectetur</a>'
  }], ['core/list-item', {
    content: 'Adipiscing elit hendrerit augue iaculis'
  }], ['core/list-item', {
    content: 'Aliquet in dictum scelerisque porttitor'
  }], ['core/list-item', {
    content: 'Ornare sociis massa vitae blandit dictum'
  }]]]]], ['core/column', {
    width: '20%'
  }, [['wpas-blocks/star-rating', {
    showSRresult: false,
    srHighlightRange: 98,
    srStarsSize: 26,
    showSRresult: true
  }], ['core/paragraph', {
    content: 'Based on <a href="#">(800+)</a>'
  }], ['core/buttons', {}, [['core/button', {
    className: 'is-style-outline',
    text: 'Read Review',
    url: '#',
    rel: 'nofollow',
    style: {
      typography: {
        fontSize: '18px'
      }
    }
  }], ['core/button', {
    text: 'Visit Site',
    url: '#',
    rel: 'nofollow',
    style: {
      typography: {
        fontSize: '18px'
      }
    }
  }]]]]], ['core/column', {
    width: '30%'
  }, [['core/image', {
    url: __webpack_require__(/*! ../admin/img/product-image.png */ "./admin/img/product-image.png"),
    align: 'center'
  }]]]]],
  // Column -2
  ['core/columns', {
    verticalAlignment: 'center',
    className: 'wpas-rst-item'
  }, [['core/column', {
    width: '15%'
  }, [['core/paragraph', {
    content: '<strong>2<sup>nd</sup></strong>',
    className: 'wpas-rst-index'
  }]]], ['core/column', {
    width: '35%'
  }, [['core/image', {
    url: __webpack_require__(/*! ../admin/img/nikon.png */ "./admin/img/nikon.png"),
    className: 'wpas-rst-item-logo',
    height: '100px'
  }], ['core/paragraph', {
    content: '<a href="https://nikon.com" data-type="link" data-id="https://nikon.com" target="_blank" rel="noreferrer noopener">www.nikon.com</a>',
    className: 'wpas-rst-url'
  }], ['core/spacer', {
    height: '20px'
  }], ['core/paragraph', {
    content: '<strong>Features:</strong>',
    className: 'wpas-rst-list-title'
  }], ['core/list', {
    className: 'wpas-rst-list'
  }, [['core/list-item', {
    content: '<a href="#" rel="nofollow">Lorem ipsum dolor sit amet consectetur</a>'
  }], ['core/list-item', {
    content: 'Adipiscing elit hendrerit augue iaculis'
  }], ['core/list-item', {
    content: 'Aliquet in dictum scelerisque porttitor'
  }], ['core/list-item', {
    content: 'Ornare sociis massa vitae blandit dictum'
  }]]]]], ['core/column', {
    width: '20%'
  }, [['wpas-blocks/star-rating', {
    showSRresult: false,
    srHighlightRange: 90,
    srStarsSize: 26,
    showSRresult: true
  }], ['core/paragraph', {
    content: 'Based on <a href="#">(600+)</a>'
  }], ['core/buttons', {}, [['core/button', {
    className: 'is-style-outline',
    text: 'Read Review',
    url: '#',
    rel: 'nofollow',
    style: {
      typography: {
        fontSize: '18px'
      }
    }
  }], ['core/button', {
    text: 'Visit Site',
    url: '#',
    rel: 'nofollow',
    style: {
      typography: {
        fontSize: '18px'
      }
    }
  }]]]]], ['core/column', {
    width: '30%'
  }, [['core/image', {
    url: __webpack_require__(/*! ../admin/img/product-image.png */ "./admin/img/product-image.png"),
    align: 'center'
  }]]]]],
  // Column -3
  ['core/columns', {
    verticalAlignment: 'center',
    className: 'wpas-rst-item'
  }, [['core/column', {
    width: '15%'
  }, [['core/paragraph', {
    content: '<strong>3<sup>rd</sup></strong>',
    className: 'wpas-rst-index'
  }]]], ['core/column', {
    width: '35%'
  }, [['core/image', {
    url: __webpack_require__(/*! ../admin/img/sony.png */ "./admin/img/sony.png"),
    className: 'wpas-rst-item-logo',
    height: '100px'
  }], ['core/paragraph', {
    content: '<a href="https://sony.com" data-type="link" data-id="https://sony.com" target="_blank" rel="noreferrer noopener">www.sony.com</a>',
    className: 'wpas-rst-url'
  }], ['core/spacer', {
    height: '20px'
  }], ['core/paragraph', {
    content: '<strong>Features:</strong>',
    className: 'wpas-rst-list-title'
  }], ['core/list', {
    className: 'wpas-rst-list'
  }, [['core/list-item', {
    content: '<a href="#" rel="nofollow">Lorem ipsum dolor sit amet consectetur</a>'
  }], ['core/list-item', {
    content: 'Adipiscing elit hendrerit augue iaculis'
  }], ['core/list-item', {
    content: 'Aliquet in dictum scelerisque porttitor'
  }], ['core/list-item', {
    content: 'Ornare sociis massa vitae blandit dictum'
  }]]]]], ['core/column', {
    width: '20%'
  }, [['wpas-blocks/star-rating', {
    showSRresult: false,
    srHighlightRange: 80,
    srStarsSize: 26,
    showSRresult: true
  }], ['core/paragraph', {
    content: 'Based on <a href="#">(350+)</a>'
  }], ['core/buttons', {}, [['core/button', {
    className: 'is-style-outline',
    text: 'Read Review',
    url: '#',
    rel: 'nofollow',
    style: {
      typography: {
        fontSize: '18px'
      }
    }
  }], ['core/button', {
    text: 'Visit Site',
    url: '#',
    rel: 'nofollow',
    style: {
      typography: {
        fontSize: '18px'
      }
    }
  }]]]]], ['core/column', {
    width: '30%'
  }, [['core/image', {
    url: __webpack_require__(/*! ../admin/img/product-image.png */ "./admin/img/product-image.png"),
    align: 'center'
  }]]]]],
  // Column -4
  ['core/columns', {
    verticalAlignment: 'center',
    className: 'wpas-rst-item'
  }, [['core/column', {
    width: '15%'
  }, [['core/paragraph', {
    content: '<strong>4<sup>th</sup></strong>',
    className: 'wpas-rst-index'
  }]]], ['core/column', {
    width: '35%'
  }, [['core/image', {
    url: __webpack_require__(/*! ../admin/img/panasonic.png */ "./admin/img/panasonic.png"),
    className: 'wpas-rst-item-logo',
    height: '100px'
  }], ['core/paragraph', {
    content: '<a href="https://panasonic.com" data-type="link" data-id="https://panasonic.com" target="_blank" rel="noreferrer noopener">www.panasonic.com</a>',
    className: 'wpas-rst-url'
  }], ['core/spacer', {
    height: '20px'
  }], ['core/paragraph', {
    content: '<strong>Features:</strong>',
    className: 'wpas-rst-list-title'
  }], ['core/list', {
    className: 'wpas-rst-list'
  }, [['core/list-item', {
    content: '<a href="#" rel="nofollow">Lorem ipsum dolor sit amet consectetur</a>'
  }], ['core/list-item', {
    content: 'Adipiscing elit hendrerit augue iaculis'
  }], ['core/list-item', {
    content: 'Aliquet in dictum scelerisque porttitor'
  }], ['core/list-item', {
    content: 'Ornare sociis massa vitae blandit dictum'
  }]]]]], ['core/column', {
    width: '20%'
  }, [['wpas-blocks/star-rating', {
    showSRresult: false,
    srHighlightRange: 80,
    srStarsSize: 26,
    showSRresult: true
  }], ['core/paragraph', {
    content: 'Based on <a href="#">(320+)</a>'
  }], ['core/buttons', {}, [['core/button', {
    className: 'is-style-outline',
    text: 'Read Review',
    url: '#',
    rel: 'nofollow',
    style: {
      typography: {
        fontSize: '18px'
      }
    }
  }], ['core/button', {
    text: 'Visit Site',
    url: '#',
    rel: 'nofollow',
    style: {
      typography: {
        fontSize: '18px'
      }
    }
  }]]]]], ['core/column', {
    width: '30%'
  }, [['core/image', {
    url: __webpack_require__(/*! ../admin/img/product-image.png */ "./admin/img/product-image.png"),
    align: 'center'
  }]]]]],
  // Column -5
  ['core/columns', {
    verticalAlignment: 'center',
    className: 'wpas-rst-item'
  }, [['core/column', {
    width: '15%'
  }, [['core/paragraph', {
    content: '<strong>5<sup>th</sup></strong>',
    className: 'wpas-rst-index'
  }]]], ['core/column', {
    width: '35%'
  }, [['core/image', {
    url: __webpack_require__(/*! ../admin/img/olympus.png */ "./admin/img/olympus.png"),
    className: 'wpas-rst-item-logo',
    height: '100px'
  }], ['core/paragraph', {
    content: '<a href="https://olympus-global.com" data-type="link" data-id="https://olympus-global.com" target="_blank" rel="noreferrer noopener">www.olympus-global.com</a>',
    className: 'wpas-rst-url'
  }], ['core/spacer', {
    height: '20px'
  }], ['core/paragraph', {
    content: '<strong>Features:</strong>',
    className: 'wpas-rst-list-title'
  }], ['core/list', {
    className: 'wpas-rst-list'
  }, [['core/list-item', {
    content: '<a href="#" rel="nofollow">Lorem ipsum dolor sit amet consectetur</a>'
  }], ['core/list-item', {
    content: 'Adipiscing elit hendrerit augue iaculis'
  }], ['core/list-item', {
    content: 'Aliquet in dictum scelerisque porttitor'
  }], ['core/list-item', {
    content: 'Ornare sociis massa vitae blandit dictum'
  }]]]]], ['core/column', {
    width: '20%'
  }, [['wpas-blocks/star-rating', {
    showSRresult: false,
    srHighlightRange: 60,
    srStarsSize: 26,
    showSRresult: true
  }], ['core/paragraph', {
    content: 'Based on <a href="#">(200+)</a>'
  }], ['core/buttons', {}, [['core/button', {
    className: 'is-style-outline',
    text: 'Read Review',
    url: '#',
    rel: 'nofollow',
    style: {
      typography: {
        fontSize: '18px'
      }
    }
  }], ['core/button', {
    text: 'Visit Site',
    url: '#',
    rel: 'nofollow',
    style: {
      typography: {
        fontSize: '18px'
      }
    }
  }]]]]], ['core/column', {
    width: '30%'
  }, [['core/image', {
    url: __webpack_require__(/*! ../admin/img/product-image.png */ "./admin/img/product-image.png"),
    align: 'center'
  }]]]]]]]];
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cross Rating Block Settings'),
    icon: 'admin-generic',
    initialOpen: true,
    className: 'frhd__control frhd__control-query'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Brand Color :"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: rsBrandColor,
    onChange: colorValue => setAttributes({
      rsBrandColor: colorValue
    }),
    clearable: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalUnitControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Row Gap :'),
    onChange: newValue => setAttributes({
      rsRowGap: newValue
    }),
    isUnitSelectTabbable: true,
    value: rsRowGap,
    className: 'frhd__component frhd__component-width-90'
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: rsSidebarExist ? 'Body Has Sidebar Width :' : 'BODY HAS SIDEBAR WIDTH :',
    checked: rsSidebarExist,
    onChange: newValue => setAttributes({
      rsSidebarExist: newValue
    }),
    className: 'frhd__component-diff'
  }))), ",", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpasRSDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: 'wpas-review-summary-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE
  }))));
};
const save = ({
  attributes
}) => {
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpasRSDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: 'wpas-review-summary-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)));
};

/***/ }),

/***/ "./src/star-rating.js":
/*!****************************!*\
  !*** ./src/star-rating.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   edit: () => (/* binding */ edit),
/* harmony export */   save: () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





const edit = ({
  clientId,
  attributes,
  setAttributes
}) => {
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
  setAttributes({
    id: 'wpas-sr-' + clientIdSliced
  });

  // Defined Block Props.
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
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
  return [(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cross Rating Block Settings'),
    icon: 'admin-generic',
    initialOpen: true,
    className: 'frhd__control frhd__control-query'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: "Stars Highlight:",
    value: srHighlightRange,
    onChange: rangeValue => setAttributes({
      srHighlightRange: rangeValue
    }),
    max: 100,
    step: 1
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: showSRresult ? 'Show Rating Result :' : 'Hide Rating Result :',
    checked: showSRresult,
    onChange: newValue => setAttributes({
      showSRresult: newValue
    }),
    className: 'frhd__component-diff'
  }), showSRresult && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: "Rating Result Text Size:",
    value: srResultTxtSize,
    onChange: rangeValue => setAttributes({
      srResultTxtSize: rangeValue
    }),
    min: 1,
    max: 100,
    step: 2,
    withInputField: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: "Stars & Text Gap:",
    value: srStarsNtxtSpacing,
    onChange: rangeValue => setAttributes({
      srStarsNtxtSpacing: rangeValue
    }),
    min: 1,
    max: 100,
    step: 2,
    withInputField: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "radiogroup-component",
    className: "frhd__label-for-radiogroup"
  }, "Result Text Align :"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalRadioGroup, {
    onChange: newValue => setAttributes({
      resultTxtAlign: newValue
    }),
    defaultChecked: resultTxtAlign,
    label: "align",
    className: "frhd__component"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalRadio, {
    value: "left"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "1em",
    viewBox: "0 0 448 512"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalRadio, {
    value: "center"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "1em",
    viewBox: "0 0 448 512"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M352 64c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32zm96 128c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 448c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM352 320c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32z"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalRadio, {
    value: "right"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "1em",
    viewBox: "0 0 448 512"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M448 64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: "Prefix",
    value: srPrefix,
    onChange: rangeValue => setAttributes({
      srPrefix: rangeValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: "Suffix",
    value: srSuffix,
    onChange: rangeValue => setAttributes({
      srSuffix: rangeValue
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: "Stars Size:",
    value: srStarsSize,
    onChange: rangeValue => setAttributes({
      srStarsSize: rangeValue
    }),
    min: 20,
    max: 100,
    step: 2,
    withInputField: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "radiogroup-component",
    className: "frhd__label-for-radiogroup"
  }, "Stars Alignment :"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalRadioGroup, {
    onChange: newValue => setAttributes({
      starsAlign: newValue
    }),
    defaultChecked: starsAlign,
    label: "align",
    className: "frhd__component"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalRadio, {
    value: "left"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "1em",
    viewBox: "0 0 448 512"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalRadio, {
    value: "center"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "1em",
    viewBox: "0 0 448 512"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M352 64c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32zm96 128c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32zM0 448c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zM352 320c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32H320c17.7 0 32-14.3 32-32z"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalRadio, {
    value: "right"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "1em",
    viewBox: "0 0 448 512"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M448 64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Stars Color :"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: srStarsColor,
    onChange: colorValue => setAttributes({
      srStarsColor: colorValue
    }),
    clearable: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Stars Highlight Color:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: srStarsHLcolor,
    onChange: colorValue => setAttributes({
      srStarsHLcolor: colorValue
    }),
    clearable: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Result Text Color :"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: srResultTxtcolor,
    onChange: colorValue => setAttributes({
      srResultTxtcolor: colorValue
    }),
    clearable: false
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpassrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: 'wpas-star-rating-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpas-product-rating-wrapper`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpas-star-rating",
    role: "img",
    "aria-label": `Rated ${srHighlightRange / 20} out of 5`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, `${srPrefix} `, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", {
    class: "rating"
  }, srHighlightRange / 20), ` ${srSuffix}`)))))];
};
const save = ({
  attributes
}) => {
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpassrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save(),
    id: id,
    className: 'wpas-star-rating-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `wpas-product-rating-wrapper`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpas-star-rating",
    role: "img",
    "aria-label": `Rated ${srHighlightRange / 20} out of 5`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, `${srPrefix} `, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", {
    class: "rating"
  }, srHighlightRange / 20), ` ${srSuffix}`)))));
};

/***/ }),

/***/ "./src/star-tag.js":
/*!*************************!*\
  !*** ./src/star-tag.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   edit: () => (/* binding */ edit),
/* harmony export */   save: () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





const edit = ({
  clientId,
  attributes,
  setAttributes
}) => {
  const {
    id
  } = attributes;

  // Set unique ID through block index.
  let clientIdSliced = clientId.slice(clientId.lastIndexOf('-') + 1);
  setAttributes({
    id: 'wpas-bnr-' + clientIdSliced
  });

  // Defined Block Props.
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  const wpasBnrDynamicStyles = `#${id} .asdfads {
        overflow: auto;
    }`;
  return [(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cross Rating Block Settings'),
    icon: 'admin-generic',
    initialOpen: true,
    className: 'frhd__control frhd__control-query'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Heading Sample :")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpasBnrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: 'wpas-banner-ad-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Banner Here..")))];
};
const save = ({
  attributes
}) => {
  const {
    id
  } = attributes;
  const wpasBnrDynamicStyles = `#${id} .asdfads {
        overflow: auto;
    }`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpasBnrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: 'wpas-banner-ad-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Banner Here..")));
};

/***/ }),

/***/ "./src/testimonials.js":
/*!*****************************!*\
  !*** ./src/testimonials.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   edit: () => (/* binding */ edit),
/* harmony export */   save: () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





const edit = ({
  clientId,
  attributes,
  setAttributes
}) => {
  const {
    id
  } = attributes;

  // Set unique ID through block index.
  let clientIdSliced = clientId.slice(clientId.lastIndexOf('-') + 1);
  setAttributes({
    id: 'wpas-bnr-' + clientIdSliced
  });

  // Defined Block Props.
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  const wpasBnrDynamicStyles = `#${id} .asdfads {
        overflow: auto;
    }`;
  return [(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cross Rating Block Settings'),
    icon: 'admin-generic',
    initialOpen: true,
    className: 'frhd__control frhd__control-query'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Heading Sample :")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpasBnrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: 'wpas-banner-ad-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Banner Here..")))];
};
const save = ({
  attributes
}) => {
  const {
    id
  } = attributes;
  const wpasBnrDynamicStyles = `#${id} .asdfads {
        overflow: auto;
    }`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpasBnrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: 'wpas-banner-ad-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Banner Here..")));
};

/***/ }),

/***/ "./src/vip-quote.js":
/*!**************************!*\
  !*** ./src/vip-quote.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   edit: () => (/* binding */ edit),
/* harmony export */   save: () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





const edit = ({
  clientId,
  attributes,
  setAttributes
}) => {
  const {
    id,
    vipImage,
    vipImageObj
  } = attributes;

  // Set unique ID through block index.
  let clientIdSliced = clientId.slice(clientId.lastIndexOf('-') + 1);
  setAttributes({
    id: 'wpas-vipq-' + clientIdSliced
  });

  // Defined Block Props.
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  const wpasBnrDynamicStyles = `#${id}.wpas-vip-quote-main {
        align-items: center;
        display: flex;
        justify-content: center;
        position: relative;
        text-align: center;
        width: 100%;
        max-width: 460px !important;
    }
    #${id} .wpas-vip-quote-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        width: 80%;
    }
    #${id} .wpas-vip-quote-content q {
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
    }
    #${id} .wpas-vip-quote-content q::before {
        content: "❝";
    }
    #${id} .wpas-vip-quote-content q::after {
        content: "❞";
    }`;
  return [(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cross Rating Block Settings'),
    icon: 'admin-generic',
    initialOpen: true,
    className: 'frhd__control frhd__control-query'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalHeading, {
    className: 'frhd__pb-heading'
  }, "Select an Image:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    onSelect: media => setAttributes({
      vipImageObj: media.sizes,
      vipImage: media.sizes.full.url
    }),
    allowedTypes: ['image'],
    value: vipImage,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      onClick: open,
      icon: 'admin-media',
      className: 'frhd__gr-media-btn'
    }, "Open Media Library")
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpasBnrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: 'wpas-vip-quote-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpas-vip-quote-leaf-left"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    height: "120",
    viewBox: "0 0 74 120",
    width: "74"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    fill: "#C5CDE9"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m9.97894 60.8847c4.25716 3.8087 6.55646 8.792 6.59816 8.8092.025-.0345-5.4235.3973-10.12215-3.3423-4.74864-3.7569-6.106594-10.3725-6.048278-10.3379.024993-.0346 5.273498 1.0536 9.572268 4.871z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m9.70111 45.8226c3.28239 4.5514 4.39039 9.8456 4.42369 9.8715.0334-.0345-5.4234-.6305-9.164-5.1819-3.79059-4.5774-3.55732-11.3398-3.499-11.3052.03332-.0173 4.92359 2.0555 8.23931 6.6156z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m13.0596 30.9073c2.1077 5.1388 1.9327 10.5712 1.9577 10.6057.0417-.0259-5.19015-1.6496-7.76441-6.8574-2.62425-5.2424-.69981-11.9271-.65815-11.8839.04165-.0259 4.33206 2.9796 6.46486 8.1356z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m20.1671 16.6484c.7165 5.5619-.8331 10.9424-.8081 10.977.05-.0173-4.6986-2.6169-5.8983-8.3084-1.2496-5.7346 2.4576-12.10837 2.4993-12.05655.05-.02591 3.4657 3.80005 4.2071 9.38795z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m44.7837 112.263c6.1815-.155 12.4881 1.9 12.5464 1.892-.0084-.043-3.1575 3.955-9.7139 4.43-6.6231.493-13.4212-3.307-13.3462-3.325 0-.034 4.2821-2.824 10.5137-2.997z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m49.9324 105.432c1.4996 5.139 7.3979 8.775 7.4063 8.723.0583 0 1.033-4.733-.7998-9.595-1.8328-4.8368-5.3402-8.3087-5.3485-8.3519.05.0086-2.7825 4.1279-1.258 9.2239z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m31.272 101.779c5.9816.941 11.405 3.964 11.4634 3.964 0-.043-4.0406 3.221-10.4137 2.539-6.4315-.665-12.0133-5.493-11.9383-5.493-.0083-.043 4.8653-1.943 10.8886-1.01z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m38.0016 96.1736c.1 5.1564 4.7153 9.6214 4.732 9.5694.05.008 2.266-4.31 1.8245-9.2499-.4499-4.9055-2.9409-8.8438-2.9409-8.8784.0417.0087-3.7489 3.446-3.6156 8.5589z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m20.8823 89.3766c5.5984 1.9778 10.0555 5.821 10.1138 5.8297.0083-.0432-4.7237 2.3578-10.7303.5786-6.0649-1.7791-10.32204-7.4188-10.2554-7.4101 0-.0432 5.2318-.976 10.8719 1.0018z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m28.8308 85.2225c-1.1746 4.9574 2.1411 10.027 2.1578 9.9752.0416.0173 3.299-3.7051 4.1238-8.4984.8081-4.7673-.6582-8.9906-.6498-9.0251.0416.0259-4.4821 2.6341-5.6318 7.5483z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m13.7422 75.5753c5.0235 2.9451 8.4476 7.4361 8.4892 7.4533.0167-.0431-5.1902 1.4078-10.6386-1.4077-5.50678-2.8242-8.35596-9.0511-8.29765-9.0338.025-.0346 5.3818.0431 10.44705 2.9882z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m22.5236 73.0448c-2.3327 4.5601-.3249 10.0357-.2916 9.9839.0333.0172 4.1405-2.9537 6.0983-7.4015 1.9411-4.4306 1.4912-8.7834 1.5079-8.8179.0416.0172-5.0153 1.7014-7.3146 6.2355z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m19.2004 60.0729c-3.349 3.9987-2.6659 9.6642-2.6326 9.6211.0333.0259 4.7653-2.0814 7.7311-6.0283 2.9492-3.9297 3.5157-8.2566 3.5407-8.2825.0417.0259-5.3235.7169-8.6392 4.6897z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m18.967 46.7812c-4.2404 3.2992-4.8819 8.9561-4.8402 8.9129.025.0346 5.1652-1.1314 9.0057-4.4305 3.8156-3.2819 5.4068-7.4361 5.4318-7.462.0333.0432-5.4068-.2936-9.5973 2.9796z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m21.9235 33.6105c-4.9819 2.47-6.9647 7.9283-6.9064 7.9024.0167.0345 5.3402-.1295 9.9139-2.6601 4.5403-2.5218 7.1396-6.3564 7.1813-6.3737.0166.0345-5.2569-1.3214-10.1888 1.1314z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m28.1973 21.0271c-5.5734 1.5546-8.9058 6.6242-8.8392 6.5983.0084.0345 5.2819.8896 10.4387-.7859 5.1152-1.6669 8.7225-5.0438 8.7725-5.061.0084.0431-4.8569-2.2974-10.372-.7514z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m31.0722 6.13778c-5.1152 4.77602-5.5734 10.61432-5.5567 10.55382.0499-.0345 5.4984-2.28 10.0637-6.5119 4.5154-4.25783 7.3979-9.707484 7.4396-9.750667.0833-.034546-6.8314.924107-11.9466 5.708747z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m54.5565 112.514c5.9983 2.988 12.4798 5.337 19.2529 6.978.1333.035.2166.173.1833.302-.0167.07-.05.121-.1083.165-.0584.034-.125.051-.1917.034-7.023-1.701-13.6711-4.119-19.7693-7.177-6.0983-3.057-11.6883-6.78-16.6203-11.063-4.7736-4.1458-8.9308-8.8095-12.3631-13.8791-3.3657-4.966-6.015-10.2948-7.8894-15.8481-1.5996-4.7501-2.6243-9.647-3.0492-14.5612-.4248-4.9573-.2332-9.9493.5665-14.8375.8165-4.9833 2.2661-9.8802 4.3155-14.5526 2.0161-4.6033 4.632-9.0338 7.7728-13.1707l.3832.3195c-12.5964 16.5995-16.0704 37.2235-9.5223 56.6384 1.9411 5.7433 4.7153 11.2362 8.256 16.3144 3.4823 5.0092 7.7145 9.6298 12.5631 13.7239 4.8403 4.093 10.297 7.669 16.2203 10.614z"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpas-vip-quote-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("q", null, "Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: "https://www.hostinger.com/h-assets/svg/icons/bitcathca-logo-soft.svg",
    alt: "Bitcatcha",
    loading: "lazy"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpas-vip-quote-leaf-right"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "75",
    height: "121"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    transform: "matrix(-1 0 0 1 75 0)",
    fill: "#C5CDE9"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9.979 60.885c4.257 3.808 6.556 8.792 6.598 8.809.025-.035-5.423.397-10.122-3.342C1.706 62.595.348 55.979.407 56.014c.025-.035 5.273 1.053 9.572 4.87zM9.7 45.823c3.282 4.551 4.39 9.845 4.424 9.871.033-.034-5.424-.63-9.164-5.182-3.79-4.577-3.558-11.34-3.5-11.305.034-.017 4.924 2.056 8.24 6.616zm3.359-14.916c2.107 5.14 1.932 10.571 1.957 10.606.042-.026-5.19-1.65-7.764-6.857-2.624-5.243-.7-11.927-.658-11.884.041-.026 4.332 2.98 6.465 8.135zm7.107-14.259c.717 5.562-.833 10.943-.808 10.977.05-.017-4.699-2.616-5.898-8.308-1.25-5.735 2.457-12.108 2.499-12.057.05-.025 3.466 3.8 4.207 9.388zm24.617 95.615c6.181-.155 12.488 1.9 12.546 1.892-.008-.043-3.157 3.955-9.714 4.43-6.623.493-13.421-3.307-13.346-3.325 0-.034 4.282-2.824 10.514-2.997z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M49.932 105.432c1.5 5.139 7.398 8.775 7.407 8.723.058 0 1.033-4.733-.8-9.595-1.833-4.837-5.34-8.309-5.349-8.352.05.009-2.782 4.128-1.258 9.224zm-18.66-3.653c5.982.941 11.405 3.964 11.463 3.964 0-.043-4.04 3.221-10.413 2.539-6.432-.665-12.014-5.493-11.939-5.493-.008-.043 4.866-1.943 10.889-1.01z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M38.002 96.174c.1 5.156 4.715 9.621 4.732 9.569.05.008 2.266-4.31 1.824-9.25-.45-4.905-2.94-8.844-2.94-8.878.04.008-3.75 3.446-3.616 8.559zm-17.12-6.797c5.599 1.977 10.056 5.82 10.114 5.83.008-.044-4.724 2.357-10.73.578-6.065-1.78-10.322-7.419-10.256-7.41 0-.043 5.232-.976 10.872 1.002z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M28.83 85.222c-1.174 4.958 2.142 10.028 2.159 9.976.041.017 3.299-3.705 4.123-8.499.808-4.767-.658-8.99-.65-9.025.042.026-4.482 2.634-5.631 7.548zm-15.088-9.647c5.024 2.945 8.448 7.436 8.49 7.454.016-.043-5.19 1.407-10.64-1.408-5.506-2.824-8.355-9.051-8.297-9.034.025-.035 5.382.043 10.447 2.988z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22.524 73.045c-2.333 4.56-.325 10.035-.292 9.984.033.017 4.14-2.954 6.098-7.402 1.941-4.43 1.492-8.783 1.508-8.818.042.017-5.015 1.702-7.314 6.236zM19.2 60.073c-3.349 3.999-2.665 9.664-2.632 9.621.033.026 4.765-2.081 7.73-6.028 2.95-3.93 3.517-8.257 3.542-8.283.041.026-5.324.717-8.64 4.69zm-.233-13.292c-4.24 3.3-4.882 8.956-4.84 8.913.025.035 5.165-1.131 9.005-4.43 3.816-3.282 5.407-7.437 5.432-7.462.034.043-5.407-.294-9.597 2.98zm2.957-13.17c-4.982 2.47-6.965 7.928-6.907 7.902.017.034 5.34-.13 9.914-2.66 4.54-2.522 7.14-6.357 7.181-6.374.017.035-5.257-1.321-10.189 1.132zm6.273-12.584c-5.573 1.555-8.905 6.624-8.839 6.598.008.035 5.282.89 10.439-.785 5.115-1.667 8.722-5.044 8.772-5.061.009.043-4.857-2.298-10.372-.752zm2.875-14.89c-5.115 4.777-5.573 10.615-5.556 10.555.05-.035 5.498-2.28 10.063-6.512C40.095 5.922 42.977.472 43.02.429c.083-.035-6.832.924-11.947 5.709z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M54.556 112.514c5.999 2.988 12.48 5.337 19.253 6.978a.253.253 0 0 1 .184.302.274.274 0 0 1-.109.165.254.254 0 0 1-.191.034c-7.023-1.701-13.671-4.119-19.77-7.177-6.098-3.057-11.688-6.78-16.62-11.063-4.773-4.146-8.93-8.81-12.363-13.88a65.723 65.723 0 0 1-7.89-15.847 62.563 62.563 0 0 1-3.049-14.561 60.161 60.161 0 0 1 .567-14.838 60.691 60.691 0 0 1 4.315-14.553c2.017-4.603 4.632-9.033 7.773-13.17l.383.32c-12.596 16.599-16.07 37.223-9.522 56.638a64.83 64.83 0 0 0 8.256 16.314c3.482 5.01 7.715 9.63 12.563 13.724 4.84 4.093 10.297 7.669 16.22 10.614z"
  }))))))];
};
const save = ({
  attributes
}) => {
  const {
    id
  } = attributes;
  const wpasBnrDynamicStyles = `#${id}.wpas-vip-quote-main {
        align-items: center;
        display: flex;
        justify-content: center;
        position: relative;
        text-align: center;
        width: 100%;
        max-width: 460px !important;
    }
    #${id} .wpas-vip-quote-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        width: 80%;
    }
    #${id} .wpas-vip-quote-content q {
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
    }
    #${id} .wpas-vip-quote-content q::before {
        content: "❝";
    }
    #${id} .wpas-vip-quote-content q::after {
        content: "❞";
    }`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, `<style>${wpasBnrDynamicStyles}</style>`), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    className: 'wpas-vip-quote-main'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpas-vip-quote-leaf-left"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    height: "120",
    viewBox: "0 0 74 120",
    width: "74"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    fill: "#C5CDE9"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m9.97894 60.8847c4.25716 3.8087 6.55646 8.792 6.59816 8.8092.025-.0345-5.4235.3973-10.12215-3.3423-4.74864-3.7569-6.106594-10.3725-6.048278-10.3379.024993-.0346 5.273498 1.0536 9.572268 4.871z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m9.70111 45.8226c3.28239 4.5514 4.39039 9.8456 4.42369 9.8715.0334-.0345-5.4234-.6305-9.164-5.1819-3.79059-4.5774-3.55732-11.3398-3.499-11.3052.03332-.0173 4.92359 2.0555 8.23931 6.6156z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m13.0596 30.9073c2.1077 5.1388 1.9327 10.5712 1.9577 10.6057.0417-.0259-5.19015-1.6496-7.76441-6.8574-2.62425-5.2424-.69981-11.9271-.65815-11.8839.04165-.0259 4.33206 2.9796 6.46486 8.1356z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m20.1671 16.6484c.7165 5.5619-.8331 10.9424-.8081 10.977.05-.0173-4.6986-2.6169-5.8983-8.3084-1.2496-5.7346 2.4576-12.10837 2.4993-12.05655.05-.02591 3.4657 3.80005 4.2071 9.38795z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m44.7837 112.263c6.1815-.155 12.4881 1.9 12.5464 1.892-.0084-.043-3.1575 3.955-9.7139 4.43-6.6231.493-13.4212-3.307-13.3462-3.325 0-.034 4.2821-2.824 10.5137-2.997z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m49.9324 105.432c1.4996 5.139 7.3979 8.775 7.4063 8.723.0583 0 1.033-4.733-.7998-9.595-1.8328-4.8368-5.3402-8.3087-5.3485-8.3519.05.0086-2.7825 4.1279-1.258 9.2239z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m31.272 101.779c5.9816.941 11.405 3.964 11.4634 3.964 0-.043-4.0406 3.221-10.4137 2.539-6.4315-.665-12.0133-5.493-11.9383-5.493-.0083-.043 4.8653-1.943 10.8886-1.01z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m38.0016 96.1736c.1 5.1564 4.7153 9.6214 4.732 9.5694.05.008 2.266-4.31 1.8245-9.2499-.4499-4.9055-2.9409-8.8438-2.9409-8.8784.0417.0087-3.7489 3.446-3.6156 8.5589z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m20.8823 89.3766c5.5984 1.9778 10.0555 5.821 10.1138 5.8297.0083-.0432-4.7237 2.3578-10.7303.5786-6.0649-1.7791-10.32204-7.4188-10.2554-7.4101 0-.0432 5.2318-.976 10.8719 1.0018z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m28.8308 85.2225c-1.1746 4.9574 2.1411 10.027 2.1578 9.9752.0416.0173 3.299-3.7051 4.1238-8.4984.8081-4.7673-.6582-8.9906-.6498-9.0251.0416.0259-4.4821 2.6341-5.6318 7.5483z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m13.7422 75.5753c5.0235 2.9451 8.4476 7.4361 8.4892 7.4533.0167-.0431-5.1902 1.4078-10.6386-1.4077-5.50678-2.8242-8.35596-9.0511-8.29765-9.0338.025-.0346 5.3818.0431 10.44705 2.9882z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m22.5236 73.0448c-2.3327 4.5601-.3249 10.0357-.2916 9.9839.0333.0172 4.1405-2.9537 6.0983-7.4015 1.9411-4.4306 1.4912-8.7834 1.5079-8.8179.0416.0172-5.0153 1.7014-7.3146 6.2355z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m19.2004 60.0729c-3.349 3.9987-2.6659 9.6642-2.6326 9.6211.0333.0259 4.7653-2.0814 7.7311-6.0283 2.9492-3.9297 3.5157-8.2566 3.5407-8.2825.0417.0259-5.3235.7169-8.6392 4.6897z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m18.967 46.7812c-4.2404 3.2992-4.8819 8.9561-4.8402 8.9129.025.0346 5.1652-1.1314 9.0057-4.4305 3.8156-3.2819 5.4068-7.4361 5.4318-7.462.0333.0432-5.4068-.2936-9.5973 2.9796z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m21.9235 33.6105c-4.9819 2.47-6.9647 7.9283-6.9064 7.9024.0167.0345 5.3402-.1295 9.9139-2.6601 4.5403-2.5218 7.1396-6.3564 7.1813-6.3737.0166.0345-5.2569-1.3214-10.1888 1.1314z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m28.1973 21.0271c-5.5734 1.5546-8.9058 6.6242-8.8392 6.5983.0084.0345 5.2819.8896 10.4387-.7859 5.1152-1.6669 8.7225-5.0438 8.7725-5.061.0084.0431-4.8569-2.2974-10.372-.7514z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m31.0722 6.13778c-5.1152 4.77602-5.5734 10.61432-5.5567 10.55382.0499-.0345 5.4984-2.28 10.0637-6.5119 4.5154-4.25783 7.3979-9.707484 7.4396-9.750667.0833-.034546-6.8314.924107-11.9466 5.708747z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m54.5565 112.514c5.9983 2.988 12.4798 5.337 19.2529 6.978.1333.035.2166.173.1833.302-.0167.07-.05.121-.1083.165-.0584.034-.125.051-.1917.034-7.023-1.701-13.6711-4.119-19.7693-7.177-6.0983-3.057-11.6883-6.78-16.6203-11.063-4.7736-4.1458-8.9308-8.8095-12.3631-13.8791-3.3657-4.966-6.015-10.2948-7.8894-15.8481-1.5996-4.7501-2.6243-9.647-3.0492-14.5612-.4248-4.9573-.2332-9.9493.5665-14.8375.8165-4.9833 2.2661-9.8802 4.3155-14.5526 2.0161-4.6033 4.632-9.0338 7.7728-13.1707l.3832.3195c-12.5964 16.5995-16.0704 37.2235-9.5223 56.6384 1.9411 5.7433 4.7153 11.2362 8.256 16.3144 3.4823 5.0092 7.7145 9.6298 12.5631 13.7239 4.8403 4.093 10.297 7.669 16.2203 10.614z"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpas-vip-quote-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("q", null, "Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: "https://www.hostinger.com/h-assets/svg/icons/bitcathca-logo-soft.svg",
    alt: "Bitcatcha",
    loading: "lazy"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wpas-vip-quote-leaf-right"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "75",
    height: "121"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    transform: "matrix(-1 0 0 1 75 0)",
    fill: "#C5CDE9"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9.979 60.885c4.257 3.808 6.556 8.792 6.598 8.809.025-.035-5.423.397-10.122-3.342C1.706 62.595.348 55.979.407 56.014c.025-.035 5.273 1.053 9.572 4.87zM9.7 45.823c3.282 4.551 4.39 9.845 4.424 9.871.033-.034-5.424-.63-9.164-5.182-3.79-4.577-3.558-11.34-3.5-11.305.034-.017 4.924 2.056 8.24 6.616zm3.359-14.916c2.107 5.14 1.932 10.571 1.957 10.606.042-.026-5.19-1.65-7.764-6.857-2.624-5.243-.7-11.927-.658-11.884.041-.026 4.332 2.98 6.465 8.135zm7.107-14.259c.717 5.562-.833 10.943-.808 10.977.05-.017-4.699-2.616-5.898-8.308-1.25-5.735 2.457-12.108 2.499-12.057.05-.025 3.466 3.8 4.207 9.388zm24.617 95.615c6.181-.155 12.488 1.9 12.546 1.892-.008-.043-3.157 3.955-9.714 4.43-6.623.493-13.421-3.307-13.346-3.325 0-.034 4.282-2.824 10.514-2.997z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M49.932 105.432c1.5 5.139 7.398 8.775 7.407 8.723.058 0 1.033-4.733-.8-9.595-1.833-4.837-5.34-8.309-5.349-8.352.05.009-2.782 4.128-1.258 9.224zm-18.66-3.653c5.982.941 11.405 3.964 11.463 3.964 0-.043-4.04 3.221-10.413 2.539-6.432-.665-12.014-5.493-11.939-5.493-.008-.043 4.866-1.943 10.889-1.01z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M38.002 96.174c.1 5.156 4.715 9.621 4.732 9.569.05.008 2.266-4.31 1.824-9.25-.45-4.905-2.94-8.844-2.94-8.878.04.008-3.75 3.446-3.616 8.559zm-17.12-6.797c5.599 1.977 10.056 5.82 10.114 5.83.008-.044-4.724 2.357-10.73.578-6.065-1.78-10.322-7.419-10.256-7.41 0-.043 5.232-.976 10.872 1.002z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M28.83 85.222c-1.174 4.958 2.142 10.028 2.159 9.976.041.017 3.299-3.705 4.123-8.499.808-4.767-.658-8.99-.65-9.025.042.026-4.482 2.634-5.631 7.548zm-15.088-9.647c5.024 2.945 8.448 7.436 8.49 7.454.016-.043-5.19 1.407-10.64-1.408-5.506-2.824-8.355-9.051-8.297-9.034.025-.035 5.382.043 10.447 2.988z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22.524 73.045c-2.333 4.56-.325 10.035-.292 9.984.033.017 4.14-2.954 6.098-7.402 1.941-4.43 1.492-8.783 1.508-8.818.042.017-5.015 1.702-7.314 6.236zM19.2 60.073c-3.349 3.999-2.665 9.664-2.632 9.621.033.026 4.765-2.081 7.73-6.028 2.95-3.93 3.517-8.257 3.542-8.283.041.026-5.324.717-8.64 4.69zm-.233-13.292c-4.24 3.3-4.882 8.956-4.84 8.913.025.035 5.165-1.131 9.005-4.43 3.816-3.282 5.407-7.437 5.432-7.462.034.043-5.407-.294-9.597 2.98zm2.957-13.17c-4.982 2.47-6.965 7.928-6.907 7.902.017.034 5.34-.13 9.914-2.66 4.54-2.522 7.14-6.357 7.181-6.374.017.035-5.257-1.321-10.189 1.132zm6.273-12.584c-5.573 1.555-8.905 6.624-8.839 6.598.008.035 5.282.89 10.439-.785 5.115-1.667 8.722-5.044 8.772-5.061.009.043-4.857-2.298-10.372-.752zm2.875-14.89c-5.115 4.777-5.573 10.615-5.556 10.555.05-.035 5.498-2.28 10.063-6.512C40.095 5.922 42.977.472 43.02.429c.083-.035-6.832.924-11.947 5.709z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M54.556 112.514c5.999 2.988 12.48 5.337 19.253 6.978a.253.253 0 0 1 .184.302.274.274 0 0 1-.109.165.254.254 0 0 1-.191.034c-7.023-1.701-13.671-4.119-19.77-7.177-6.098-3.057-11.688-6.78-16.62-11.063-4.773-4.146-8.93-8.81-12.363-13.88a65.723 65.723 0 0 1-7.89-15.847 62.563 62.563 0 0 1-3.049-14.561 60.161 60.161 0 0 1 .567-14.838 60.691 60.691 0 0 1 4.315-14.553c2.017-4.603 4.632-9.033 7.773-13.17l.383.32c-12.596 16.599-16.07 37.223-9.522 56.638a64.83 64.83 0 0 0 8.256 16.314c3.482 5.01 7.715 9.63 12.563 13.724 4.84 4.093 10.297 7.669 16.22 10.614z"
  }))))));
};

/***/ }),

/***/ "./admin/img/canon.png":
/*!*****************************!*\
  !*** ./admin/img/canon.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/canon.9bae9c2d.png";

/***/ }),

/***/ "./admin/img/nikon.png":
/*!*****************************!*\
  !*** ./admin/img/nikon.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/nikon.97360245.png";

/***/ }),

/***/ "./admin/img/olympus.png":
/*!*******************************!*\
  !*** ./admin/img/olympus.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/olympus.a36baf1d.png";

/***/ }),

/***/ "./admin/img/panasonic.png":
/*!*********************************!*\
  !*** ./admin/img/panasonic.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/panasonic.15a93b5d.png";

/***/ }),

/***/ "./admin/img/product-image.png":
/*!*************************************!*\
  !*** ./admin/img/product-image.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/product-image.54506d33.png";

/***/ }),

/***/ "./admin/img/sony.png":
/*!****************************!*\
  !*** ./admin/img/sony.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/sony.278a77cf.png";

/***/ }),

/***/ "./public/img/1.png":
/*!**************************!*\
  !*** ./public/img/1.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/1.17effcf3.png";

/***/ }),

/***/ "./public/img/2.png":
/*!**************************!*\
  !*** ./public/img/2.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/2.daa8d029.png";

/***/ }),

/***/ "./public/img/3.png":
/*!**************************!*\
  !*** ./public/img/3.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/3.09056c72.png";

/***/ }),

/***/ "./public/img/4.png":
/*!**************************!*\
  !*** ./public/img/4.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/4.e8f8e3ea.png";

/***/ }),

/***/ "./public/img/5.png":
/*!**************************!*\
  !*** ./public/img/5.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/5.becdbc69.png";

/***/ }),

/***/ "./public/img/6.png":
/*!**************************!*\
  !*** ./public/img/6.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/6.0919fb06.png";

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/icons */ "./src/icons.js");
/* harmony import */ var _cross_rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cross-rating */ "./src/cross-rating.js");
/* harmony import */ var _review_summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./review-summary */ "./src/review-summary.js");
/* harmony import */ var _review_info_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./review-info-box */ "./src/review-info-box.js");
/* harmony import */ var _pros_cons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pros-cons */ "./src/pros-cons.js");
/* harmony import */ var _freemium_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./freemium-table */ "./src/freemium-table.js");
/* harmony import */ var _pricing_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pricing-table */ "./src/pricing-table.js");
/* harmony import */ var _star_rating__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./star-rating */ "./src/star-rating.js");
/* harmony import */ var _banner_ad__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./banner-ad */ "./src/banner-ad.js");
/* harmony import */ var _notice_box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notice-box */ "./src/notice-box.js");
/* harmony import */ var _testimonials__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./testimonials */ "./src/testimonials.js");
/* harmony import */ var _vip_quote__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vip-quote */ "./src/vip-quote.js");
/* harmony import */ var _progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./progress-bar */ "./src/progress-bar.js");
/* harmony import */ var _progress_circle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./progress-circle */ "./src/progress-circle.js");
/* harmony import */ var _leader_board__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./leader-board */ "./src/leader-board.js");
/* harmony import */ var _star_tag__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./star-tag */ "./src/star-tag.js");
/* harmony import */ var _info_capsule__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./info-capsule */ "./src/info-capsule.js");
/* harmony import */ var _quick_summary__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./quick-summary */ "./src/quick-summary.js");




















const blockSettings = [{
  name: 'wpas-blocks/cross-rating',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Cross Rating Template'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('This Block showing a Cross Rating column list.'),
  category: 'er-block-cat',
  icon: _src_icons__WEBPACK_IMPORTED_MODULE_2__["default"].stackStar,
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Editorial'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rating'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Cross'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('List')],
  example: {
    attributes: {
      author: 'Forhad'
    }
  },
  edit: _cross_rating__WEBPACK_IMPORTED_MODULE_3__.edit,
  save: _cross_rating__WEBPACK_IMPORTED_MODULE_3__.save
}, {
  name: 'wpas-blocks/review-summary',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Review Summary'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('This Block showing a Review Summary.'),
  category: 'er-block-cat',
  icon: _src_icons__WEBPACK_IMPORTED_MODULE_2__["default"].reviewSummary,
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Review'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Summary'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Table'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Editorial'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rating')],
  example: {
    attributes: {
      author: 'Forhad'
    }
  },
  edit: _review_summary__WEBPACK_IMPORTED_MODULE_4__.edit,
  save: _review_summary__WEBPACK_IMPORTED_MODULE_4__.save
}, {
  name: 'wpas-blocks/review-info-box',
  title: 'Review Info Box',
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('This Block showing an info box for Review Rating.'),
  category: 'er-block-cat',
  icon: _src_icons__WEBPACK_IMPORTED_MODULE_2__["default"].reviewInfoBox,
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Editorial'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rating'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Info'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Box')],
  example: {
    attributes: {
      author: 'Forhad'
    }
  },
  edit: _review_info_box__WEBPACK_IMPORTED_MODULE_5__.edit,
  save: _review_info_box__WEBPACK_IMPORTED_MODULE_5__.save
}, {
  name: 'wpas-blocks/pros-cons',
  title: 'PROS CONS',
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('This Block showing a PROS CONS box.'),
  category: 'er-block-cat',
  icon: _src_icons__WEBPACK_IMPORTED_MODULE_2__["default"].prosCons,
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Editorial'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rating'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Pros'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Cons')],
  example: {
    attributes: {
      author: 'Forhad'
    }
  },
  edit: _pros_cons__WEBPACK_IMPORTED_MODULE_6__.edit,
  save: _pros_cons__WEBPACK_IMPORTED_MODULE_6__.save
}, {
  name: 'wpas-blocks/freemium-table',
  title: 'Freemium Table',
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('This Block showing a Freemium table.'),
  category: 'er-block-cat',
  icon: _src_icons__WEBPACK_IMPORTED_MODULE_2__["default"].freemiumTable,
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Editorial'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rating'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('freemium'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('table')],
  example: {
    attributes: {
      author: 'Forhad'
    }
  },
  edit: _freemium_table__WEBPACK_IMPORTED_MODULE_7__.edit,
  save: _freemium_table__WEBPACK_IMPORTED_MODULE_7__.save
}, {
  name: 'wpas-blocks/pricing-table',
  title: 'Pricing Table',
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('This Block showing a Pricing table.'),
  category: 'er-block-cat',
  icon: _src_icons__WEBPACK_IMPORTED_MODULE_2__["default"].pricingTable,
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Editorial'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rating'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('pricing'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('table')],
  example: {
    attributes: {
      author: 'Forhad'
    }
  },
  edit: _pricing_table__WEBPACK_IMPORTED_MODULE_8__.edit,
  save: _pricing_table__WEBPACK_IMPORTED_MODULE_8__.save
}, {
  name: 'wpas-blocks/star-rating',
  title: 'Star Rating',
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('This Block showing a star rating.'),
  category: 'er-block-cat',
  icon: _src_icons__WEBPACK_IMPORTED_MODULE_2__["default"].starRating,
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Star'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rating'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('icon'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('details')],
  example: {
    attributes: {
      author: 'Forhad'
    }
  },
  edit: _star_rating__WEBPACK_IMPORTED_MODULE_9__.edit,
  save: _star_rating__WEBPACK_IMPORTED_MODULE_9__.save
}, {
  name: 'wpas-blocks/banner-ad',
  title: 'Banner Ad',
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('This Block showing a banner Ad.'),
  category: 'er-block-cat',
  icon: _src_icons__WEBPACK_IMPORTED_MODULE_2__["default"].bannerAd,
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Star'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rating'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('banner'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('ad')],
  example: {
    attributes: {
      author: 'Forhad'
    }
  },
  edit: _banner_ad__WEBPACK_IMPORTED_MODULE_10__.edit,
  save: _banner_ad__WEBPACK_IMPORTED_MODULE_10__.save
}, {
  name: 'wpas-blocks/notice-box',
  title: 'Notice Box',
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('This Block showing a notice box.'),
  category: 'er-block-cat',
  icon: _src_icons__WEBPACK_IMPORTED_MODULE_2__["default"].noticeBox,
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Star'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rating'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('info'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('notice')],
  example: {
    attributes: {
      author: 'Forhad'
    }
  },
  edit: _notice_box__WEBPACK_IMPORTED_MODULE_11__.edit,
  save: _notice_box__WEBPACK_IMPORTED_MODULE_11__.save
}, {
  name: 'wpas-blocks/testimonials',
  title: 'Testimonials',
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('This Block showing Testimonials.'),
  category: 'er-block-cat',
  icon: _src_icons__WEBPACK_IMPORTED_MODULE_2__["default"].testimonial,
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('testimonials'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('client'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('review'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('star')],
  example: {
    attributes: {
      author: 'Forhad'
    }
  },
  edit: _testimonials__WEBPACK_IMPORTED_MODULE_12__.edit,
  save: _testimonials__WEBPACK_IMPORTED_MODULE_12__.save
}, {
  name: 'wpas-blocks/vip-quote',
  title: 'VIP Quote',
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('This Block showing VIP Quote.'),
  category: 'er-block-cat',
  icon: _src_icons__WEBPACK_IMPORTED_MODULE_2__["default"].vipQuote,
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('vip'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('quote'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('review'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('rating')],
  example: {
    attributes: {
      author: 'Forhad'
    }
  },
  edit: _vip_quote__WEBPACK_IMPORTED_MODULE_13__.edit,
  save: _vip_quote__WEBPACK_IMPORTED_MODULE_13__.save
}, {
  name: 'wpas-blocks/progress-bar',
  title: 'Progress Bar',
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('This Block showing Progress Bar.'),
  category: 'er-block-cat',
  icon: _src_icons__WEBPACK_IMPORTED_MODULE_2__["default"].progressBar,
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('progress'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('bar'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('line'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('range')],
  example: {
    attributes: {
      author: 'Forhad'
    }
  },
  edit: _progress_bar__WEBPACK_IMPORTED_MODULE_14__.edit,
  save: _progress_bar__WEBPACK_IMPORTED_MODULE_14__.save
}, {
  name: 'wpas-blocks/progress-circle',
  title: 'Progress Circle',
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('This Block showing Progress Circle.'),
  category: 'er-block-cat',
  icon: _src_icons__WEBPACK_IMPORTED_MODULE_2__["default"].progressCircle,
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('progress'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('circle'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('round'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('shape')],
  example: {
    attributes: {
      author: 'Forhad'
    }
  },
  edit: _progress_circle__WEBPACK_IMPORTED_MODULE_15__.edit,
  save: _progress_circle__WEBPACK_IMPORTED_MODULE_15__.save
}, {
  name: 'wpas-blocks/leader-board',
  title: 'Leader Board',
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('This Block showing Leader Board.'),
  category: 'er-block-cat',
  icon: _src_icons__WEBPACK_IMPORTED_MODULE_2__["default"].leaderBoard,
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('progress'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('circle'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('round'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('shape')],
  example: {
    attributes: {
      author: 'Forhad'
    }
  },
  edit: _leader_board__WEBPACK_IMPORTED_MODULE_16__.edit,
  save: _leader_board__WEBPACK_IMPORTED_MODULE_16__.save
}, {
  name: 'wpas-blocks/star-tag',
  title: 'Star Tag',
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('This Block showing Star Tag.'),
  category: 'er-block-cat',
  icon: _src_icons__WEBPACK_IMPORTED_MODULE_2__["default"].starTag,
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('progress'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('circle'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('round'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('shape')],
  example: {
    attributes: {
      author: 'Forhad'
    }
  },
  edit: _star_tag__WEBPACK_IMPORTED_MODULE_17__.edit,
  save: _star_tag__WEBPACK_IMPORTED_MODULE_17__.save
}, {
  name: 'wpas-blocks/info-capsule',
  title: 'Info Capsule',
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('This Block showing Star Tag.'),
  category: 'er-block-cat',
  icon: _src_icons__WEBPACK_IMPORTED_MODULE_2__["default"].infoCapsule,
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('progress'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('circle'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('round'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('shape')],
  example: {
    attributes: {
      author: 'Forhad'
    }
  },
  edit: _info_capsule__WEBPACK_IMPORTED_MODULE_18__.edit,
  save: _info_capsule__WEBPACK_IMPORTED_MODULE_18__.save
}, {
  name: 'wpas-blocks/quick-summary',
  title: 'Quick Summary',
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('This Block showing Star Tag.'),
  category: 'er-block-cat',
  icon: _src_icons__WEBPACK_IMPORTED_MODULE_2__["default"].quickSummary,
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('progress'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('circle'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('round'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('shape')],
  example: {
    attributes: {
      author: 'Forhad'
    }
  },
  edit: _quick_summary__WEBPACK_IMPORTED_MODULE_19__.edit,
  save: _quick_summary__WEBPACK_IMPORTED_MODULE_19__.save
}];
blockSettings.forEach(block => {
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(block.name, block);
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map