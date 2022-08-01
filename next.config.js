/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['pt-BR', 'en-US', 'es-ES'],
    defaultLocale: 'pt-BR',
  }
}