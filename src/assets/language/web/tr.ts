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
    title: '🎥 Tarayıcı Üzerinde Video, Görsel ve Ses Dönüştürücü',
    description:
      'Bu web tabanlı uygulama, <strong>FFmpeg WebAssembly (WASM)</strong> teknolojisi ile geliştirilmiştir. Herhangi bir yazılım kurmadan, tamamen tarayıcı üzerinde video, fotoğraf ve ses dosyalarını hızlı ve güvenli şekilde dönüştürebilirsiniz.',
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
            title: 'Tarayıcıda çalışır',
            paragraphs: ['Dosyalar yüklenmez, <strong>gizlilik korunur</strong>.'],
          },
          {
            title: 'Offline kullanılabilir',
            paragraphs: ['<strong>PWA desteği</strong> sayesinde internet bağlantısı gerekmez.'],
          },
          {
            title: 'Hızlı dönüşüm',
            paragraphs: ['<strong>FFmpeg WASM</strong> performansı optimize edilmiştir.'],
          },
          {
            title: 'Kullanıcı dostu',
            paragraphs: ['Sürükle-bırak desteği ve <strong>basit arayüz</strong>.'],
          },
        ],
      },
      {
        title: '📚 Daha Fazla Bilgi',
        items: [
          {
            title: 'FFmpeg ve kaynaklar',
            paragraphs: [
              'Bu uygulama, açık kaynaklı FFmpeg projesinin <strong>WebAssembly sürümünü</strong> kullanır.',
              'Daha fazla bilgi için: <a href="https://ffmpeg.org" target="_blank">ffmpeg.org</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats" target="_blank">MDN Medya Formatları</a>',
            ],
          },
        ],
      },
      {
        title: '🚧 Gelecek Planlar',
        items: [
          {
            title: 'Yeni özellikler',
            paragraphs: [
              "Video'dan ses çıkarma",
              'Temel video düzenleme (kesme, kırpma)',
              'Çoklu dosya dönüştürme',
              'Kalite ayarı ve sıkıştırma',
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
