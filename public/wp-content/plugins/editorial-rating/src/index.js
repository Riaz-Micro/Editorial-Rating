import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import icons from '../src/icons';

import { edit as editCrossRating, save as saveCrossRating } from './cross-rating';
import { edit as editReviewSummary, save as saveReviewSummary } from './review-summary';
import { edit as editReviewInfoBox, save as saveReviewInfoBox } from './review-info-box';
import { edit as editProsCons, save as saveProsCons } from './pros-cons';
import { edit as editFreemiumTable, save as saveFreemiumTable } from './freemium-table';
import { edit as editPricingTable, save as savePricingTable } from './pricing-table';
import { edit as editStarRating, save as saveStarRating } from './star-rating';
import { edit as editBannerAd, save as saveBannerAd } from './banner-ad';
import { edit as editNoticeBox, save as saveNoticeBox } from './notice-box';
import { edit as editTestimonials, save as saveTestimonials } from './testimonials';
import { edit as editVipQuote, save as saveVipQuote } from './vip-quote';
import { edit as editProgressBar, save as saveProgressBar } from './progress-bar';
import { edit as editProgressCircle, save as saveProgressCircle } from './progress-circle';
import { edit as editLeaderBoard, save as saveLeaderBoard } from './leader-board';
import { edit as editStarTag, save as saveStarTag } from './star-tag';
import { edit as editInfoCapsule, save as saveInfoCapsule } from './info-capsule';
import { edit as editQuickSummary, save as saveQuickSummary } from './quick-summary';
import { edit as editEditorialRating, save as saveEditorialRating } from './editorial-rating';
import { edit as editEditorialScoreList, save as saveEditorialScoreList } from './editorial-score-list';

