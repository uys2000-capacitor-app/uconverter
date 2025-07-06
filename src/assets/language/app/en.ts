import type { TranslationContents } from '@/types/language'
const content: TranslationContents = {
  converterTitle: 'Convert',
  converter: {
    selectFile: 'Select File',
    selectedFile: 'Selected',
    targetFormat: 'Target Format',
    otherFormat: 'Other format',
    convertButton: '🚀 Convert',
    downloadFile: '📥 Download File',
    logsButton: 'Logs',
  },
  infoTitle: 'Info',
  info: {
    title: '🎥 Mobile Video, Image and Audio Converter',
    description:
      'This application is powered by <strong>Capacitor.js</strong> and <strong>FFmpeg WebAssembly</strong>. It allows you to convert <strong>video, image, and audio files</strong> on your mobile device without installing extra tools or needing an internet connection.',
    items: [
      {
        title: '🔄 Supported Conversion Formats',
        items: [
          {
            title: '🎞️ Video Formats',
            paragraphs: [
              '<strong>Input:</strong> MP4, AVI, MOV, MKV, WEBM, FLV, MPEG, 3GP and more',
              '<strong>Output:</strong> MP4 (H.264), WEBM (VP8/VP9), AVI, GIF (animated), MPEG',
            ],
          },
          {
            title: '🖼️ Image Formats',
            paragraphs: [
              '<strong>Input:</strong> JPG, PNG, BMP, TIFF, WEBP',
              '<strong>Output:</strong> PNG, JPG, WEBP, BMP',
            ],
          },
          {
            title: '🎵 Audio Formats',
            paragraphs: [
              '<strong>Input:</strong> MP3, WAV, AAC, OGG, FLAC, M4A, AMR',
              '<strong>Output:</strong> MP3, WAV, OGG, AAC, M4A',
            ],
          },
        ],
      },
      {
        title: '⚙️ Features',
        items: [
          {
            title: 'Runs entirely on device',
            paragraphs: ['No data is uploaded — <strong>your privacy is protected</strong>.'],
          },
          {
            title: 'Works offline',
            paragraphs: ['No internet required thanks to full local processing.'],
          },
          {
            title: 'High performance',
            paragraphs: ['Optimized <strong>FFmpeg WASM</strong> engine for mobile.'],
          },
          {
            title: 'Touch-friendly interface',
            paragraphs: ['Modern, <strong>easy-to-use design</strong> for mobile users.'],
          },
        ],
      },
      {
        title: '📚 More Information',
        items: [
          {
            title: 'FFmpeg and Resources',
            paragraphs: [
              'This app runs <strong>FFmpeg</strong> inside WebAssembly on mobile.',
              'Learn more at: <a href="https://ffmpeg.org" target="_blank">ffmpeg.org</a>, <a href="https://capacitorjs.com" target="_blank">Capacitor.js</a>',
            ],
          },
        ],
      },
      {
        title: '🚧 Roadmap',
        items: [
          {
            title: 'Upcoming Features',
            paragraphs: [
              'Extract audio from video',
              'Trim and crop videos',
              'Batch file conversion',
              'Compression and quality settings',
            ],
          },
        ],
      },
    ],
  },
  aboutTitle: 'About',
  about: [
    {
      title: 'App',
      items: [
        {
          title: 'Web Page',
          label: 'UConverter',
          value: 'https://uconverter.mehmetuysal.dev',
        },
        {
          title: 'Source Code',
          label: 'GitHub',
          value: 'https://github.com/daibaiyang/vue3-ssr',
        },
      ],
    },
    {
      title: 'Creator',
      items: [
        {
          title: 'Web Page',
          label: 'Mehmet Uysal',
          value: 'https://mehmetuysal.dev',
        },
        {
          title: 'All Projects',
          label: 'GitHub',
          value: 'https://github.com/uys2000',
        },
      ],
    },
    {
      title: 'Contact',
      items: [
        {
          title: 'Email',
          label: 'hi@mehmetuysal.dev',
          value: 'mailto:hi@mehmetuysal.dev',
        },
        {
          title: 'Message',
          label: '@uysal2000',
          value: 'https://t.me/uysal2000',
        },
      ],
    },
    {
      title: 'Others',
      items: [
        {
          title: 'Privacy Policy',
          label: 'Policy',
          value: 'https://uconverter.mehmetuysal.dev',
        },
      ],
    },
  ],
}

export default content
