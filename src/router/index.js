import Vue from 'vue'
import Router from 'vue-router'
// Main menu
import DocIntro from '../views/DocIntro'
import DocStart from '../views/DocStart'
import DocTrain from '../views/DocTrain'
import DocHighlights from '../views/DocHighlights'
import DocSocial from '../views/DocSocial'
// Sub menu
import DocButton from '../views/subViews/DocButton'
import DocLayout from '../views/subViews/DocLayout'
import DocDesign from '../views/subViews/DocDesign'
import DocGrid from '../views/subViews/DocGrid'
import DocTabs from '../views/subViews/DocTabs'
import DocPager from '../views/subViews/DocPager'
import DocIcon from '../views/subViews/DocIcon'
import DocInput from '../views/subViews/DocInput'
import DocValidator from '../views/subViews/DocValidator'
import DocCascader from '../views/subViews/DocCascader'
import DocCarousel from '../views/subViews/DocCarousel'
import DocCollapse from '../views/subViews/DocCollapse'
import DocAlert from '../views/subViews/DocAlert'
import DocNav from '../views/subViews/DocNav'
import DocPopover from '../views/subViews/DocPopover'
import DocTable from '../views/subViews/DocTable'
import DocUploader from '../views/subViews/DocUploader'
import DocSticky from '../views/subViews/DocSticky'
import DocScroll from '../views/subViews/DocScroll'
import DocDatePicker from '../views/subViews/DocDatePicker'
import DocHero from '../views/subViews/DocHero'
import DocBlood from '../views/subViews/DocBlood'
import DocBadge from '../views/subViews/DocBadge'
import DocSelect from '../views/subViews/DocSelect'
import DocSlider from '../views/subViews/DocSlider'
import DocSwitch from '../views/subViews/DocSwitch'
import DocModal from '../views/subViews/DocModal'
import DocLabel from '../views/subViews/DocLabel'
import DocRadio from '../views/subViews/DocRadio'
import DocCheckbox from '../views/subViews/DocCheckbox'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'intro',
            component: DocIntro
        },
        {
            path: '/start',
            name: 'start',
            component: DocStart
        },
        {
            path: '/train',
            name: 'train',
            component: DocTrain
        },
        {
            path: '/social',
            name: 'social',
            component: DocSocial
        },
        {
            path: '/highlights',
            name: 'highlights',
            component: DocHighlights
        },
        {
            path: '/components/button',
            name: 'components',
            component: DocButton
        },
        {
            path: '/components/layout',
            name: 'layout',
            component: DocLayout,
            alias: '/components'
        },
        {
            path: '/components/design',
            name: 'design',
            component: DocDesign
        },
        {
            path: '/components/grid',
            name: 'grid',
            component: DocGrid
        },
        {
            path: '/components/tabs',
            name: 'tabs',
            component: DocTabs
        },
        {
            path: '/components/nav',
            name: 'nav',
            component: DocNav
        },
        {
            path: '/components/pager',
            name: 'pager',
            component: DocPager
        },
        {
            path: '/components/icon',
            name: 'icon',
            component: DocIcon
        },
        {
            path: '/components/input',
            name: 'input',
            component: DocInput
        },
        {
            path: '/components/uploader',
            name: 'uploader',
            component: DocUploader
        },
        {
            path: '/components/table',
            name: 'table',
            component: DocTable
        },
        {
            path: '/components/validator',
            name: 'validator',
            component: DocValidator
        },
        {
            path: '/components/cascader',
            name: 'cascader',
            component: DocCascader
        },
        {
            path: '/components/carousel',
            name: 'carousel',
            component: DocCarousel
        },
        {
            path: '/components/collapse',
            name: 'collapse',
            component: DocCollapse
        },
        {
            path: '/components/alert',
            name: 'alert',
            component: DocAlert
        },
        {
            path: '/components/popover',
            name: 'popover',
            component: DocPopover
        },
        {
            path: '/components/sticky',
            name: 'sticky',
            component: DocSticky
        },
        {
            path: '/components/scroll',
            name: 'scroll',
            component: DocScroll
        },
        {
            path: '/components/date-picker',
            name: 'date-picker',
            component: DocDatePicker
        },
        {
            path: '/components/hero',
            name: 'hero',
            component: DocHero
        },
        {
            path: '/components/blood',
            name: 'blood',
            component: DocBlood
        },
        {
            path: '/components/badge',
            name: 'badge',
            component: DocBadge
        },
        {
            path: '/components/select',
            name: 'select',
            component: DocSelect
        },
        {
            path: '/components/slider',
            name: 'slider',
            component: DocSlider
        },
        {
            path: '/components/switch',
            name: 'switch',
            component: DocSwitch
        },
        {
            path: '/components/modal',
            name: 'modal',
            component: DocModal
        },
        {
            path: '/components/label',
            name: 'label',
            component: DocLabel
        },
        {
            path: '/components/radio',
            name: 'radio',
            component: DocRadio
        },
        {
            path: '/components/checkbox',
            name: 'checkbox',
            component: DocCheckbox
        }
    ]
})
export default router
