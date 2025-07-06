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
    title: '🎥 Browser-Based Video, Image and Audio Converter',
    description:
      'This web-based application is built using <strong>FFmpeg WebAssembly (WASM)</strong> technology. Without installing any software, you can quickly and securely convert video, photo, and audio files entirely in your browser.',
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
            title: 'Runs in the browser',
            paragraphs: ['No uploads, <strong>full privacy</strong>.'],
          },
          {
            title: 'Works offline',
            paragraphs: ['Thanks to <strong>PWA support</strong>.'],
          },
          {
            title: 'Fast conversion',
            paragraphs: ['Optimized <strong>FFmpeg WASM</strong> performance.'],
          },
          {
            title: 'User-friendly',
            paragraphs: ['Drag-and-drop support and <strong>clean interface</strong>.'],
          },
        ],
      },
      {
        title: '📚 More Information',
        items: [
          {
            title: 'FFmpeg and resources',
            paragraphs: [
              'This app uses the <strong>WebAssembly build</strong> of the open-source FFmpeg project.',
              'For more info: <a href="https://ffmpeg.org" target="_blank">ffmpeg.org</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats" target="_blank">MDN Media Formats</a>',
            ],
          },
        ],
      },
      {
        title: '🚧 Roadmap',
        items: [
          {
            title: 'Upcoming features',
            paragraphs: [
              'Extract audio from video',
              'Basic video editing (cut, crop)',
              'Batch file conversion',
              'Quality settings and compression',
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
