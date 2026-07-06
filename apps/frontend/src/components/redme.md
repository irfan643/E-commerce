 defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: 'label'
  },
  productId: {
    type: [String, Number],
    required: false
  },
  title: {
    type: String,
    default: 'Title'
  },
  subTitle: {
    type: String,
    default: ''
  },
  cardWidth: {
    type: String,
    default: 'w-full' // control card width
  },
  cardHeight: {
    type: String,
    default: 'h-full' // control card height
  },

  imageWidth: {
    type: String,
    default: 'w-full' // image width
  },
  imageHeight: {
    type: String,
    default: 'h-[80%]' // image height
  },
  navigateTo: {
    type: String,
    default: '/Product/' // if set, auto navigate to this route
  },
  subtitleClass: {
    type: String,
    default: ''
  },
   txt_section: {
    type: String,
    default: ''
  },
})