const blockSettings = [
    {
        name: 'wpas-blocks/cross-rating',
        title: __('Cross Rating Template'),
        description: __('This Block showing a Cross Rating column list.'),
        category: 'er-block-cat',
        icon: icons.listOl,
        keywords: [ __( 'Editorial' ), __( 'Rating' ), __( 'Cross' ), __( 'List' ) ],
        example: {
            attributes: {
                author: 'Forhad',
            },
        },
        edit: editCrossRating,
        save: saveCrossRating,
    },
    {
        name: 'wpas-blocks/review-summary',
        title: __('Review Summary'),
        description: __('This Block showing a Review Summary.'),
        category: 'er-block-cat',
        icon: icons.reviewSummary,
        keywords: [ __( 'Review' ), __( 'Summary' ), __( 'Table' ), __( 'Editorial' ), __( 'Rating' ) ],
        example: {
            attributes: {
                author: 'Forhad',
            },
        },
        edit: editReviewSummary,
        save: saveReviewSummary,
    },
    {
        name: 'wpas-blocks/review-info-box',
        title: 'Review Info Box',
        description: __('This Block showing an info box for Review Rating.'),
        category: 'er-block-cat',
        icon: icons.reviewInfoBox,
        keywords: [ __( 'Editorial' ), __( 'Rating' ), __( 'Info' ), __( 'Box' ) ],
        example: {
            attributes: {
                author: 'Forhad',
            },
        },
        edit: editReviewInfoBox,
        save: saveReviewInfoBox,
    },
    {
        name: 'wpas-blocks/pros-cons',
        title: 'PROS CONS',
        description: __('This Block showing a PROS CONS box.'),
        category: 'er-block-cat',
        icon: icons.prosCons,
        keywords: [ __( 'Editorial' ), __( 'Rating' ), __( 'Pros' ), __( 'Cons' ) ],
        example: {
            attributes: {
                author: 'Forhad',
            },
        },
        edit: editProsCons,
        save: saveProsCons,
    },
    {
        name: 'wpas-blocks/freemium-table',
        title: 'Freemium Table',
        description: __('This Block showing a Freemium table.'),
        category: 'er-block-cat',
        icon: icons.freemiumTable,
        keywords: [ __( 'Editorial' ), __( 'Rating' ), __( 'freemium' ), __( 'table' ) ],
        example: {
            attributes: {
                author: 'Forhad',
            },
        },
        edit: editFreemiumTable,
        save: saveFreemiumTable,
    },
    {
        name: 'wpas-blocks/pricing-table',
        title: 'Pricing Table',
        description: __('This Block showing a Pricing table.'),
        category: 'er-block-cat',
        icon: icons.pricingTable,
        keywords: [ __( 'Editorial' ), __( 'Rating' ), __( 'pricing' ), __( 'table' ) ],
        example: {
            attributes: {
                author: 'Forhad',
            },
        },
        edit: editPricingTable,
        save: savePricingTable,
    },
    {
        name: 'wpas-blocks/star-rating',
        title: 'Star Rating',
        description: __('This Block showing a star rating.'),
        category: 'er-block-cat',
        icon: icons.starRating,
        keywords: [ __( 'Star' ), __( 'Rating' ), __( 'icon' ), __( 'details' ) ],
        example: {
            attributes: {
                author: 'Forhad',
            },
        },
        edit: editStarRating,
        save: saveStarRating,
    },
    {
        name: 'wpas-blocks/banner-ad',
        title: 'Banner Ad',
        description: __('This Block showing a banner Ad.'),
        category: 'er-block-cat',
        icon: icons.bannerAd,
        keywords: [ __( 'Star' ), __( 'Rating' ), __( 'banner' ), __( 'ad' ) ],
        example: {
            attributes: {
                author: 'Forhad',
            },
        },
        edit: editBannerAd,
        save: saveBannerAd,
    },
    {
        name: 'wpas-blocks/notice-box',
        title: 'Notice Box',
        description: __('This Block showing a notice box.'),
        category: 'er-block-cat',
        icon: icons.noticeBox,
        keywords: [ __( 'Star' ), __( 'Rating' ), __( 'info' ), __( 'notice' ) ],
        example: {
            attributes: {
                author: 'Forhad',
            },
        },
        edit: editNoticeBox,
        save: saveNoticeBox,
    },
    {
        name: 'wpas-blocks/testimonials',
        title: 'Testimonials',
        description: __('This Block showing Testimonials.'),
        category: 'er-block-cat',
        icon: icons.testimonial,
        keywords: [ __( 'testimonials' ), __( 'client' ), __( 'review' ), __( 'star' ) ],
        example: {
            attributes: {
                author: 'Forhad',
            },
        },
        edit: editTestimonials,
        save: saveTestimonials,
    },
    {
        name: 'wpas-blocks/vip-quote',
        title: 'VIP Quote',
        description: __('This Block showing VIP Quote.'),
        category: 'er-block-cat',
        icon: icons.vipQuote,
        keywords: [ __( 'vip' ), __( 'quote' ), __( 'review' ), __( 'rating' ) ],
        example: {
            attributes: {
                author: 'Forhad',
            },
        },
        edit: editVipQuote,
        save: saveVipQuote,
    },
    {
        name: 'wpas-blocks/progress-bar',
        title: 'Progress Bar',
        description: __('This Block showing Progress Bar.'),
        category: 'er-block-cat',
        icon: icons.progressBar,
        keywords: [ __( 'progress' ), __( 'bar' ), __( 'line' ), __( 'range' ) ],
        example: {
            attributes: {
                author: 'Forhad',
            },
        },
        edit: editProgressBar,
        save: saveProgressBar,
    },
    {
        name: 'wpas-blocks/progress-circle',
        title: 'Progress Circle',
        description: __('This Block showing Progress Circle.'),
        category: 'er-block-cat',
        icon: icons.progressCircle,
        keywords: [ __( 'progress' ), __( 'circle' ), __( 'round' ), __( 'shape' ) ],
        example: {
            attributes: {
                author: 'Forhad',
            },
        },
        edit: editProgressCircle,
        save: saveProgressCircle,
    },
    {
        name: 'wpas-blocks/leader-board',
        title: 'Leader Board',
        description: __('This Block showing Leader Board.'),
        category: 'er-block-cat',
        icon: icons.leaderBoard,
        keywords: [ __( 'progress' ), __( 'circle' ), __( 'round' ), __( 'shape' ) ],
        example: {
            attributes: {
                author: 'Forhad',
            },
        },
        edit: editLeaderBoard,
        save: saveLeaderBoard,
    },
    {
        name: 'wpas-blocks/star-tag',
        title: 'Star Tag',
        description: __('This Block showing Star Tag.'),
        category: 'er-block-cat',
        icon: icons.starTag,
        keywords: [ __( 'progress' ), __( 'circle' ), __( 'round' ), __( 'shape' ) ],
        example: {
            attributes: {
                author: 'Forhad',
            },
        },
        edit: editStarTag,
        save: saveStarTag,
    },
    {
        name: 'wpas-blocks/info-capsule',
        title: 'Info Capsule',
        description: __('This Block showing Star Tag.'),
        category: 'er-block-cat',
        icon: icons.infoCapsule,
        keywords: [ __( 'progress' ), __( 'circle' ), __( 'round' ), __( 'shape' ) ],
        example: {
            attributes: {
                author: 'Forhad',
            },
        },
        edit: editInfoCapsule,
        save: saveInfoCapsule,
    },
    {
        name: 'wpas-blocks/quick-summary',
        title: 'Quick Summary',
        description: __('This Block showing Star Tag.'),
        category: 'er-block-cat',
        icon: icons.quickSummary,
        keywords: [ __( 'progress' ), __( 'circle' ), __( 'round' ), __( 'shape' ) ],
        example: {
            attributes: {
                author: 'Forhad',
            },
        },
        edit: editQuickSummary,
        save: saveQuickSummary,
    },
    {
        name: 'wpas-blocks/editorial-rating',
        title: 'Editorial Rating',
        description: __('This Block showing Editorial Rating.'),
        category: 'er-block-cat',
        icon: icons.quickSummary,
        keywords: [ __( 'progress' ), __( 'circle' ), __( 'editorial' ), __( 'rating' ) ],
        example: {
            attributes: {
                author: 'Forhad',
            },
        },
        edit: editEditorialRating,
        save: saveEditorialRating,
    },
    {
        name: 'wpas-blocks/editorial-score-list',
        title: 'Editorial Score List',
        description: __('This Block showing Editorial Score List.'),
        category: 'er-block-cat',
        icon: icons.quickSummary,
        keywords: [ __( 'progress' ), __( 'circle' ), __( 'editorial' ), __( 'rating' ) ],
        example: {
            attributes: {
                author: 'Forhad',
            },
        },
        edit: editEditorialScoreList,
        save: saveEditorialScoreList,
    }
];

blockSettings.forEach((block) => {
    registerBlockType(block.name, block);
});