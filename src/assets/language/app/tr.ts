import type { TranslationContents } from '@/types/language'

const content: TranslationContents = {
  converterTitle: 'Dönüştür',
  converter: {
    selectFile: 'Dosya Seç',
    selectedFile: 'Seçilen',
    targetFormat: 'Hedef Format',
    otherFormat: 'Diğer format',
    convertButton: '🚀 Dönüştür',
    downloadFile: '📥 Dosyayı İndir',
    logsButton: 'Loglar',
  },
  infoTitle: 'Bilgi',
  info: {
    title: '🎥 Mobil Video, Görsel ve Ses Dönüştürücü',
    description:
      'Bu uygulama, <strong>Capacitor.js</strong> ve <strong>FFmpeg WebAssembly</strong> teknolojileri ile geliştirilmiştir. Cihazınıza herhangi bir ek yazılım kurmanıza gerek kalmadan, mobil ortamda <strong>video, görsel ve ses dosyalarını</strong> dönüştürmenize olanak sağlar.',
    items: [
      {
        title: '🔄 Desteklenen Dönüştürme İşlemleri',
        items: [
          {
            title: '🎞️ Video Formatları',
            paragraphs: [
              '<strong>Giriş:</strong> MP4, AVI, MOV, MKV, WEBM, FLV, MPEG, 3GP ve daha fazlası',
              '<strong>Çıkış:</strong> MP4 (H.264), WEBM (VP8/VP9), AVI, GIF (animasyonlu), MPEG',
            ],
          },
          {
            title: '🖼️ Görsel Formatları',
            paragraphs: [
              '<strong>Giriş:</strong> JPG, PNG, BMP, TIFF, WEBP',
              '<strong>Çıkış:</strong> PNG, JPG, WEBP, BMP',
            ],
          },
          {
            title: '🎵 Ses Formatları',
            paragraphs: [
              '<strong>Giriş:</strong> MP3, WAV, AAC, OGG, FLAC, M4A, AMR',
              '<strong>Çıkış:</strong> MP3, WAV, OGG, AAC, M4A',
            ],
          },
        ],
      },
      {
        title: '⚙️ Özellikler',
        items: [
          {
            title: 'Tamamen cihaz üzerinde çalışır',
            paragraphs: ['Veriler cihaz dışına aktarılmaz, <strong>gizliliğiniz korunur</strong>.'],
          },
          {
            title: 'Offline kullanılabilir',
            paragraphs: ['Uygulama <strong>internet bağlantısı olmadan</strong> çalışabilir.'],
          },
          {
            title: 'Hızlı ve verimli dönüşüm',
            paragraphs: ['Mobilde optimize edilmiş <strong>FFmpeg WASM</strong> performansı.'],
          },
          {
            title: 'Modern mobil arayüz',
            paragraphs: ['Dokunmatik uyumlu, <strong>kolay ve sezgisel tasarım</strong>.'],
          },
        ],
      },
      {
        title: '📚 Daha Fazla Bilgi',
        items: [
          {
            title: 'FFmpeg ve Kaynaklar',
            paragraphs: [
              'Uygulama, <strong>FFmpeg</strong> motorunu mobilde WebAssembly üzerinden çalıştırır.',
              'Daha fazla bilgi için: <a href="https://ffmpeg.org" target="_blank">ffmpeg.org</a>, <a href="https://capacitorjs.com" target="_blank">Capacitor.js</a>',
            ],
          },
        ],
      },
      {
        title: '🚧 Gelecek Planlar',
        items: [
          {
            title: 'Yakında gelecek özellikler',
            paragraphs: [
              'Videodan ses çıkarma',
              'Video kesme ve kırpma araçları',
              'Çoklu dosya dönüştürme',
              'Sıkıştırma ve kalite seçimi',
            ],
          },
        ],
      },
    ],
  },
  aboutTitle: 'Hakkında',
  about: [
    {
      title: 'Uygulama',
      items: [
        {
          title: 'Web Sayfası',
          label: 'UConverter',
          value: 'https://uconverter.mehmetuysal.dev',
        },
        {
          title: 'Kaynak Kodu',
          label: 'GitHub',
          value: 'https://github.com/daibaiyang/vue3-ssr',
        },
      ],
    },
    {
      title: 'Geliştirici',
      items: [
        {
          title: 'Kişisel Web Sitesi',
          label: 'Mehmet Uysal',
          value: 'https://mehmetuysal.dev',
        },
        {
          title: 'Tüm Projeler',
          label: 'GitHub',
          value: 'https://github.com/uys2000',
        },
      ],
    },
    {
      title: 'İletişim',
      items: [
        {
          title: 'E-posta',
          label: 'hi@mehmetuysal.dev',
          value: 'mailto:hi@mehmetuysal.dev',
        },
        {
          title: 'Mesaj',
          label: '@uysal2000',
          value: 'https://t.me/uysal2000',
        },
      ],
    },
    {
      title: 'Diğer',
      items: [
        {
          title: 'Gizlilik Politikası',
          label: 'Policy',
          value: 'https://uconverter.mehmetuysal.dev',
        },
      ],
    },
  ],
}
export default content
